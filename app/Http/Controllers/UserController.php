<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Firebase\JWT\JWT;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMail;
use App\Models\User;

class UserController extends Controller
{


    public function hashPassword($salt = '', $password = '', $algorithm_callable = 'sha1')
    {

        $algorithm = $algorithm_callable;

        if (false !== $pos = strpos($algorithm, '::')) {
            $algorithm = array(substr($algorithm, 0, $pos), substr($algorithm, $pos + 2));
        }


        return call_user_func_array($algorithm_callable, array($salt . $password));
    }

 

    public function index(Request $request)
    {   
        $user= $request->user;
        return response()->json($user);

    }

    public function login(Request $request)
    {
        $username = $request->input('username');
        $password = $request->input('password');
        $user_type = $request->input('user_type');
        $user = User::where('username', $username)->where('user_type', $user_type)->where('is_active', 1)->first();

        if ($user) {
            if ($user->user_type != "S") {
                return response()->json(['message' => 'Tài khoản học sinh không chính xác'], 401);
            } else {
                $salt = $user->salt;
                $check_pass = sha1($salt . $password);

                if ($check_pass == $user->password) {
                    // Tạo token tại đây và trả về
                    $token = $this->generateApiKey($user->salt);
                    $user->accessToken = $token;
                    $user->save();
                    //return $token;
                    return response()->json(['token' => $token, 'user' => $user , 'message' => 'Đăng nhập thành công'], 200);
                }

                return response()->json(['message' => 'Tên đăng nhập hoặc mật khẩu không chính xác'], 401);
            }
        }

        return response()->json(['message' => 'Tài khoản không tồn tại'], 401);
    }

    // Thêm hàm tạo token
    public function generateApiKey($salt)
    {
        $random = $this->randomString();
        $api_key = hash('sha256', (time() . $salt . $random));
        return $api_key;
    }

    public function randomString($length = 10)
    {

        $str = "";

        $characters = array_merge(range('A', 'Z'), range('a', 'z'), range('0', '9'));

        $max = count($characters) - 1;

        for ($i = 0; $i < $length; $i++) {
            $rand = mt_rand(0, $max);
            $str .= $characters[$rand];
        }

        return $str;
    }
    public function logout()
    {   
        Auth::logout();
        return response()->json(['message' => 'Logged out successfully'], 200);
        //return redirect()->back();
    }

    public function generatePass(Request $request)
    {
        $email = $request->input('email');
        $user_type = $request->input('user_type');
        $user = User::where('email_address', $email)->where('user_type', $user_type)->where('is_active', 1)->first();


        if ($user) {

            $new_password = 'Sv' . '' . rand(100, 999);
            $new_pass = $this->hashPassword($user->salt, $new_password, $user->algorithm);
            $user->password = $new_pass;

            $user->save();

            try {
                Mail::to($email)->send(new SendMail($new_password));
                return response()->json(['code' => 200, 'message' => 'đổi mật khẩu thành công']);
            } catch (\Exception $e) {
                return response()->json(['code' => 400, 'message' => 'đổi mật khẩu thất bại']);
            }
        } else {
            return response()->json(['code' => 500, 'message' => 'email này chưa được đăng ký với nhà trường']);
        }
    }
    public function changePassword(Request $request)
    {
        $email = $request->input('email');
        $current_pass = $request->input('current_pass');
        $new_pass = $request->input('new_pass');
        $user_type = $request->input('user_type');

        $user = User::where('email_address', $email)->where('user_type', $user_type)->where('is_active', 1)->first();



        if ($user) {
            $current_pass_hash = $this->hashPassword($user->salt, $current_pass, $user->algorithm);
            if ($current_pass_hash == $user->password) {

                $new_pass_hash = $this->hashPassword($user->salt, $new_pass, $user->algorithm);
                $user->password = $new_pass_hash;
                $user->save();
                return response()->json(['code' => 200, 'message' => 'Đổi mật khẩu thành công']);
            } else {
                return response()->json(['code' => 400, 'message' => 'đổi mật khẩu thất bại']);
            }
        } else {
            return response()->json(['code' => 500, 'message' => 'đổi mật khẩu thất bại']);
        }



        // if ($user) {


        //     $new_pass_hash = $this->hashPassword($user->salt, $new_pass, $user->algorithm);
        //     $user->password = $new_pass_hash;

        //     $user->save();

        //     try {
        //         Mail::to($email)->send(new SendMail($new_password));
        //         return response()->json(['code' => 200, 'message' => 'đổi mật khẩu thành công']);
        //     } catch (\Exception $e) {
        //         return response()->json(['code' => 400, 'message' => 'đổi mật khẩu thất bại']);
        //     }
        // } else {
        //     return response()->json(['code' => 500, 'message' => 'email này chưa được đăng ký với nhà trường']);
        // }
    }
}

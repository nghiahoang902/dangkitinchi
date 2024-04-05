<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\User; 

class ApiTokenMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $apiToken = $request->header('Authorization');

        if (!$apiToken) {
            return response()->json(['error' => 'Authorization header is missing.'], 401);
        }

        // Kiểm tra và lấy user dựa trên api_token
        $user = User::where('accessToken', $apiToken)->first();

        if (!$user) {
            return response()->json(['error' => 'Phiên bản làm việc hết hạn vui lòng đăng nhập lại.'], 401);
        }

        // Gắn user vào request để sử dụng trong controller
        $request->user = $user;

        return $next($request);
    }
}

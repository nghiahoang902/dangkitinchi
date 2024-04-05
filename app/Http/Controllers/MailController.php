<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;
use App\Mail\SendMail;
use Illuminate\Http\Request;

class MailController extends Controller
{
    public function sendMail()
    {

        try {
            $new_password = 'devnghia';
            Mail::to('nguyenchinghia2k2@gmail.com')->send(new SendMail($new_password));
            return response()->json(['message' => 'Email sent successfully']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error sending email', 'error' => $e->getMessage()], 500);
        }
    }
}

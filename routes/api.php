<?php

use App\Http\Controllers\PsRegisterClassController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EduProgramController;
use App\Http\Controllers\ExamSchedule;
use App\Http\Controllers\PsSectionClassController;
use App\Http\Controllers\PsStudentPresenceController;
use App\Http\Controllers\MailController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [UserController::class, 'login']);
Route::middleware(['api.token'])->group(function () {
    // Nhóm các route mà bạn muốn áp dụng middleware 'api.token'
    Route::get('/users', [UserController::class, 'index']);
    Route::post('/logout', [UserController::class, 'logout']);

     //đổi mật khẩu
     Route::get('/forgotpass', [UserController::class, 'generatePass']);
     Route::post('/send-mail', [MailController::class, 'sendMail']);
 
    // Danh sách học phần sinh viên đã dky
    Route::get('/ps-register-class', [PsRegisterClassController::class, 'listRegisterClass']);
    Route::get('/ps-register-class/{id}', [PsRegisterClassController::class, 'listStudentFromSectionClass']);
    
    // Danh sách sinh viên theo mã lớp
    Route::get('/list-student', [PsRegisterClassController::class, 'listStudentFromStudentClass']);

    // Danh sách lớp học phần sv có thể đky
    Route::get('/ps-section-class', [PsRegisterClassController::class, 'sectionClass']); 
    //ds lớp hp mở của môn cần đky 
    Route::get('/list-subject/{id}', [PsRegisterClassController::class, 'listSubjects']); 

    // Danh sách lớp học phần tạm, sv đã dky
    Route::get('/ps-section-class-temp', [PsRegisterClassController::class, 'sectionClassTemp']);

  
    Route::post('/forgotpass', [UserController::class, 'generatePass']);
    Route::post('/changepass', [UserController::class, 'changePassword']);
    // Đăng ký học phần
    
    Route::post('/register-class',[PsRegisterClassController::class,'studentRegisterClass']);
    
    //chương trình đào tạo
    Route::get('/edu-program/', [EduProgramController::class,'index']);

    //Điểm thi theo năm param $year = year_id
    Route::get('/ps-student-presence-semester/{year}',[PsStudentPresenceController::class,'score_semester']);
    //Điểm thành phần theo năm
    Route::get('/ps-student-presence-ratio/{year}',[PsStudentPresenceController::class,'score_ratio']);
    
});

Route::get('/exam_schedule', [ExamSchedule::class, 'examSchedule']);







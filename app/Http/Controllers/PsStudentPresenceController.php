<?php

namespace App\Http\Controllers;
use App\Models\PsStudentPresence;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class PsStudentPresenceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function score_semester(Request $request, $year)
    {
        //return $request->year."aaa";
        $user = $request->user;
        $record = DB::table('ps_student_presence as a')
        // ->join('ps_student as b', 'a.ps_student_id', '=', 'b.id')
        ->leftjoin('ps_training_subject as c','a.ps_training_subject_id','=','c.id')
        ->select('c.name as monhoc','a.score_semester_no1','a.score_semester_no2','a.ps_study_times')
        ->where('a.ps_school_year_id',$year)
        ->where('a.ps_student_id',$user->member_id)
        ->get();
        if ($record->isEmpty()) {
            return response()->json(['message' => 'Sinh viên chưa đăng ký môn nào trong năm.'], 401);
        }
        return $record;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function score_ratio(Request $request, $year)
    {
       // $year = $request->year; 
        $user = $request->user;
        $record = DB::table('ps_student_presence as a')
        // ->join('ps_student as b', 'a.ps_student_id', '=', 'b.id')
        ->join('ps_training_subject as c','a.ps_training_subject_id','=','c.id')
        ->where('a.ps_school_year_id',$year)
        ->where('a.ps_student_id',$user->member_id)
        ->select('c.name','a.score_ratio1_no1','a.score_ratio1_no2','a.score_ratio1_no3','a.score_ratio2_no1','a.score_ratio2_no2','a.score_ratio2_no3','a.ps_study_times')
        ->get();
        if ($record->isEmpty()) {
            return response()->json(['message' => 'Sinh viên chưa đăng ký môn nào trong năm.'], 401);
        }
        return $record;
    }
   
   
}

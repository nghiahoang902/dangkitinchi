<?php

namespace App\Http\Controllers;
use App\Models\Education_program;
use App\Models\User;
use Psr\Log\LoggerInterface;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EduProgramController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    public function index(Request $request)
    {   
        $user = $request->user;
        $mem_id=$user->member_id;
        if($mem_id){
            $userS = DB::table('ps_student as a')
            ->join('ps_courses as b', 'a.ps_courses_id', '=', 'b.id')
            ->join('ps_training_majors as c', 'a.ps_training_majors_id', '=', 'c.id')
            ->join('ps_forms_training as d', 'a.ps_forms_training_id','=','d.id')
            ->select('a.ps_class_id','a.student_code','a.ps_training_majors_id','a.ps_forms_training_id','a.ps_courses_id','b.title as khoa','b.title_short as k','c.name as chuyen_nganh','c.majors_symbol as s_nganh','d.title as hedt','d.duration as namdt','d.forms_training_symbol as symbol_hedt')
            ->where('a.id',$mem_id)
            ->first(); 
           $edu_Pro = $userS;
           $edu_table = DB::table('ps_education_program as a')
           ->join('ps_training_subject as b', 'a.ps_training_subject_id', '=', 'b.id')
           ->select('a.id', 'a.ps_forms_training_id', 'a.ps_training_majors_id', 'a.ps_training_subject_id',
                    'a.teaching_unit', 'a.score_count', 'a.description', 'a.is_activated', 'a.ps_number_lesson', 
                    'a.subject_code', 'a.theory_lesson', 'a.practice_lesson', 'a.ps_test', 'a.score_ratio', 'a.heso_unit',
                    'b.parent_id as monhoctq') 
           ->where('ps_training_majors_id', $userS->ps_training_majors_id)
           ->where('ps_forms_training_id', $userS->ps_forms_training_id)
           ->where('ps_course_id', $userS->ps_courses_id)
           ->get();
       
           $edu_Pro->chuong_trinh = $edu_table; 
           return $edu_Pro; 
        }else{
            return response()->json(['message' => 'Phiên làm việc hết hạn vui lòng đăng nhập lại.','user' => $user], 401);
        }
          
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Models\Education_program  $education_program
     * @return \Illuminate\Http\Response
     */
    public function show(Education_program $education_program)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Models\Education_program  $education_program
     * @return \Illuminate\Http\Response
     */
    public function edit(Education_program $education_program)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Models\Education_program  $education_program
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Education_program $education_program)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Models\Education_program  $education_program
     * @return \Illuminate\Http\Response
     */
    public function destroy(Education_program $education_program)
    {
        //
    }
}

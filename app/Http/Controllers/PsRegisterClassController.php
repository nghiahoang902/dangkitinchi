<?php

namespace App\Http\Controllers;

use App\Http\Resources\ListPsStudentFromRegisterClassResource;
use App\Http\Resources\PsRegisterClassResource;
use App\Http\Resources\PsRegisterClassTempResource;
use App\Http\Resources\PsStudentResource;
use App\Http\Resources\SectionClassDetailResource;
use App\Http\Resources\SectionClassResource;
use App\Models\PsClass;
use App\Models\PsDetailClass;
use App\Models\PsMember;
use App\Models\PsStudent;
use App\Models\PsRegisterClassTemp;
use App\Models\PsSummarySubject;
use App\Models\PsTrainingSubject;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PsRegisterClassController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    // Lấy danh sách lớp học sinh viên đã đky
    public function listRegisterClass(Request $request)
    {      
        $user = $request->user;

        if ($user->user_type == 'S') {

            $userInfo = $user->with('psStudent.sectionClasses')
                ->where('id', $user->id)
                ->where('is_active', 1)
                ->first();
            
            $registerClasses = $userInfo->psStudent->sectionClasses
                ->where('is_type', 1)
                ->sortBy('id');    

            $registerClasses = $userInfo->psStudent->sectionClasses;

            $classArray = [];

            foreach ($registerClasses as $registerClass) {
                if ($registerClass['is_type'] == 1) {

                    $classArray[] = $registerClass;
                }
            }

            $classArrayDesc = collect($classArray)->sortBy('id')->all();

            return PsRegisterClassResource::collection($classArrayDesc);

        }

        return response()->json(['message' => 'Chưa đăng ký học phần']);
    }

    // Lấy danh sách sinh viên theo id lớp học phần 
    public function listStudentFromSectionClass(Request $request, $id)
    {
        $user = $request->user;
        if ($user) {

            $registerClass = $user->psStudent->sectionClasses()
                ->where('is_type', 1)
                ->find($id);
            return new SectionClassDetailResource($registerClass);
        }
        

        return response()->json(['message' => 'Chưa có sinh viên đăng ký']);
    }

    // danh sách sinh viên theo lớp sinh viên
    public function listStudentFromStudentClass(Request $request) 
    {
        $user = $request->user;
    
        if ($user->user_type == 'S') {
            $student =  $user->psStudent;

            $studentAll = PsStudent::where('ps_class_id', $student->ps_class_id)
                ->where('status', 2)    
                ->get();

            return response()->json($studentAll);
        }

        return response()->json(['message' => 'Chưa có sinh viên đăng ký']);
    }

    // danh sách lớp hoc phần sv có thể đky
    public function sectionClass(Request $request) 
    {
        $user = $request->user;
       // return "AAA";
        $psStudent = $user->with('psStudent')
        ->where('id', $user->id)
        ->where('is_active', 1)
        ->first();
        $class = DB::table('ps_class as a')
        ->join('ps_training_subject as b', 'a.ps_subject_id', '=', 'b.id')
        ->leftJoin('ps_semester as d','d.id','=','a.ps_semester_id')
        ->select('b.*','d.unit_price as unit_price')
        ->distinct('ps_subject_id')
        ->where('a.is_type', 1)
        ->where('a.is_activated', 1)
        ->whereNotNull('a.ps_subject_id')
        ->where(function ($query) use ($psStudent) {
            return $query->where('a.ps_training_majors_id', $psStudent->psStudent->ps_training_majors_id)
                ->where('a.ps_forms_training_id', $psStudent->psStudent->ps_forms_training_id);
        })
        ->orWhere(function ($query) {
            return $query->where('a.ps_training_majors_id', 0)
                ->orWhereNull('a.ps_training_majors_id')
                ->orWhere('a.ps_training_majors_id', 0)
                ->orWhereNull('a.ps_training_majors_id', 0);
        })
        ->get();
        foreach($class as $cl){
            $tongtien = $cl->unit_price*$cl->teaching_unit*$cl->heso_unit;
            $cl->total_unit = $tongtien;
        }
        if($class){
            return response()->json(['data'=>$class,'message' => 'Đã có lớp mở đăng ký tín chỉ !']);
        } else {
            return response()->json(['message' => 'Chưa có lớp cho bạn đăng ký !']);
        }
    }
     //danh sach mon hoc cua hocphan mo dky 
    public function listSubjects(Request $request, $id){
        $user = $request->user;
        //  /return "AAA".$id;
         $psStudent = $user->with('psStudent')
         ->where('id', $user->id)
         ->where('is_active', 1)
         ->first();

         $class = DB::table('ps_class as a')
         ->leftJoin('ps_semester as d','d.id','=','a.ps_semester_id')
         ->leftjoin('ps_detail_class as b', 'b.ps_class_id', '=', 'a.id')
         ->join('ps_member as c','c.id' ,'=','a.ps_member_id')
         ->select('b.*','a.ps_subject_id as id_monhoc','a.class_code','a.name','a.ps_semester_id','c.first_name as ho','c.last_name as ten','d.school_year_id','d.unit_price as unit_price')
         ->where('a.is_type', 1)
         ->where('a.is_activated', 1)
         ->where('a.ps_subject_id',$id)
         ->get();
         foreach($class as $cl){
            $lichhoc = "Thứ ". $cl->weekday. ": Tiết ". implode(', ', $this->getNumberList($cl->lesson_start, $cl->lesson_end));
            $hoten = $cl->ho . " " . $cl->ten;
            $cl->lichhoc= $lichhoc;
            $cl->hoten = $hoten;
         }
         if($class){
             return response()->json(['data'=>$class,'message' => 'Đã mở đăng ký tín chỉ !']);
         } else {
             return response()->json(['message' => 'Chưa có lớp cho bạn đăng ký !']);
         }
          
    } 

   public function getNumberList($a, $b) {
        $result = [];
        
        // Đảm bảo a là số nhỏ hơn hoặc bằng b
        if ($a > $b) {
            [$a, $b] = [$b, $a];
        }
    
        // Tạo mảng chứa danh sách số từ a đến b
        for ($i = $a; $i <= $b; $i++) {
            $result[] = $i;
        }
    
        return $result;
    }
    // danh sách lớp học phần tạm, sv đã dky
    public function sectionClassTemp(Request $request) {

        $user = $request->user;

        $temp = $user->psStudent->sectionClassTemps
            ->where('is_type', 1)
            ->sortBy('id'); 
            
        return PsRegisterClassTempResource::collection($temp);

    }





    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function studentRegisterClass(Request $request)
    {
       $user = $request->user;
       $student_id = $user->member_id;
       //return $request->input('ps_class_id');
       $class_id = $request->input('ps_class_id');
       $semester = $request->input('ps_semester_id');
       $school_year = $request->input('ps_school_year_id');
       $id = $request->input('id');
       $total_student= PsDetailClass::where('id',$id)->first();
       if($total_student->total_number_student >= $total_student->max_number_student){
          return response()->json([
            'message' => 'Lớp đã đầy !'
        ], 404);
       } 
       
       $id_monhoc = $request->input('ps_training_subject_id');
       $monhocs =  PsTrainingSubject::select('id','parent_id')->where('id',$id_monhoc)->first(); 
       
       if($monhocs->parent_id!=NULL){
         $monHoctruoc = PsTrainingSubject::where('id',$monhocs->parent_id)->first()->name;
         $kq_monhocs = PsSummarySubject::select('ps_student_id','ps_training_subject_id','score_average1')
         ->where('ps_student_id',$student_id)
         ->where('ps_training_subject_id',$monhocs->parent_id)
         ->orderByDesc('id')
         ->first();
         if($kq_monhocs){
            $kq=$kq_monhocs->score_average1;
             if($kq<4) {
                return response()->json([
                    'message' => 'Bạn chưa qua môn '.$monHoctruoc.' là môn tiên quyết của học phần này nên chưa được đăng ký !'
                ], 404);
             }
         } else {
            return response()->json([
                'message' => 'Bạn phải học môn'.$monHoctruoc.' là môn tiên quyết của học phần này trước mới được đăng ký !'
            ], 404);
         }
         
       }
       
    //    return $monhocs; 
       DB::beginTransaction();
       try { 

        //kiem tra xem mon hoc co mon tien quyet hay khong

        // Check if the user is already registered for the course
        $existingRegistration = PsRegisterClassTemp::where('ps_student_id', $user->member_id)
            ->where('ps_class_id', $class_id)
            ->where('ps_semester_id',$semester)
            ->exists();

        if ($existingRegistration) {
            throw new \Exception('Học phần đã được đăng ký trong kỳ này rồi.');
        } else {
              //check lớp TH xem cùng lớp lý thuyết không 
                    $class_parent_id = $request->input('class_parent_id');

                if($class_parent_id!=''){
                        $existingParentRegis = PsRegisterClassTemp::where('ps_student_id', $user->member_id)
                        ->where('ps_class_id', $class_parent_id)
                        ->where('ps_semester_id',$semester)
                        ->exists();
                    if(!$existingParentRegis){
                        throw new \Exception('Học phần chưa đăng ký môn lý thuyết.');
                    } else {

                        $existingSubRegis = PsRegisterClassTemp::where('ps_student_id', $user->member_id)
                        ->where('ps_semester_id',$semester)
                        ->where('class_parent_id',$class_parent_id)
                        ->exists();
                    if($existingSubRegis){
                        throw new \Exception('Học phần thực hành đã được đăng ký ở lớp khác.');
                    } 
                    //thỏa mãn các đk tiến hành đk
                             $registration = new PsRegisterClassTemp([
                                'ps_student_id' => $user->member_id,
                                'ps_class_id' => $class_id,
                                'class_parent_id' => $class_parent_id,
                                'ps_semester_id' => $semester,
                                'ps_school_year_id' => $school_year,
                                'ps_training_subject_id' => $id_monhoc,
                                'status' => '1',
                                'created_at' => $user->id
                            ]);
            
                            $registration->save(); 

                            //$total_student = Ps

                        }
                 } else {
                    $registration = new PsRegisterClassTemp([
                        'ps_student_id' => $user->member_id,
                        'ps_class_id' => $class_id,
                        'ps_semester_id' => $semester,
                        'ps_school_year_id' => $school_year,
                        'ps_training_subject_id' => $id_monhoc,
                        'status' => '1',
                        'created_at' => $user->id
                    ]);
    
                    $registration->save(); 
                 }
                    
              
        }

        // Commit the transaction if everything is successful
        DB::commit();

        return response()->json(['message' => 'Đăng ký học phần thành công.'], 200);
        } catch (\Exception $e) {
            // An error occurred, rollback the transaction
            DB::rollback();

            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

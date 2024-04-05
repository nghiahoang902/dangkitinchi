<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PsExamRoom extends Model
{
    use HasFactory;

    protected $table = 'ps_exam_room';

    protected $fillable = ['school_year_id', 'ps_semester_id', 'ps_forms_training_id',
        'ps_training_majors_id', 'ps_training_subject_id', 'ps_class_id',
        'ps_class_room_id', 'program_id', 'ps_member_id1',
        'ps_member_id2', 'exam_date', 'exam_time',
        'exam_forms', 'description', 'exam_number'
    ];

    public function psSchoolYear () {
        return $this->belongsTo(PsSchoolYear::class, 'school_year_id', 'id');
    }

    public function psSemester() {
        return $this->belongsTo(PsSemester::class, 'ps_semester_id', 'id');
    }

    public function psFormTraining() {
        
    }
}

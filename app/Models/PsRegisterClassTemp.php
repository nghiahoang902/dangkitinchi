<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PsRegisterClassTemp extends Model
{
    use HasFactory;
    protected $table = 'ps_register_class_temp';
    protected $fillable = [
        'ps_student_id',
        'ps_school_year_id',
        'ps_semester_id',
        'class_parent_id',
        'ps_training_subject_id',
        'ps_class_id'
    ];

    public function psSemester() {
        return $this->belongsTo(PsSemester::class, 'ps_semester_id', 'id');
    }

    public function psStudent() {
        return $this->belongsTo(PsStudent::class, 'ps_student_id', 'id');
    }

    public function psClass() {
        return $this->belongsTo(PsClass::class, 'ps_class_id', 'id');
    }

    public function psTrainingSubject() {
        return $this->belongsTo(PsTrainingSubject::class, 'ps_training_subject_id', 'id');
    }
}

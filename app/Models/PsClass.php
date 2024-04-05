<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PsClass extends Model
{
    use HasFactory;

    protected $table = 'ps_class';

    protected $guarded = [];

    public function psStudents() {
        return $this->belongsToMany(PsStudent::class, 'ps_register_class', 'ps_class_id', 'ps_student_id');
    }

    public function sectionClassChilds() {
        return $this->hasMany(PsClass::class, 'parent_id', 'id');
    }

    public function psMember() {
        return $this->hasOne(PsMember::class, 'id', 'ps_member_id');
    }

    public function psDetailClasses() {
        return $this->hasMany(PsDetailClass::class, 'ps_class_id', 'id');
    }

    public function psTrainingSubject() {
        return $this->hasOne(PsTrainingSubject::class, 'id', 'ps_subject_id');
    }

    public function psSemester() {
        return $this->hasOne(PsSemester::class, 'id', 'ps_semester_id');
    }
}




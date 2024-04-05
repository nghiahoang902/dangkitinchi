<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PsStudent extends Model
{
    use HasFactory;

    protected $table = 'ps_student';

    protected $guarded = [];

    //lớp học phần theo student
    public function sectionClasses() {
        return $this->belongsToMany(PsClass::class, 'ps_register_class', 'ps_student_id', 'ps_class_id');
    }

    //lớp sinh viên 
    public function studentClass() {
        return $this->hasOne(PsClass::class, 'id', 'ps_class_id');
    }

    public function sectionClassTemps() {
        return $this->belongsToMany(PsClass::class, 'ps_register_class_temp', 'ps_student_id', 'ps_class_id');
    }
}

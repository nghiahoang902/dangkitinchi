<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PsStudentPresence extends Model
{
    use HasFactory;
    protected $table = 'ps_student_presence'; 
    protected $guarded = [];
    
}

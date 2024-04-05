<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PsSemester extends Model
{
    use HasFactory;

    protected $table = 'ps_semester';

    protected $guarded = [];
}

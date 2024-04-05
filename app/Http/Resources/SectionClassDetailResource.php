<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SectionClassDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'diadiem' =>$this->diadiem,
            'lesson_start' => $this->lesson_start,
            'lesson_end' => $this->lesson_end,
            'total_number_student' => $this->total_number_student,
            'max_number_student' => $this->max_number_student,
            'week_day' => $this->weekday,
        ];
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PsRegisterClassResource extends JsonResource
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
            'class_code' => $this->class_code,
            'class_name' => $this->name,
            'start_date' => $this->start_date,
            'stop_date' => $this->top_date,
            'teacher_name' => $this->psMember ?  $this->psMember->first_name . ' ' . $this->psMember->last_name : null,

            'subject_id' => $this->psTrainingSubject ?  $this->psTrainingSubject->id :null,
            'subject_code' => $this->psTrainingSubject ?  $this->psTrainingSubject->subject_code :null,
            'subject_name' => $this->psTrainingSubject ?  $this->psTrainingSubject->name :null,
            'description' => $this->psTrainingSubject ?  $this->psTrainingSubject->description :null,
            'credit_hours' => $this->psTrainingSubject ?  $this->psTrainingSubject->teaching_unit :null,
            'coefficient' => $this->psTrainingSubject ?  $this->psTrainingSubject->heso_unit :null,

            'semester' => $this->shouldIncludeSemester() ? $this->psSemester->title : null,
            'start_date_semester' => $this->shouldIncludeSemester() ? $this->psSemester->start_date : null,
            'end_date_semester' => $this->shouldIncludeSemester() ? $this->psSemester->end_date : null,
            'unit_price' => $this->shouldIncludeSemester() ? $this->psSemester->unit_price : null,
            'total_price' => $this->shouldIncludeSemester() ? $this->calculateTotalPrice() : null,

            'teacher_name' => $this->psMember ? $this->psMember->first_name . ' ' . $this->psMember->last_name
                 : null,
            'subject' => $this->psTrainingSubject ? [
                'id' => $this->psTrainingSubject->id,
                'subject_code' => $this->psTrainingSubject->subject_code,
                'name' => $this->psTrainingSubject->name,
                'description' => $this->psTrainingSubject->description,
                'credit_hours' => $this->psTrainingSubject->teaching_unit,
                'lesson_total' => $this->psTrainingSubject->lesson_total,
                'coefficient' => $this->psTrainingSubject->heso_unit
            ] : null,
            'semester' => $this->when($this->shouldIncludeSemester(), function () {
                return [
                    'semester' => $this->psSemester->title,
                    'start_date' => $this->psSemester->start_date,
                    'end_date' => $this->psSemester->end_date,
                    'unit_price' => $this->psSemester->unit_price,
                    'price' => $this->calculateTotalPrice()
                ];
            }),
        ];
    }

    protected function shouldIncludeSemester() {
        return $this->psSemester->is_default === 1;
    }

    protected function calculateTotalPrice() {
        return  $this->psSemester->unit_price * $this->psTrainingSubject->teaching_unit * $this->psTrainingSubject->heso_unit;
    }
}

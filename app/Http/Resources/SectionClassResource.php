<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SectionClassResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // Kiểm tra xem relationship 'member' đã được eager loaded hay chưa
        if (!$this->relationLoaded('sectionClassChilds')) {
            // Nếu chưa, thực hiện eager loading
            $this->load('sectionClassChilds');
        }
        return [  
            'id' => $this->id,
            'clas_code' => $this->class_code,
            'name' => $this->name,
            "start_date" => $this->start_date,
            "stop_date" => $this->stop_date,
            'teacher_name' => $this->psMember ? $this->psMember->first_name . ' ' . $this->psMember->last_name : null,
            'place' => SectionClassDetailResource::collection($this->psDetailClasses),
            'class_child' => SectionClassResource::collection($this->whenLoaded('sectionClassChilds')),
            
        ];
    }
}

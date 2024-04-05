<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PsStudentResource extends JsonResource
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
            'student_code' => $this->student_code,
            'name' => $this->first_name . ' ' . $this->last_name,
            'birthday' => $this->birthday,
            'sex' => $this->sex == 0 ? 'Nữ' : 'Nam',
            'phone' => $this->phone,
            'email' => $this->email,
            'image' => $this->image,
            'address' => $this->address,
            'cccd_cmt' => $this->cccd_cmt,
            'cccd_date' => $this->cccd_date,
            'current_address' => $this->current_address
        ];
    }
}

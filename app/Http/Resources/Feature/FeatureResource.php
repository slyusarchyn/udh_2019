<?php

namespace App\Http\Resources\Feature;

use App\Models\Feature;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class FeatureResource
 * @package App\Http\Resources\Feature
 */
class FeatureResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'         => $this->id,
            'name'       => $this->name,
            'fullname'   => $this->full_name,
            'SIDC'       => $this->sidc,
            'command'    => $this->command,
            'type'       => Feature::TYPES[$this->type],
            'created_at' => $this->created_at->toDateTimeString(),
            'coords'     => [$this->coordinates[0]->lat, $this->coordinates[0]->lng],
        ];
    }
}

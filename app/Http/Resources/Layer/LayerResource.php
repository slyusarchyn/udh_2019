<?php

namespace App\Http\Resources\Layer;

use App\Http\Resources\Feature\FeatureResource;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class LayerResource
 * @package App\Http\Resources\Layer
 */
class LayerResource extends JsonResource
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
            'active'     => false,
            'created_at' => $this->created_at->toDateTimeString(),
            'features'   => FeatureResource::collection($this->features),
        ];
    }
}

<?php

namespace App\Http\Resources\Map;

use App\Http\Resources\Layer\LayerResource;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class MapResource
 * @package App\Http\Resources\Map
 */
class MapResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'          => $this->id,
            'name'        => $this->name,
            'description' => $this->description,
            'created_at'  => $this->created_at->toDateTimeString(),
            'layers'      => LayerResource::collection($this->layers),
        ];
    }
}

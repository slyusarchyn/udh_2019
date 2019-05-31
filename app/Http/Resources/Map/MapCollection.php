<?php

namespace App\Http\Resources\Map;

use Illuminate\Http\Resources\Json\ResourceCollection;

/**
 * Class MapCollection
 * @package App\Http\Resources\Map
 */
class MapCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}

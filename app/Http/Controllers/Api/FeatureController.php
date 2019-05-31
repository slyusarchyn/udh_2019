<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\Feature\FeatureResource;
use App\Models\Feature;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

/**
 * Class FeatureController
 * @package App\Http\Controllers\Api
 */
class FeatureController extends Controller
{
    /**
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $feature = Feature::create([
            'layer_id'  => $request->layer_id,
            'name'      => $request->name,
            'full_name' => $request->full_name,
            'type'      => array_search($request->type, Feature::TYPES),
            'sidc'      => $request->sidc,
            'command'   => $request->command,
        ]);

        $feature->coordinates()->create([
            'lat' => $request->lat,
            'lng' => $request->lng,
        ]);

        return response()->json(FeatureResource::make($feature), 201);
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function destroy(int $id): JsonResponse
    {
        Feature::destroy($id);

        return response()->json(['id' => $id], 200);
    }
}

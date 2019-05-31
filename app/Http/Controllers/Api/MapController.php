<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\Map\MapCollection;
use App\Http\Resources\Map\MapResource;
use App\Models\Map;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Class MapController
 * @package App\Http\Controllers\Api
 */
class MapController extends Controller
{
    /**
     * @return JsonResponse
     */
    public function getMaps(): JsonResponse
    {
        $maps = Map::orderBy('id', 'desc')->get();

        return response()->json([
            'maps' => MapCollection::make($maps),
        ], 200);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $map = Map::create($request->only('name', 'description'));

        return response()->json(MapResource::make($map), 201);
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function show(int $id)
    {
        $map = Map::with('layers.features.coordinates')->find($id);

        return response()->json(MapResource::make($map), 200);
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function destroy(int $id)
    {
        Map::destroy($id);

        return response()->json(['id' => $id], 200);
    }
}

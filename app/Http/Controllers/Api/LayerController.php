<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\Layer\LayerResource;
use App\Models\Layer;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

/**
 * Class LayoutController
 * @package App\Http\Controllers\Api
 */
class LayerController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request):JsonResponse
    {
        $layer = Layer::create([
            'map_id' => $request->map_id,
            'name'   => $request->name,
        ]);

        return response()->json(LayerResource::make($layer), 201);
    }
}

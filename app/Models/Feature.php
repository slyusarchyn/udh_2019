<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Feature
 * @package App\Models
 */
class Feature extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'layer_id',
        'name',
        'full_name',
        'sidc',
        'command',
        'type',
    ];

    const TYPES = [
        1 => 'marker',
        2 => 'polygon',
    ];

    /**
     * @return HasOne
     */
    public function layer(): HasOne
    {
        return $this->hasOne(Layer::class);
    }

    /**
     * @return HasMany
     */
    public function coordinates(): HasMany
    {
        return $this->hasMany(Coordinate::class);
    }
}

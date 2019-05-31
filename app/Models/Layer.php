<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Layer
 * @package App\Models
 */
class Layer extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'map_id',
        'name',
        'description',
    ];

    /**
     * @return HasOne
     */
    public function map(): HasOne
    {
        return $this->hasOne(Map::class);
    }

    /**
     * @return HasMany
     */
    public function features(): HasMany
    {
        return $this->hasMany(Feature::class);
    }
}

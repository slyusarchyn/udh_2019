<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Map
 * @package App\Models
 */
class Map extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'description',
    ];

    /**
     * @return HasMany
     */
    public function layers(): HasMany
    {
        return $this->hasMany(Layer::class);
    }
}

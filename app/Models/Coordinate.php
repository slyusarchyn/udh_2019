<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Coordinate
 * @package App\Models
 */
class Coordinate extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'lat',
        'lng',
    ];

    /**
     * @return HasOne
     */
    public function feature(): HasOne
    {
        return $this->hasOne(Feature::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Facturas extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [
        'id_producto',
        'id_orden'
    ];

    // public function 
}

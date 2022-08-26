<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Ordenes extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [
        'id_user',
        // 'id_producto',
        'fecha',
        'estado'
    ];

    public function user(){
        return $this ->hasOne(Usuarios::class);
    }
    public function facturas(){
        return $this ->hasMany(Facturas::class);
    }
}

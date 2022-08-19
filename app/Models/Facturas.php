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
    public function Productos(){
        return $this -> belongsTo(Productos::class);
    }
    public function Ordenes(){
        return $this -> belongsTo(Ordenes::class);
    }
    // public function 
}

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
        'fecha',
        'valor',
    ];

    public function User(){
        return $this ->hasOne(Usuarios::class);
    }

}

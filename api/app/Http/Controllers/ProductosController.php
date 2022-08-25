<?php

namespace App\Http\Controllers;

use App\Models\Ordenes;
use App\Models\Productos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
// use GuzzleHttp\Client;



class ProductosController extends Controller
{
    public function index(){
        $productos = Productos::all();
        return $productos;
    }
    public function getByid($id){
        $producto = Productos::find($id);
        return $producto;
    }
    public function details($id){
        $productoById = $this->getByid($id);
        $productos = Productos::all()->whereNotIn('id', $id);
        $arr = [];
        foreach($productos as $producto){
            array_push($arr, $producto);
        }
        array_unshift($arr, $productoById);
        return $arr;
        // return $productos[0];
    }


}

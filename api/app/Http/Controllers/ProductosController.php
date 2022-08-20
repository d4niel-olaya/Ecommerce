<?php

namespace App\Http\Controllers;

use App\Models\Productos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

// use GuzzleHttp\Client;



class ProductosController extends Controller
{
    public function indexApi(){
        $productos = Productos::all();
        return $productos;
    }

    public function index(){
        return view('welcome');
    }

}

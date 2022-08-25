<?php

namespace App\Http\Controllers;

use App\Models\Facturas;
use Exception;
use Illuminate\Http\Request;


class FacturasController extends Controller
{
    public function index(){
        $ordenes = Facturas::all();
        return $ordenes;
    }
    public function store(Request $request){
        try{
            $request -> validate([
                'id_producto'=>'required',
                'id_orden'=>'required',
                'subtotal'=>'required'
            ]);
            $orden = Facturas::create([
                'id_producto'=>$request->id_producto,
                'id_orden'=>$request -> id_orden,   
                'subtotal'=>$request->subtotal
            ]);
        }
        catch(Exception $e){
            return response() ->json([
                'msg'=> $e->getMessage(),
            ]);
        }
    }
}

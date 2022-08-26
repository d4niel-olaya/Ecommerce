<?php

namespace App\Http\Controllers;

use App\Models\Facturas;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class FacturasController extends Controller
{
    public function index(){
        $facturas = DB::table('facturas')->
        join('ordenes', 'ordenes.id', '=', 'facturas.id_orden')->
        join('productos', 'productos.id', '=', 'facturas.id_producto')
        ->select('productos.nombre', 'facturas.subtotal', 'productos.img')->get();
        return $facturas;
    }
    public function amount(){
        $amount = Facturas::all()->sum('subtotal');
        return $amount;
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

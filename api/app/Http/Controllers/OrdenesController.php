<?php

namespace App\Http\Controllers;

use App\Models\Ordenes;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class OrdenesController extends Controller
{
    public function index(){
        $ordenes = Ordenes::all();
        return $ordenes;
    }

    public function store(Request $request){
        try{
            $request -> validate([
                'id_user'=>'required',
                'fecha'=>'required',
                'id_producto'=>'required',
                'cantidad'=>'required'
            ]);
            $orden = Ordenes::create([
                'id_user'=>$request->id_user,
                'fecha'=>$request -> fecha,
                'id_producto'=>$request->id_producto,
                'cantidad'=> $request -> cantidad   
            ]);
        }
        catch(Exception $e){
            return response() ->json([
                'msg'=> $e->getMessage(),
            ]);
        }
    }

    public function destroy(Request $request){
        $orden = Ordenes::destroy($request -> id);
        return $orden;
    }
}

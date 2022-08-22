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
                'estado'=>'required'
            ]);
            $orden = Ordenes::create([
                'id_user'=>$request->id_user,
                'fecha'=>$request -> fecha,
                'estado'=> $request -> estado   
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

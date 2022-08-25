<?php

use App\Http\Controllers\FacturasController;
use App\Http\Controllers\OrdenesController;
use App\Http\Controllers\ProductosController;
use App\Models\Facturas;
use App\Models\Ordenes;
use App\Models\Productos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Termwind\Components\Raw;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(ProductosController::class)->group(function () {
    Route::get('/productos', 'index');
    Route::get('/productos/{id}', 'getByid');
    Route::get('/detalles/{id}', 'details');
});

Route::controller(OrdenesController::class)->group(function(){
    Route::get('/orders', 'index');
    Route::get('/orders/last', 'last');
    Route::post('/orders/create', 'store');
    Route::delete('/orders/del/{id}', 'destroy');
});


Route::controller(FacturasController::class)->group(function(){
    Route::get('/facturas', 'index');
    Route::post('/facturas/create', 'store');
});
<?php

namespace Database\Seeders;

use App\Models\Facturas;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FacturasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $factura = new Facturas();
        $factura -> id_producto = 1;
        $factura -> id_orden = 1;
        $factura -> save();
    }
}

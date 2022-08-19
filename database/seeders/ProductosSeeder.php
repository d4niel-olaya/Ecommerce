<?php

namespace Database\Seeders;

use App\Models\Productos;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $producto = new Productos();
        $producto -> nombre = 'Noxpirin';
        $producto -> uso = 'Oral';
        $producto -> img = 'noxpirin.jpg';
        $producto -> cantidad = 10;
        $producto -> save();
    }
}

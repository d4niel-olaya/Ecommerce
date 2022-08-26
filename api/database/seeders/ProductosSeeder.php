<?php

namespace Database\Seeders;

use App\Models\Productos;
use Database\Factories\ProductosFactory;
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
        // Productos::factory(5)->create();
        $arr = ['Noxpirin', 'iboprufeno', 'Vitamina C', 'Sal de frutas', 'Adbil max'];
        $precios = [1500,2500,1250,2000,3000];
        for($i = 0; $i < count($arr); ++$i){
            $producto = new Productos();
            $producto -> nombre = $arr[$i];
            $producto -> uso = 'Oral';
            $producto -> img = str_replace(' ','_',$arr[$i]);
            $producto -> precio = $precios[$i];
            $producto->save();
        }   
    }
}

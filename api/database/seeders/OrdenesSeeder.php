<?php

namespace Database\Seeders;

use App\Models\Ordenes;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrdenesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $ordenes = new Ordenes();
        $ordenes -> id_user = 1;
        $ordenes -> fecha = '1970-01-01 00:00:01';
        $ordenes -> valor = 100;
        $ordenes -> save();
    }
}

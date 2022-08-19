<?php

namespace Database\Seeders;

use App\Models\Usuarios;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsuariosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $usuario = new Usuarios();
        $usuario -> nombre = 'Juan';
        $usuario -> save();
    }
}

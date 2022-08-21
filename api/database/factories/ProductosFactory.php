<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Productos>
 */
class ProductosFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'nombre' => $nameProduct = $this -> faker -> randomElement(['Noxpirin', 'iboprifeno', 'Vitamina_C', 'Sal de frutas', 'Adbil max']),
            'uso' => 'Oral',
            'img' => str_replace(' ','_',$nameProduct),
            'precio' => $this -> faker -> numberBetween(1,1500),
        ];
    }
}

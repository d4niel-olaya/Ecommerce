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
            'nombre' => $this -> faker -> word(),
            'uso' => 'Oral',
            'img' => $this -> faker -> word(),
            'cantidad' => $this -> faker -> randomDigitNotNull(),
        ];
    }
}

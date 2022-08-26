<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Facturas>
 */
class FacturasFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'id_producto'=>$this->faker->randomElement([1,2,3]),
            'id_orden'=>$this->faker->randomElement([1,2]),
            'subtotal'=>$this->faker->randomDigitNotNull()
        ];
    }
}

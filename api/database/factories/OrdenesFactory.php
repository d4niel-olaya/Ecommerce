<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ordenes>
 */
class OrdenesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {   
        return [
            'id_user'=> 1,
            // 'id_producto'=>$this->faker -> randomElement([1,2,3,4]),
            
        ];
    }
}

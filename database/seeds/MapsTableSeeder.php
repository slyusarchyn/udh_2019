<?php

use Illuminate\Database\Seeder;

/**
 * Class MapsTableSeeder
 */
class MapsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i < 20; $i++) {
            $map = \App\Models\Map::create([
                'name'        => 'Map_' . $i,
                'description' => 'Description_' . $i,
            ]);

            for ($k = 1; $k < 5; $k++) {
                $layer = $map->layers()->create([
                    'name' => 'Layer_' . $k,
                ]);

                for ($t = 1; $t < 5; $t++) {
                    $feature = $layer->features()->create([
                        'name'      => 'Name_' . $t,
                        'full_name' => 'Full_name_' . $t,
                        'sidc'      => 'SFGPU------E***',
                        'command'   => 'FTS',
                        'type'      => 1,
                    ]);

                    $feature->coordinates()->create([
                        'lat' => '50.4' . rand(1000, 5555),
                        'lng' => '30.5' . rand(1000, 5555),
                    ]);

                    $feature->coordinates()->create([
                        'lat' => '50.4' . rand(5555, 9999),
                        'lng' => '30.5' . rand(5555, 9999),
                    ]);
                }
            }
        }
    }
}

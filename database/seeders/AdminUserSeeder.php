<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // specific admin password? User didn't specify. I'll generic or leave it for now.
        // User said: "tu vas me faire le seed avec cet admin admin@makiradrc.com"
        
        $adminRole = \Spatie\Permission\Models\Role::firstOrCreate(['name' => 'admin']);
        $candidateRole = \Spatie\Permission\Models\Role::firstOrCreate(['name' => 'candidate']);
        
        $user = \App\Models\User::firstOrCreate(
            ['email' => 'admin@makiradrc.com'],
            [
                'name' => 'Admin',
                'password' => bcrypt('password'), // default password
            ]
        );
        
        $user->assignRole($adminRole);
    }
}

<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class BackendImplementationTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    use RefreshDatabase;

    public function test_tables_exist()
    {
        $tables = [
            'candidates',
            'user_profiles',
            'educations',
            'employments',
            'it_skills',
            'skills',
            'social_links',
        ];

        foreach ($tables as $table) {
            $this->assertTrue(\Illuminate\Support\Facades\Schema::hasTable($table), "Table $table does not exist");
        }
    }

    public function test_admin_seeder()
    {
        $this->seed(\Database\Seeders\AdminUserSeeder::class);
        $this->assertDatabaseHas('users', ['email' => 'admin@makiradrc.com']);
        
        $user = \App\Models\User::where('email', 'admin@makiradrc.com')->first();
        $this->assertTrue($user->hasRole('admin'));
    }

    public function test_registration_assigns_candidate_role_and_creates_records()
    {
        // Seed roles first
        $this->seed(\Database\Seeders\AdminUserSeeder::class);
        
        $action = new \App\Actions\Fortify\CreateNewUser();
        $user = $action->create([
            'name' => 'Test Candidate',
            'email' => 'test@example.com',
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $this->assertTrue($user->hasRole('candidate'));
        $this->assertNotNull($user->candidate);
        $this->assertNotNull($user->userProfile);
        $this->assertEquals($user->id, $user->candidate->user_id);
        $this->assertEquals($user->id, $user->userProfile->user_id);
    }
}

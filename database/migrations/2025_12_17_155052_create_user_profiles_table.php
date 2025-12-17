<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('name')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('website')->nullable();
            $table->string('qualification')->nullable();
            $table->string('language')->nullable();
            $table->string('job_category')->nullable();
            $table->string('experience')->nullable();
            $table->integer('current_salary')->nullable();
            $table->integer('expected_salary')->nullable();
            $table->string('sex')->nullable();
            $table->string('status')->nullable();
            $table->date('birth_date')->nullable();
            $table->string('country')->nullable();
            $table->string('skills')->nullable(); // stored as comma separated or similar? User said varchar.
            $table->string('poste')->nullable();
            $table->string('photo')->nullable();
            $table->string('city')->nullable();
            $table->string('postcode')->nullable();
            $table->text('address')->nullable();
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_profiles');
    }
};

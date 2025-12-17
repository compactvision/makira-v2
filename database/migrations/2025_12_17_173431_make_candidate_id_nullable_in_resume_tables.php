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
        Schema::table('employments', function (Blueprint $table) {
            $table->unsignedBigInteger('candidate_id')->nullable()->change();
        });

        Schema::table('educations', function (Blueprint $table) {
            $table->unsignedBigInteger('candidate_id')->nullable()->change();
        });

        Schema::table('it_skills', function (Blueprint $table) {
            $table->unsignedBigInteger('candidate_id')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // We probably cannot easily reverse this if there are null values, 
        // but strictly speaking we would change it back to nullable(false).
        // For safety/simplicity in this context, we might skip strict reversal or try best effort.
        
        Schema::table('employments', function (Blueprint $table) {
            // $table->unsignedBigInteger('candidate_id')->nullable(false)->change();
        });

        Schema::table('educations', function (Blueprint $table) {
            // $table->unsignedBigInteger('candidate_id')->nullable(false)->change();
        });

        Schema::table('it_skills', function (Blueprint $table) {
            // $table->unsignedBigInteger('candidate_id')->nullable(false)->change();
        });
    }
};

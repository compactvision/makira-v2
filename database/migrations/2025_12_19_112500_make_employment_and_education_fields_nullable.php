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
            $table->string('end_date')->nullable()->change();
            $table->text('description')->nullable()->change();
        });

        Schema::table('educations', function (Blueprint $table) {
            $table->string('end_date')->nullable()->change();
            $table->string('field_of_study')->nullable()->change();
            $table->text('description')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('employments', function (Blueprint $table) {
            $table->string('end_date')->nullable(false)->change();
            $table->string('description')->nullable(false)->change();
        });

        Schema::table('educations', function (Blueprint $table) {
            $table->string('end_date')->nullable(false)->change();
            $table->string('field_of_study')->nullable(false)->change();
            $table->string('description')->nullable(false)->change();
        });
    }
};

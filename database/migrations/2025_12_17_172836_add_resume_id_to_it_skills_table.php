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
        Schema::table('it_skills', function (Blueprint $table) {
            $table->foreignId('resume_id')->nullable()->constrained()->onDelete('cascade');
            // Rename columns to match new convention if they exist
            if (Schema::hasColumn('it_skills', 'start_date_year')) {
                $table->renameColumn('start_date_year', 'start_year');
            }
            if (Schema::hasColumn('it_skills', 'start_date_month')) {
                $table->renameColumn('start_date_month', 'start_month');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('it_skills', function (Blueprint $table) {
            $table->dropForeign(['resume_id']);
            $table->dropColumn('resume_id');
            if (Schema::hasColumn('it_skills', 'start_year')) {
                $table->renameColumn('start_year', 'start_date_year');
            }
            if (Schema::hasColumn('it_skills', 'start_month')) {
                $table->renameColumn('start_month', 'start_date_month');
            }
        });
    }
};

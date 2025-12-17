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
            // Make candidate_id nullable if it exists, or just add resume_id
            // Assuming we are shifting context, let's make resume_id nullable first or just add it.
            $table->foreignId('resume_id')->nullable()->constrained()->onDelete('cascade');
            
            // Adjust other columns if necessary to match the new model
            // The existing migration had 'candidate_id', 'company', 'position', 'start_date', 'end_date', 'description', 'is_current'
            // My new model expects these.
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('employments', function (Blueprint $table) {
            $table->dropForeign(['resume_id']);
            $table->dropColumn('resume_id');
        });
    }
};

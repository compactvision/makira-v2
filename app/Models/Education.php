<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    use HasFactory;

    protected $table = 'educations';

    protected $fillable = [
        'resume_id',
        'school',
        'degree',
        'field_of_study',
        'start_date',
        'end_date',
        'description',
        'is_current',
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
        'is_current' => 'boolean',
    ];

    /**
     * Get the resume that owns the education
     */
    public function resume()
    {
        return $this->belongsTo(Resume::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ITSkill extends Model
{
    use HasFactory;

    protected $table = 'it_skills';

    protected $fillable = [
        'resume_id',
        'name',
        'level',
        'last_used',
        'start_year',
        'start_month',
    ];

    /**
     * Get the resume that owns the IT skill
     */
    public function resume()
    {
        return $this->belongsTo(Resume::class);
    }
}

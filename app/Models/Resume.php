<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'skills',
        'summary',
    ];

    protected $casts = [
        'skills' => 'array',
    ];

    /**
     * Get the user that owns the resume
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the employments for the resume
     */
    public function employments()
    {
        return $this->hasMany(Employment::class)->orderBy('start_date', 'desc');
    }

    /**
     * Get the educations for the resume
     */
    public function educations()
    {
        return $this->hasMany(Education::class)->orderBy('start_date', 'desc');
    }

    /**
     * Get the IT skills for the resume
     */
    public function itSkills()
    {
        return $this->hasMany(ITSkill::class)->orderBy('last_used', 'desc');
    }
}

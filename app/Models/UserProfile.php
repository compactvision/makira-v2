<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
    protected $fillable = [
        'user_id',
        'name',
        'phone',
        'email',
        'website',
        'qualification',
        'language',
        'job_category',
        'experience',
        'current_salary',
        'expected_salary',
        'sex',
        'status',
        'birth_date',
        'country',
        'skills',
        'poste',
        'photo',
        'city',
        'postcode',
        'address',
        'description',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

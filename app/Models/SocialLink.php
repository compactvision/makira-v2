<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SocialLink extends Model
{
    protected $fillable = [
        'candidate_id',
        'platform',
        'url',
    ];

    public function candidate()
    {
        return $this->belongsTo(Candidate::class);
    }
}

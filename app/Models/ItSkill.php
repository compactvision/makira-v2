<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ItSkill extends Model
{
    protected $fillable = [
        'candidate_id',
        'name',
        'last_used',
        'level',
        'start_date_year',
        'start_date_month',
    ];

    public function candidate()
    {
        return $this->belongsTo(Candidate::class);
    }
}

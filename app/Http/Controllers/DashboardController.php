<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // Statistics
        $totalCandidates = User::role('candidate')->count();
        $totalApplications = User::role('candidate')->where('is_active', true)->count();
        
        // Simulating trends (comparing with last month or just providing a dummy value for now)
        $candidatesTrend = 12; // Placeholder
        $applicationsTrend = 8; // Placeholder

        // Recent Applications (Candidates who sent their CV)
        $recentApplications = User::role('candidate')
            ->where('is_active', true)
            ->with('userProfile')
            ->latest()
            ->take(5)
            ->get()
            ->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->userProfile->name ?? $user->name,
                    'position' => $user->userProfile->poste ?? 'Candidat',
                    'company' => $user->userProfile->job_category ?? 'Makira',
                    'date' => $user->updated_at->diffForHumans(),
                    'status' => $user->userProfile->status ?? 'new',
                ];
            });

        // Chart Data (Registrations per day for the last 7 days)
        $chartData = [];
        for ($i = 6; $i >= 0; $i--) {
            $date = Carbon::now()->subDays($i);
            $dayName = $date->translatedFormat('D'); // e.g., Mon, Tue
            
            $count = User::role('candidate')
                ->whereDate('created_at', $date->toDateString())
                ->count();
                
            $chartData[] = [
                'name' => $dayName,
                'applications' => $count,
                'interviews' => 0, // Placeholder
                'hires' => 0, // Placeholder
            ];
        }

        return Inertia::render('dashboard/index', [
            'stats' => [
                'totalCandidates' => $totalCandidates,
                'candidatesTrend' => $candidatesTrend,
                'totalApplications' => $totalApplications,
                'applicationsTrend' => $applicationsTrend,
                'activeJobs' => 0, // Placeholder
                'jobsTrend' => 0, // Placeholder
                'weeklyInterviews' => 0, // Placeholder
                'interviewsTrend' => 0, // Placeholder
                'conversionRate' => 3.2, // Placeholder
                'conversionTrend' => 1.2, // Placeholder
            ],
            'recentApplications' => $recentApplications,
            'recentJobs' => [], // Placeholder
            'chartData' => $chartData,
        ]);
    }
}

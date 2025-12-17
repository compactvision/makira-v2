<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CandidateController extends Controller
{
    public function index(Request $request)
    {
        $query = User::role('candidate')->with(['userProfile', 'resume']);

        // Search Filter
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhereHas('userProfile', function($qp) use ($search) {
                      $qp->where('name', 'like', "%{$search}%")
                         ->orWhere('poste', 'like', "%{$search}%")
                         ->orWhere('job_category', 'like', "%{$search}%");
                  });
            });
        }

        // Category Filter
        if ($request->filled('category') && $request->category !== 'all') {
            $query->whereHas('userProfile', function($q) use ($request) {
                $q->where('job_category', $request->category);
            });
        }

        // Status Filter (Hiring Status)
        if ($request->filled('status') && $request->status !== 'all') {
            $query->whereHas('userProfile', function($q) use ($request) {
                $q->where('status', $request->status);
            });
        }

        // Sorting
        $sortBy = $request->input('sort', 'newest');
        switch ($sortBy) {
            case 'oldest':
                $query->orderBy('created_at', 'asc');
                break;
            case 'name':
                $query->orderBy('name', 'asc');
                break;
            case 'newest':
            default:
                $query->orderBy('created_at', 'desc');
                break;
        }

        $candidates = $query->paginate(10)->withQueryString();

        // Transform data for frontend
        $candidates->through(function ($user) {
            return [
                'id' => $user->id,
                'user' => [
                    'id' => $user->id,
                    'name' => $user->userProfile->name ?? $user->name,
                    'email' => $user->email,
                    'is_active' => $user->is_active, // This tracks if CV is "Sent"
                    'profile' => $user->userProfile ? [
                        'name' => $user->userProfile->name,
                        'photo' => $user->userProfile->photo,
                        'poste' => $user->userProfile->poste,
                        'country' => $user->userProfile->country,
                        'city' => $user->userProfile->city,
                        'phone' => $user->userProfile->phone,
                        'jobCategory' => $user->userProfile->job_category,
                        'experience' => $user->userProfile->experience,
                        'skills' => $user->userProfile->skills,
                        'status' => $user->userProfile->status ?? 'new',
                        'appliedAt' => $user->created_at, // Using user creation date as applied date for now
                    ] : null,
                ]
            ];
        });

        // Get all unique categories for the filter
        // We might want to cache this or optimize querying if table is large
        $categories = \App\Models\UserProfile::distinct()
            ->whereNotNull('job_category')
            ->pluck('job_category');

        return Inertia::render('dashboard/candidat/index', [
            'candidates' => $candidates,
            'categories' => $categories,
            'filters' => $request->only(['search', 'category', 'status', 'sort']),
        ]);
    }

    public function show($id)
    {
        $user = User::with(['userProfile', 'resume.educations', 'resume.employments', 'resume.itSkills'])
            ->findOrFail($id);
            
        return Inertia::render('dashboard/candidat/show', [
            'candidate' => $user
        ]);
    }
    
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        
        return back()->with('success', 'Candidat supprimé avec succès');
    }

    public function sendEmail(\Illuminate\Http\Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'message' => 'required|string',
        ]);

        $user = User::findOrFail($id);
        
        // Ensure we have an email to send to
        if (!$user->email) {
            return back()->withErrors(['error' => 'Ce candidat n\'a pas d\'adresse email valide.']);
        }

        \Illuminate\Support\Facades\Mail::to($user->email)->send(new \App\Mail\CandidateContact(
            $request->only(['name', 'email', 'phone', 'message'])
        ));

        return back()->with('success', 'Email envoyé avec succès !');
    }
}

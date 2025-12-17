<?php

namespace App\Http\Controllers;

use App\Models\Resume;
use App\Models\Employment;
use App\Models\Education;
use App\Models\ITSkill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class ResumeController extends Controller
{
    /**
     * Display the resume page
     */
    public function index()
    {
        $user = Auth::user();
        
        // Get or create resume
        $resume = Resume::firstOrCreate(
            ['user_id' => $user->id],
            [
                'title' => '',
                'skills' => [],
                'summary' => '',
            ]
        );

        // Load relationships
        $resume->load(['employments', 'educations', 'itSkills']);

        return Inertia::render('dashboard/profile/resume', [
            'resume' => [
                'title' => $resume->title,
                'skills' => $resume->skills ?? [],
                'summary' => $resume->summary,
                'employments' => $resume->employments,
                'educations' => $resume->educations,
                'it_skills' => $resume->itSkills,
            ],
        ]);
    }

    /**
     * Update resume title
     */
    public function updateTitle(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:500',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        $user = Auth::user();
        $resume = Resume::firstOrCreate(['user_id' => $user->id]);
        
        $resume->update([
            'title' => $request->input('title'),
        ]);

        return back()->with('success', 'Titre mis à jour avec succès');
    }

    /**
     * Update resume skills
     */
    public function updateSkills(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'skills' => 'required|string',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        $user = Auth::user();
        $resume = Resume::firstOrCreate(['user_id' => $user->id]);
        
        // Convert comma-separated string to array
        $skillsArray = array_map('trim', explode(',', $request->input('skills')));
        $skillsArray = array_filter($skillsArray, fn($skill) => !empty($skill));

        $resume->update([
            'skills' => $skillsArray,
        ]);

        return back()->with('success', 'Compétences mises à jour avec succès');
    }

    /**
     * Update resume summary
     */
    public function updateSummary(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'summary' => 'required|string|min:50',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        $user = Auth::user();
        $resume = Resume::firstOrCreate(['user_id' => $user->id]);
        
        $resume->update([
            'summary' => $request->input('summary'),
        ]);

        return back()->with('success', 'Résumé mis à jour avec succès');
    }

    /**
     * Add employment
     */
    public function addEmployment(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'position' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after:start_date',
            'description' => 'nullable|string|max:1000',
            'is_current' => 'boolean',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        $user = Auth::user();
        $resume = Resume::firstOrCreate(['user_id' => $user->id]);

        Employment::create([
            'resume_id' => $resume->id,
            'position' => $request->input('position'),
            'company' => $request->input('company'),
            'start_date' => $request->input('start_date'),
            'end_date' => $request->input('is_current') ? null : $request->input('end_date'),
            'description' => $request->input('description'),
            'is_current' => $request->input('is_current', false),
        ]);

        return back()->with('success', 'Expérience ajoutée avec succès');
    }

    /**
     * Update employment
     */
    public function updateEmployment(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'position' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after:start_date',
            'description' => 'nullable|string|max:1000',
            'is_current' => 'boolean',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        $user = Auth::user();
        $employment = Employment::whereHas('resume', function($query) use ($user) {
            $query->where('user_id', $user->id);
        })->findOrFail($id);

        $employment->update([
            'position' => $request->input('position'),
            'company' => $request->input('company'),
            'start_date' => $request->input('start_date'),
            'end_date' => $request->input('is_current') ? null : $request->input('end_date'),
            'description' => $request->input('description'),
            'is_current' => $request->input('is_current', false),
        ]);

        return back()->with('success', 'Expérience mise à jour avec succès');
    }

    /**
     * Delete employment
     */
    public function deleteEmployment($id)
    {
        $user = Auth::user();
        $employment = Employment::whereHas('resume', function($query) use ($user) {
            $query->where('user_id', $user->id);
        })->findOrFail($id);

        $employment->delete();

        return back()->with('success', 'Expérience supprimée avec succès');
    }

    /**
     * Add education
     */
    public function addEducation(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'school' => 'required|string|max:255',
            'degree' => 'required|string|max:255',
            'field_of_study' => 'nullable|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after:start_date',
            'description' => 'nullable|string|max:1000',
            'is_current' => 'boolean',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        $user = Auth::user();
        $resume = Resume::firstOrCreate(['user_id' => $user->id]);

        Education::create([
            'resume_id' => $resume->id,
            'school' => $request->input('school'),
            'degree' => $request->input('degree'),
            'field_of_study' => $request->input('field_of_study'),
            'start_date' => $request->input('start_date'),
            'end_date' => $request->input('is_current') ? null : $request->input('end_date'),
            'description' => $request->input('description'),
            'is_current' => $request->input('is_current', false),
        ]);

        return back()->with('success', 'Éducation ajoutée avec succès');
    }

    /**
     * Update education
     */
    public function updateEducation(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'school' => 'required|string|max:255',
            'degree' => 'required|string|max:255',
            'field_of_study' => 'nullable|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after:start_date',
            'description' => 'nullable|string|max:1000',
            'is_current' => 'boolean',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        $user = Auth::user();
        $education = Education::whereHas('resume', function($query) use ($user) {
            $query->where('user_id', $user->id);
        })->findOrFail($id);

        $education->update([
            'school' => $request->input('school'),
            'degree' => $request->input('degree'),
            'field_of_study' => $request->input('field_of_study'),
            'start_date' => $request->input('start_date'),
            'end_date' => $request->input('is_current') ? null : $request->input('end_date'),
            'description' => $request->input('description'),
            'is_current' => $request->input('is_current', false),
        ]);

        return back()->with('success', 'Éducation mise à jour avec succès');
    }

    /**
     * Delete education
     */
    public function deleteEducation($id)
    {
        $user = Auth::user();
        $education = Education::whereHas('resume', function($query) use ($user) {
            $query->where('user_id', $user->id);
        })->findOrFail($id);

        $education->delete();

        return back()->with('success', 'Éducation supprimée avec succès');
    }

    /**
     * Add IT skill
     */
    public function addItSkill(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'level' => 'required|string|max:255',
            'last_used' => 'required|string|max:4',
            'start_year' => 'required|string|max:4',
            'start_month' => 'nullable|string|max:255',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        $user = Auth::user();
        $resume = Resume::firstOrCreate(['user_id' => $user->id]);

        ITSkill::create([
            'resume_id' => $resume->id,
            'name' => $request->input('name'),
            'level' => $request->input('level'),
            'last_used' => $request->input('last_used'),
            'start_year' => $request->input('start_year'),
            'start_month' => $request->input('start_month'),
        ]);

        return back()->with('success', 'Compétence informatique ajoutée avec succès');
    }

    /**
     * Update IT skill
     */
    public function updateItSkill(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'level' => 'required|string|max:255',
            'last_used' => 'required|string|max:4',
            'start_year' => 'required|string|max:4',
            'start_month' => 'nullable|string|max:255',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        $user = Auth::user();
        $itSkill = ITSkill::whereHas('resume', function($query) use ($user) {
            $query->where('user_id', $user->id);
        })->findOrFail($id);

        $itSkill->update([
            'name' => $request->input('name'),
            'level' => $request->input('level'),
            'last_used' => $request->input('last_used'),
            'start_year' => $request->input('start_year'),
            'start_month' => $request->input('start_month'),
        ]);

        return back()->with('success', 'Compétence informatique mise à jour avec succès');
    }

    /**
     * Delete IT skill
     */
    public function deleteItSkill($id)
    {
        $user = Auth::user();
        $itSkill = ITSkill::whereHas('resume', function($query) use ($user) {
            $query->where('user_id', $user->id);
        })->findOrFail($id);

        $itSkill->delete();

        return back()->with('success', 'Compétence informatique supprimée avec succès');
    }

    /**
     * Toggle resume active status
     */
    public function toggleActive()
    {
        $user = Auth::user();
        $user->update([
            'is_active' => !$user->is_active,
        ]);

        $message = $user->is_active ? 'CV publié avec succès' : 'CV retiré avec succès';
        return back()->with('success', $message);
    }
}

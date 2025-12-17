<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::post('/contact', [App\Http\Controllers\ContactController::class, 'submit'])->name('contact.submit');


Route::middleware('auth')->group(function () {
    Route::prefix('dashboard')->group(function () {
        Route::get('/', [App\Http\Controllers\DashboardController::class, 'index'])->name('dashboard');
        
        Route::get('/candidat', [App\Http\Controllers\CandidateController::class, 'index'])->name('dashboard.candidat');
        Route::get('/candidat/{id}', [App\Http\Controllers\CandidateController::class, 'show'])->name('dashboard.candidat.show');
        Route::post('/candidat/{id}/email', [App\Http\Controllers\CandidateController::class, 'sendEmail'])->name('dashboard.candidat.email');
        Route::delete('/candidat/{id}', [App\Http\Controllers\CandidateController::class, 'destroy'])->name('dashboard.candidat.destroy');
    });

    Route::get('/profile', function () {
        $user = Auth::user();
        $profile = $user->userProfile;
        $candidate = $user->candidate;
        $socialLinks = $candidate ? $candidate->socialLinks : collect();
        
        return Inertia::render('dashboard/profile/index', [
            'userProfile' => $profile,
            'socialLinks' => $socialLinks->keyBy('platform'),
        ]);
    })->name('dashboard.profile');

    Route::get('/resume', [App\Http\Controllers\ResumeController::class, 'index'])->name('dashboard.profile.resume');
    
    // Resume management routes
    Route::post('/resume/update-title', [App\Http\Controllers\ResumeController::class, 'updateTitle'])->name('resume.update-title');
    Route::post('/resume/update-skills', [App\Http\Controllers\ResumeController::class, 'updateSkills'])->name('resume.update-skills');
    Route::post('/resume/update-summary', [App\Http\Controllers\ResumeController::class, 'updateSummary'])->name('resume.update-summary');
    
    // Employment routes
    Route::post('/resume/employment/add', [App\Http\Controllers\ResumeController::class, 'addEmployment'])->name('resume.employment.add');
    Route::post('/resume/employment/{id}/update', [App\Http\Controllers\ResumeController::class, 'updateEmployment'])->name('resume.employment.update');
    Route::delete('/resume/employment/{id}/delete', [App\Http\Controllers\ResumeController::class, 'deleteEmployment'])->name('resume.employment.delete');
    
    // Education routes
    Route::post('/resume/education/add', [App\Http\Controllers\ResumeController::class, 'addEducation'])->name('resume.education.add');
    Route::post('/resume/education/{id}/update', [App\Http\Controllers\ResumeController::class, 'updateEducation'])->name('resume.education.update');
    Route::delete('/resume/education/{id}/delete', [App\Http\Controllers\ResumeController::class, 'deleteEducation'])->name('resume.education.delete');
    
    // IT Skills routes
    Route::post('/resume/it-skill/add', [App\Http\Controllers\ResumeController::class, 'addItSkill'])->name('resume.it-skill.add');
    Route::post('/resume/it-skill/{id}/update', [App\Http\Controllers\ResumeController::class, 'updateItSkill'])->name('resume.it-skill.update');
    Route::delete('/resume/it-skill/{id}/delete', [App\Http\Controllers\ResumeController::class, 'deleteItSkill'])->name('resume.it-skill.delete');
    
    // Toggle active status
    Route::post('/resume/toggle-active', [App\Http\Controllers\ResumeController::class, 'toggleActive'])->name('resume.toggle-active');

    // Profile update routes
    Route::post('/user-profile/update', [App\Http\Controllers\ProfileController::class, 'updateProfile'])->name('profile.update');
    Route::post('/user-profile/update-photo', [App\Http\Controllers\ProfileController::class, 'updatePhoto'])->name('profile.update-photo');
    Route::post('/social-links/update', [App\Http\Controllers\ProfileController::class, 'updateSocialLinks'])->name('social-links.update');
});


// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

// require __DIR__.'/settings.php';


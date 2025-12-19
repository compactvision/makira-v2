<?php

namespace App\Http\Controllers;

use App\Models\UserProfile;
use App\Models\SocialLink;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{
    /**
     * Update user profile information
     */
    public function updateProfile(Request $request)
    {
        $user = Auth::user();
        
        // Validate the request - all fields are optional (nullable)
        $validator = Validator::make($request->all(), [
            'name' => 'nullable|string|max:255',
            'birthDate' => 'nullable|date',
            'sex' => 'nullable|string|in:Homme,Femme',
            'status' => 'nullable|string|in:Marié,Célibataire,Divorcé',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255',
            'website' => 'nullable|url|max:255',
            'qualification' => 'nullable|string|max:255',
            'language' => 'nullable|string|max:255',
            'jobCategory' => 'nullable|string|max:255',
            'experience' => 'nullable|string|max:255',
            'currentSalary' => 'nullable|numeric',
            'expectedSalary' => 'nullable|numeric',
            'country' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'postcode' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:500',
            'description' => 'nullable|string|max:1000',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        // Get or create user profile
        $profile = UserProfile::firstOrCreate(
            ['user_id' => $user->id],
            []
        );

        // Update profile fields
        $profile->update([
            'name' => $request->input('name', $profile->name),
            'birth_date' => $request->input('birthDate', $profile->birth_date),
            'sex' => $request->input('sex', $profile->sex),
            'status' => $request->input('status', $profile->status),
            'phone' => $request->input('phone', $profile->phone),
            'email' => $request->input('email', $profile->email),
            'website' => $request->input('website', $profile->website),
            'qualification' => $request->input('qualification', $profile->qualification),
            'language' => $request->input('language', $profile->language),
            'job_category' => $request->input('jobCategory', $profile->job_category),
            'experience' => $request->input('experience', $profile->experience),
            'current_salary' => $request->input('currentSalary', $profile->current_salary),
            'expected_salary' => $request->input('expectedSalary', $profile->expected_salary),
            'country' => $request->input('country', $profile->country),
            'city' => $request->input('city', $profile->city),
            'postcode' => $request->input('postcode', $profile->postcode),
            'address' => $request->input('address', $profile->address),
            'description' => $request->input('description', $profile->description),
        ]);

        return back()->with('success', 'Profil mis à jour avec succès');
    }

    /**
     * Update social links
     */
    public function updateSocialLinks(Request $request)
    {
        $user = Auth::user();
        
        // Validate the request
        $validator = Validator::make($request->all(), [
            'facebook' => 'nullable|url|max:255',
            'linkedin' => 'nullable|url|max:255',
            'whatsapp' => 'nullable|string|max:255',
            'instagram' => 'nullable|url|max:255',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        // Update or create social links
        $platforms = [
            'facebook' => $request->input('facebook'),
            'linkedin' => $request->input('linkedin'),
            'whatsapp' => $request->input('whatsapp'),
            'instagram' => $request->input('instagram'),
        ];

        foreach ($platforms as $platform => $url) {
            if ($url) {
                SocialLink::updateOrCreate(
                    [
                        'user_id' => $user->id,
                        'platform' => $platform,
                    ],
                    [
                        'url' => $url,
                    ]
                );
            } else {
                // Delete if URL is empty
                SocialLink::where('user_id', $user->id)
                    ->where('platform', $platform)
                    ->delete();
            }
        }

        return back()->with('success', 'Liens sociaux mis à jour avec succès');
    }

    /**
     * Update profile photo
     */
    public function updatePhoto(Request $request)
    {
        $user = Auth::user();
        
        // Validate the photo
        $validator = Validator::make($request->all(), [
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        // Get or create user profile
        $profile = UserProfile::firstOrCreate(
            ['user_id' => $user->id],
            []
        );

        // Delete old photo if exists
        if ($profile->photo && file_exists(public_path($profile->photo))) {
            unlink(public_path($profile->photo));
        }

        // Store the new photo
        $photo = $request->file('photo');
        $photoName = time() . '_' . $user->id . '.' . $photo->getClientOriginalExtension();
        $photo->move(public_path('images/profiles'), $photoName);
        
        // Update profile with new photo path
        $profile->update([
            'photo' => '/images/profiles/' . $photoName,
        ]);

        return back()->with('success', 'Photo de profil mise à jour avec succès');
    }
}

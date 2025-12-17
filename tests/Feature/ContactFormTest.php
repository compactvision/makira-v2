<?php

namespace Tests\Feature;

use App\Mail\ContactMail;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class ContactFormTest extends TestCase
{
    /**
     * Test contact form submission.
     */
    public function test_contact_form_submits_successfully()
    {
        Mail::fake();

        $response = $this->post('/contact', [
            'username' => 'John Doe',
            'email' => 'john@example.com',
            'phone' => '0123456789',
            'subject' => 'Test Subject',
            'message' => 'This is a test message.',
        ]);

        $response->assertStatus(302);
        
        Mail::assertSent(ContactMail::class, function ($mail) {
            return $mail->hasTo('contact@makiradrc.com') &&
                   $mail->data['username'] === 'John Doe' &&
                   $mail->data['email'] === 'john@example.com';
        });
    }

    /**
     * Test contact form validation.
     */
    public function test_contact_form_validation_errors()
    {
        Mail::fake();

        $response = $this->post('/contact', [
            'username' => '',
            'email' => 'not-an-email',
            // missing other fields
        ]);

        $response->assertSessionHasErrors(['username', 'email', 'phone', 'subject', 'message']);
        
        Mail::assertNothingSent();
    }
}

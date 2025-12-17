<!DOCTYPE html>
<html>
<head>
    <title>Nouveau message de contact</title>
</head>
<body style="font-family: sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">Nouveau message de contact</h2>
        
        <p><strong>Nom :</strong> {{ $data['username'] }}</p>
        <p><strong>Email :</strong> {{ $data['email'] }}</p>
        <p><strong>Téléphone :</strong> {{ $data['phone'] }}</p>
        <p><strong>Sujet :</strong> {{ $data['subject'] }}</p>
        
        <div style="margin-top: 20px; padding: 15px; bg-color: #f9fafb; border-radius: 5px; border-left: 4px solid #2563eb;">
            <p><strong>Message :</strong></p>
            <p style="white-space: pre-wrap;">{{ $data['message'] }}</p>
        </div>
        
        <footer style="margin-top: 30px; font-size: 0.8em; color: #666; border-top: 1px solid #eee; pt: 10px;">
            Cet email a été envoyé via le formulaire de contact du site Makira DRC.
        </footer>
    </div>
</body>
</html>

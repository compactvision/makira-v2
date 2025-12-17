<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #f4f4f4; padding: 10px; border-bottom: 2px solid #ddd; }
        .content { padding: 20px 0; }
        .footer { font-size: 0.8em; color: #777; border-top: 1px solid #ddd; padding-top: 10px; margin-top: 20px; }
        .label { font-weight: bold; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Nouveau message de contact</h2>
        </div>
        <div class="content">
            <p>Bonjour,</p>
            <p>Vous avez reçu un nouveau message via votre profil sur Makira :</p>
            
            <p><span class="label">Nom :</span> {{ $data['name'] }}</p>
            <p><span class="label">Email :</span> {{ $data['email'] }}</p>
            <p><span class="label">Téléphone :</span> {{ $data['phone'] }}</p>
            
            <hr>
            
            <p><span class="label">Message :</span></p>
            <p>{!! nl2br(e($data['message'])) !!}</p>
        </div>
        <div class="footer">
            <p>Cet email a été envoyé via le formulaire de contact de Makira.</p>
        </div>
    </div>
</body>
</html>

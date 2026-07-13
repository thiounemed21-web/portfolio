const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Récupération des valeurs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    // Ton numéro WhatsApp (sans + ni espaces)
    const phoneNumber = "221705226687";

    // Création du message
    const whatsappMessage = `Bonjour Medoune 👋

📌 Nom : ${name}
📧 Email : ${email}
🛠 Service : ${service}
📄 Sujet : ${subject}

💬 Message :
${message}`;

    // Encodage URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Lien WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Ouvrir WhatsApp
    window.open(whatsappURL, '_blank');

    // Animation bouton
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.innerHTML;

    btn.innerHTML = '✓ Redirection vers WhatsApp...';
    btn.style.background = '#27ae60';
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = original;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 3000);
  });
}
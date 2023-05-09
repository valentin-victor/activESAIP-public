
// faire l'envoie du JSON local jusqu'au mail, dès le démarrage de la borne, avec un programme python local
// https://stackoverflow.com/questions/33096958/how-to-read-local-storage-using-python


// --- formulaire main ---
function sauvegardeFormulaire() {
    let nomInput = document.getElementById('formulaireNom');
    let emailInput = document.getElementById('formulaireEmail');
    let telephoneInput = document.getElementById('formulaireTelephone');
    let selectInput = document.querySelector('select[name="choice"]');
    let sujetInput = document.getElementById('formulaireSujet');
    let complémentaireInput = document.getElementById('formulaireComplémentaire');
  
    let formData = {
      nom: nomInput.value,
      email: emailInput.value,
      telephone: telephoneInput.value,
      choix: selectInput.value,
      sujet: sujetInput.value,
      complémentaire: complémentaireInput.value
    };
  
    //if (navigator.onLine) {
    //  envoyerParEmail(formData); // Si l'utilisateur a une connexion Internet active, envoie des données par email
    //} else {
    sauvegarderEnLocal(formData); // Si l'utilisateur n'a pas de connexion Internet active, sauvegarde les données localement
    //}
  }
  
  function sauvegarderEnLocal(formData) {
    let data = JSON.stringify(formData) + "\r\n"; // ajout d'un saut de ligne
    let file = new File([data], "dataFormulaire.txt", {type: "text/plain;charset=utf-8"});
    saveAs(file);
    alert("Les informations ont été sauvegardées localement avec succès !");
  }

// envoie du mail
function envoyerParEmail(formData) {
    let mailsujet = `Inscription formulaire de borne - ${formData.nom}`;
    let mailFormat = `
    Bonjour,<br>
    Un visiteur de notre borne interactive a rempli le formulaire de contact. Voici ses informations:<br>
    - Nom complet : ${formData.nom}<br>
    - Email : ${formData.email}<br>
    - Numéro de téléphone : ${formData.telephone}<br>
    - Formation : ${formData.choix}<br>
    <br>
    Nous vous invitons à le contacter dès que possible pour lui faire parvenir la formation et lui faire découvrir nos offres.<br>
    Cordialement.
    `;

//         Username : "thyestes_propkg@simplelogin.com",
//        Password : "9A1984F2BAF39339B144AB99433DF447D915",
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "thyestes_propkg@simplelogin.com",
        Password : "9A1984F2BAF39339B144AB99433DF447D915",
        To : "thyestes_propkg@simplelogin.com",
        From : "thyestes_propkg@simplelogin.com",
        Subject : mailsujet,
        Body : mailFormat
    }).then(
      message => alert(message)
    ).catch(
      error => {
        alert("erreur de l'API elastic mail: " + error.message)
      }
    );
    
  }


  /*

  -----message type 1:-----

    sujet: inscription formulaire de borne - [nom complet]
  
  Une nouvelle inscription viens d'être effectuée à la borne interactive:
    - nom complet: [nom complet] 
    - Email : [email] 
    - Numéro de téléphone : [numéro de téléphone] 
    - formation : [type de formation]


  -----message type 2:-----

  Sujet : Formulaire de site web rempli - [nom complet]

    Bonjour,
    Un visiteur de notre borne interactive a rempli le formulaire de demande de brochure. Voici ses informations:
    - Nom complet : [nom complet] 
    - Email : [email] 
    - Numéro de téléphone : [numéro de téléphone] 
    - formation : [type de formation]

    Nous vous invitons à le contacter dès que possible pour lui faire parvenir la formation et lui faire découvrir nos offres.
    Cordialement.

  */
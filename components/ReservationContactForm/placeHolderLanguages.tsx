interface Translations {
  [key: string]: {
    [lang: string]: string;
  };
}

export function getPlaceholder(field: string, language: string): string {
  const translations: Translations = {
    name: {
      EN: "Enter your full name",
      IT: "Inserisci il tuo nome completo",
      SE: "Ange ditt fullständiga namn",
      DE: "Geben Sie Ihren vollständigen Namen ein",
      FR: "Entrez votre nom complet",
    },
    email: {
      EN: "Email",
      IT: "E-mail",
      SE: "E-post",
      DE: "E-Mail",
      FR: "E-mail",
    },
    phone: {
      EN: "Phone number",
      IT: "Numero di telefono",
      SE: "Telefonnummer",
      DE: "Telefonnummer",
      FR: "Numéro de téléphone",
    },
    date: {
      EN: "Date",
      IT: "Data",
      SE: "Datum",
      DE: "Datum",
      FR: "Date",
    },
    time: {
      EN: "Time",
      IT: "Ora",
      SE: "Tid",
      DE: "Zeit",
      FR: "Heure",
    },
    quantity: {
      EN: "Number of people",
      IT: "Numero di persone",
      SE: "Antal personer",
      DE: "Anzahl der Personen",
      FR: "Nombre de personnes",
    },
    message: {
      EN: "Any special requirements?",
      IT: "Eventuali richieste speciali?",
      SE: "Några speciella önskemål?",
      DE: "Besondere Wünsche?",
      FR: "Des exigences particulières?",
    },
    send: {
      EN: "Send a Request",
      IT: "Invia una richiesta",
      SE: "Skicka en förfrågan",
      DE: "Eine Anfrage senden",
      FR: "Envoyer une demande",
    },
    thankYou: {
      EN: "Thank you for your request",
      IT: "Grazie per la tua richiesta",
      SE: "Tack för din förfrågan",
      DE: "Vielen Dank für Ihre Anfrage",
      FR: "Merci pour votre demande",
    },
    confirmation: {
      EN: "Wait for our confirmation",
      IT: "Attendi la nostra conferma",
      SE: "Vänta på vår bekräftelse",
      DE: "Warten Sie auf unsere Bestätigung",
      FR: "Attendez notre confirmation",
    },
  };

  return translations[field]?.[language] || translations[field]?.EN || "";
}

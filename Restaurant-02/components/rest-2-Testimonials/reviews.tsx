interface reviewsDataProps {
  stars: number;
  reviews: {
    [key: string]: string;
  };
  image: string;
  name: string;
  caption?: {
    [key: string]: string;
  };
}

export const reviewsData: reviewsDataProps[] = [
  {
    stars: 5,
    reviews: {
      EN: "The food was exceptional, and the service was top-notch. Highly recommend this place for a special evening.",
      FR: "La nourriture était exceptionnelle et le service impeccable. Je recommande vivement cet endroit pour une soirée spéciale.",
      SE: "Maten var enastående och servicen var förstklassig. Jag rekommenderar starkt denna plats för en speciell kväll.",
      DE: "Das Essen war außergewöhnlich, und der Service erstklassig. Sehr zu empfehlen für einen besonderen Abend.",
      IT: "Il cibo era eccezionale e il servizio impeccabile. Consiglio vivamente questo posto per una serata speciale.",
    },
    image:
      "https://github.com/levanydze/restaurant2024support/blob/main/highResolution/olivOilandCake.jpg?raw=true",
    name: "John Doe",
    caption: {
      SE: "CEO",
      FR: "PDG",
      DE: "Geschäftsführer",
      EN: "CEO",
      IT: "Amministratore Delegato",
    },
  },
  {
    stars: 4.5,
    reviews: {
      EN: "Great atmosphere and delicious food. The staff was welcoming and very attentive to our needs. Will visit again soon!",
      FR: "Super ambiance et nourriture délicieuse. Le personnel était accueillant et très attentif à nos besoins. Je reviendrai bientôt !",
      SE: "Trevlig atmosfär och utsökt mat. Personalen var välkomnande och mycket uppmärksam på våra behov. Kommer snart tillbaka!",
      DE: "Tolle Atmosphäre und köstliches Essen. Das Personal war freundlich und sehr aufmerksam. Ich werde bald wiederkommen!",
      IT: "Atmosfera fantastica e cibo delizioso. Il personale era accogliente e molto attento alle nostre esigenze. Tornerò presto!",
    },
    image:
      "https://github.com/levanydze/restaurant2024support/blob/main/highResolution/olivOilandCake.jpg?raw=true",
    name: "Jane Smith",
    caption: {
      SE: "CTO",
      FR: "Directeur Technique",
      DE: "Technischer Direktor",
      EN: "CTO",
      IT: "Direttore Tecnico",
    },
  },
  {
    stars: 4,
    reviews: {
      EN: "A wonderful dining experience. The desserts were especially good. A must-try for those who love fine dining.",
      FR: "Une merveilleuse expérience culinaire. Les desserts étaient particulièrement bons. Un incontournable pour les amateurs de gastronomie.",
      SE: "En underbar matupplevelse. Desserterna var särskilt bra. Ett måste för alla som älskar finmat.",
      DE: "Ein wunderbares kulinarisches Erlebnis. Die Desserts waren besonders gut. Ein Muss für Feinschmecker.",
      IT: "Un'esperienza culinaria meravigliosa. I dolci erano particolarmente buoni. Un must per gli amanti della buona cucina.",
    },
    image:
      "https://github.com/levanydze/restaurant2024support/blob/main/highResolution/olivOilandCake.jpg?raw=true",
    name: "Robert Brown",
    caption: {
      SE: "COO",
      FR: "Directeur des Opérations",
      DE: "Betriebsleiter",
      EN: "COO",
      IT: "Direttore Operativo",
    },
  },
  {
    stars: 4.8,
    reviews: {
      EN: "Excellent food and ambiance. Perfect for a quiet dinner or a celebration with friends.",
      FR: "Excellente nourriture et ambiance. Parfait pour un dîner tranquille ou une fête entre amis.",
      SE: "Utmärkt mat och atmosfär. Perfekt för en lugn middag eller en fest med vänner.",
      DE: "Ausgezeichnetes Essen und Ambiente. Perfekt für ein ruhiges Abendessen oder eine Feier mit Freunden.",
      IT: "Cibo e atmosfera eccellenti. Perfetto per una cena tranquilla o una festa con amici.",
    },
    image:
      "https://github.com/levanydze/restaurant2024support/blob/main/highResolution/olivOilandCake.jpg?raw=true",
    name: "Emily White",
    caption: {
      SE: "CFO",
      FR: "Directeur Financier",
      DE: "Finanzvorstand",
      EN: "CFO",
      IT: "Direttore Finanziario",
    },
  },
  {
    stars: 5,
    reviews: {
      EN: "The service was outstanding. Every dish was a delight, and the presentation was on point.",
      FR: "Le service était exceptionnel. Chaque plat était un délice, et la présentation était impeccable.",
      SE: "Servicen var enastående. Varje rätt var en fröjd och presentationen var perfekt.",
      DE: "Der Service war hervorragend. Jedes Gericht war eine Freude, und die Präsentation war perfekt.",
      IT: "Il servizio è stato eccezionale. Ogni piatto era una delizia e la presentazione era perfetta.",
    },
    image:
      "https://github.com/levanydze/restaurant2024support/blob/main/highResolution/olivOilandCake.jpg?raw=true",
    name: "David Green",
    caption: {
      SE: "Marketing Manager",
      FR: "Directeur Marketing",
      DE: "Marketing-Manager",
      EN: "Marketing Manager",
      IT: "Direttore Marketing",
    },
  },
  {
    stars: 4.2,
    reviews: {
      EN: "The dishes were well-prepared, and the flavors were amazing. A bit crowded, but overall a pleasant experience.",
      FR: "Les plats étaient bien préparés et les saveurs étaient incroyables. Un peu bondé, mais une expérience agréable dans l'ensemble.",
      SE: "Rätterna var välförberedda och smakerna var fantastiska. Lite trångt, men totalt sett en trevlig upplevelse.",
      DE: "Die Gerichte waren gut zubereitet und die Aromen waren großartig. Etwas überfüllt, aber insgesamt eine angenehme Erfahrung.",
      IT: "I piatti erano ben preparati e i sapori erano fantastici. Un po' affollato, ma nel complesso un'esperienza piacevole.",
    },
    image:
      "https://github.com/levanydze/restaurant2024support/blob/main/highResolution/olivOilandCake.jpg?raw=true",
    name: "Lisa Black",
    caption: {
      SE: "HR Manager",
      FR: "Responsable RH",
      DE: "Personalmanager",
      EN: "HR Manager",
      IT: "Responsabile Risorse Umane",
    },
  },
  {
    stars: 4.7,
    reviews: {
      EN: "A great place to dine with family and friends. The staff made us feel very welcome, and the food was delicious.",
      FR: "Un excellent endroit pour dîner en famille et entre amis. Le personnel nous a fait sentir très bienvenus, et la nourriture était délicieuse.",
      SE: "En fantastisk plats att äta med familj och vänner. Personalen fick oss att känna oss mycket välkomna, och maten var utsökt.",
      DE: "Ein großartiger Ort zum Essen mit Familie und Freunden. Das Personal hat uns sehr willkommen geheißen und das Essen war köstlich.",
      IT: "Un ottimo posto per cenare con la famiglia e gli amici. Il personale ci ha fatto sentire i benvenuti e il cibo era delizioso.",
    },
    image:
      "https://github.com/levanydze/restaurant2024support/blob/main/highResolution/olivOilandCake.jpg?raw=true",
    name: "Michael Scott",
    caption: {
      SE: "General Manager",
      FR: "Directeur Général",
      DE: "Geschäftsführer",
      EN: "General Manager",
      IT: "Direttore Generale",
    },
  },
  {
    stars: 5,
    reviews: {
      EN: "An unforgettable dining experience. Every dish was perfectly crafted and tasted heavenly. Will definitely return!",
      FR: "Une expérience culinaire inoubliable. Chaque plat était parfaitement élaboré et avait un goût divin. Je reviendrai sans aucun doute !",
      SE: "En oförglömlig matupplevelse. Varje rätt var perfekt och smakade himmelskt. Kommer definitivt tillbaka!",
      DE: "Ein unvergessliches kulinarisches Erlebnis. Jedes Gericht war perfekt zubereitet und schmeckte göttlich. Ich werde auf jeden Fall wiederkommen!",
      IT: "Un'esperienza culinaria indimenticabile. Ogni piatto era perfetto e aveva un sapore celestiale. Tornerò sicuramente!",
    },
    image:
      "https://github.com/levanydze/restaurant2024support/blob/main/highResolution/olivOilandCake.jpg?raw=true",
    name: "Sophia Brown",
    caption: {
      SE: "Operations Manager",
      FR: "Responsable des Opérations",
      DE: "Betriebsleiter",
      EN: "Operations Manager",
      IT: "Responsabile Operativo",
    },
  },
];

interface StarIconProps {
  filled: boolean;
  half?: boolean;
}

export const StarIcon: React.FC<StarIconProps> = ({ filled, half }) => (
  <svg
    width="20"
    height="17"
    viewBox="0 0 20 17"
    fill="none"
    role="img"
    aria-label="Star icon"
  >
    <defs>
      <linearGradient id="halfGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="50%" style={{ stopColor: "#FFBB00", stopOpacity: 1 }} />
        <stop
          offset="50%"
          style={{ stopColor: "transparent", stopOpacity: 1 }}
        />
      </linearGradient>
    </defs>
    <path
      d="M9.75653 13.6975L14.4883 16.2075C15.3548 16.6675 16.4152 15.9875 16.1872 15.1275L14.933 10.4075L19.1175 7.2275C19.8814 6.6475 19.4709 5.5475 18.4676 5.4775L12.9605 5.0675L10.8055 0.6075C10.4178 -0.2025 9.09522 -0.2025 8.70756 0.6075L6.5526 5.0575L1.0455 5.4675C0.0421383 5.5375 -0.368329 6.6375 0.395596 7.2175L4.58008 10.3975L3.32588 15.1175C3.09784 15.9775 4.15821 16.6575 5.02475 16.1975L9.75653 13.6975Z"
      fill={filled ? "#FFBB00" : half ? "url(#halfGradient)" : "none"}
      stroke={filled ? "none" : "#FFBB00"}
      strokeWidth={filled ? "0" : "1.4"} /* Double border for empty stars */
    />
  </svg>
);

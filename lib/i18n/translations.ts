export type Locale = "fr" | "en"

type TranslationMap = {
  [key: string]: string | TranslationMap
}

type Translations = {
  fr: TranslationMap
  en: TranslationMap
}

export const translations: Translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "\u00C0 propos",
      studio: "Studio",
      dj: "DJ-Animation",
      location: "Location",
      courses: "Cours en ligne",
      gallery: "Galerie",
      contact: "Nous contacter",
    },
    footer: {
      tagline: "Votre partenaire musical depuis plus de 20 ans.",
      navigation: "Navigation",
      services: "Services",
      contact: "Contact",
      region: "R\u00E9gion desservie : Grand Montr\u00E9al et environs",
      rights: "Tous droits r\u00E9serv\u00E9s.",
      rental: "Location d'\u00E9quipement",
      onlineCourses: "Cours en ligne",
    },
    home: {
      hero: {
        title: "Votre partenaire musical depuis ",
        titleAccent: "20 ans",
        description:
          "Studio d\u2019enregistrement, DJ et animation, location d\u2019\u00E9quipement professionnel et cours de musique en ligne. Que ce soit pour enregistrer votre prochaine chanson ou animer votre mariage, MusiqueSD est l\u00E0 pour vous.",
        cta: "Demander une soumission",
        gallery: "Voir la galerie",
      },
      services: {
        title: "Nos services",
        subtitle: "D\u00E9couvrez tout ce que MusiqueSD peut faire pour vous",
      },
      serviceCards: {
        studio: {
          title: "Studio d\u2019enregistrement",
          description:
            "Enregistrement audio et vid\u00E9o professionnel. Mixage, mastering et production musicale compl\u00E8te dans notre studio \u00E9quip\u00E9 des meilleurs logiciels.",
          cta: "D\u00E9couvrir le studio",
        },
        dj: {
          title: "DJ et animation",
          description:
            "Animation musicale pour mariages, \u00E9v\u00E9nements corporatifs, festivals, f\u00EAtes priv\u00E9es et plus encore. Syst\u00E8me de son et \u00E9clairage professionnel inclus.",
          cta: "En savoir plus",
        },
        location: {
          title: "Location d\u2019\u00E9quipement",
          description:
            "Louez de l\u2019\u00E9quipement audio professionnel : consoles de mixage, microphones, haut-parleurs, \u00E9clairage et instruments de musique.",
          cta: "Voir l\u2019\u00E9quipement",
        },
        cours: {
          title: "Cours de musique en ligne",
          description:
            "Apprenez le piano, la guitare, le chant, la batterie, la basse, le ukulele ou la th\u00E9orie musicale. Cours pour adultes et enfants.",
          cta: "Voir les cours",
        },
      },
      about: {
        title: "\u00C0 propos de Marc Desjardins",
        subtitle: "Le passionn\u00E9 derri\u00E8re MusiqueSD",
        p1: "Avec plus de 20 ans d\u2019exp\u00E9rience dans le domaine musical, Marc Desjardins a fond\u00E9 MusiqueSD pour partager sa passion de la musique sous toutes ses formes. Musicien autodidacte et polyvalent, il ma\u00EEtrise une douzaine d\u2019instruments et offre des services professionnels adapt\u00E9s \u00E0 chaque besoin.",
        p2: "Que vous soyez un artiste \u00E9mergent cherchant \u00E0 enregistrer votre premier album, un couple planifiant le mariage parfait, ou un d\u00E9butant r\u00EAvant d\u2019apprendre la guitare, Marc et MusiqueSD sont l\u00E0 pour vous accompagner.",
        cta: "En savoir plus sur Marc",
      },
      spotlight: {
        studioTitle: "Un studio complet \u00E0 votre disposition",
        studioP1:
          "Notre studio d\u2019enregistrement est \u00E9quip\u00E9 des logiciels les plus r\u00E9put\u00E9s de l\u2019industrie : Pro Tools, FL Studio, Ableton Live, Logic Pro, Cubase, Studio One et bien d\u2019autres. Que vous souhaitiez enregistrer une chanson, un podcast, une voix hors champ ou un projet vid\u00E9o, nous avons tout le n\u00E9cessaire.",
        studioP2:
          "Nos services comprennent l\u2019enregistrement audio multipiste, le mixage professionnel, le mastering, la production musicale compl\u00E8te et m\u00EAme la production vid\u00E9o avec montage.",
        studioCta: "R\u00E9server le studio",
        djTitle: "Animez vos \u00E9v\u00E9nements avec style",
        djP1: "Du mariage intime au festival en plein air, en passant par les \u00E9v\u00E9nements corporatifs et les soir\u00E9es priv\u00E9es, MusiqueSD apporte l\u2019\u00E9nergie et l\u2019ambiance parfaite \u00E0 chaque occasion. Syst\u00E8me de son professionnel, \u00E9clairage, animation et DJ exp\u00E9riment\u00E9.",
        djP2: "Nous offrons des forfaits personnalis\u00E9s pour mariages, \u00E9v\u00E9nements d\u2019entreprise, f\u00EAtes priv\u00E9es, lev\u00E9es de fonds, festivals et bien plus.",
        djCta: "Planifier mon \u00E9v\u00E9nement",
        coursTitle: "Apprenez la musique en ligne",
        coursP1:
          "Nos cours de musique en ligne s\u2019adressent aux adultes et aux enfants de tous les niveaux. Piano, guitare, chant, batterie, basse, ukul\u00E9l\u00E9 et th\u00E9orie musicale : choisissez votre instrument et progressez \u00E0 votre rythme avec un enseignant passionn\u00E9.",
        coursCta: "Voir les cours disponibles",
      },
      tech: {
        title: "Technologies et logiciels",
        subtitle: "Les meilleurs outils de l\u2019industrie musicale",
      },
      stats: {
        years: "Ans d\u2019exp\u00E9rience",
        events: "\u00C9v\u00E9nements anim\u00E9s",
        software: "Logiciels ma\u00EEtris\u00E9s",
        courseTypes: "Types de cours",
      },
      finalCta: {
        title: "Pr\u00EAt \u00E0 d\u00E9marrer votre projet musical ?",
        description:
          "Contactez-nous d\u00E8s aujourd\u2019hui pour discuter de votre projet. Que ce soit pour une r\u00E9servation de studio, une animation DJ, une location d\u2019\u00E9quipement ou des cours de musique, nous sommes \u00E0 votre \u00E9coute.",
        cta: "Contactez-nous maintenant",
        phone: "Appelez-nous",
        links: "Liens rapides",
      },
    },
    about: {
      title: "\u00C0 propos",
      subtitle: "D\u00E9couvrez l\u2019homme derri\u00E8re MusiqueSD",
      whoTitle: "Qui est Marc Desjardins ?",
      whoP1:
        "Passionn\u00E9 de musique depuis plus de 20 ans, Marc Desjardins est un musicien autodidacte et polyvalent qui a fond\u00E9 MusiqueSD pour partager sa passion sous toutes ses formes.",
      whoP2:
        "Que ce soit derri\u00E8re une console de mixage en studio, aux platines lors d\u2019un \u00E9v\u00E9nement, ou devant un \u00E9cran pour enseigner la musique en ligne, Marc met son exp\u00E9rience et son enthousiasme au service de chaque projet.",
      highlights: {
        title: "Faits saillants",
        items: [
          "Plus de 20 ans d\u2019exp\u00E9rience musicale",
          "Ma\u00EEtrise d\u2019une douzaine d\u2019instruments",
          "Musicien autodidacte et polyvalent",
          "Expert en production audio et vid\u00E9o",
          "DJ et animateur pour tout type d\u2019\u00E9v\u00E9nement",
          "Enseignant passionn\u00E9 pour adultes et enfants",
        ],
      },
      passionTitle: "Une passion, de multiples talents",
      passionP1:
        "Marc ne se contente pas de jouer de la musique \u2014 il la vit. Son studio est \u00E9quip\u00E9 des meilleurs logiciels de l\u2019industrie et il ma\u00EEtrise chaque aspect de la production musicale, de l\u2019enregistrement au mastering.",
      passionP2:
        "Son approche personnalis\u00E9e et sa bienveillance font de lui un enseignant appr\u00E9ci\u00E9, un DJ m\u00E9morable et un collaborateur de confiance pour tous vos projets musicaux.",
      cta: "Contactez Marc",
    },
    studio: {
      title: "Studio d\u2019enregistrement",
      subtitle: "Enregistrement audio et vid\u00E9o professionnel",
      audioTitle: "Enregistrement audio",
      audioDescription:
        "Notre studio offre un environnement professionnel pour l\u2019enregistrement de musique, voix, podcasts et plus encore. \u00C9quip\u00E9 de mat\u00E9riel haut de gamme et des meilleurs logiciels de l\u2019industrie.",
      audioServices: "Services audio",
      audioServicesList: [
        "Enregistrement multipiste",
        "Mixage professionnel",
        "Mastering",
        "Production musicale compl\u00E8te",
        "Enregistrement de podcasts",
        "Voix hors champ et narration",
      ],
      videoTitle: "Production vid\u00E9o",
      videoDescription:
        "En plus de l\u2019audio, nous offrons des services de production vid\u00E9o complets, incluant le tournage et le montage professionnel.",
      videoServices: "Services vid\u00E9o",
      videoServicesList: [
        "Tournage vid\u00E9o professionnel",
        "Montage et post-production",
        "Clips musicaux",
        "Vid\u00E9os promotionnelles",
      ],
      softwareTitle: "Logiciels utilis\u00E9s",
      cta: "R\u00E9server une session",
    },
    dj: {
      title: "DJ et animation",
      subtitle: "Animation musicale professionnelle pour tous vos \u00E9v\u00E9nements",
      intro:
        "MusiqueSD offre des services d\u2019animation musicale professionnelle pour tous types d\u2019\u00E9v\u00E9nements. Avec un syst\u00E8me de son et d\u2019\u00E9clairage professionnel, nous cr\u00E9ons l\u2019ambiance parfaite pour chaque occasion.",
      events: {
        mariage: {
          title: "Mariage",
          description: "Cr\u00E9ez des souvenirs inoubliables avec une ambiance musicale parfaitement adapt\u00E9e \u00E0 chaque moment de votre journ\u00E9e sp\u00E9ciale. Cocktail, souper, soir\u00E9e dansante.",
        },
        corporatif: {
          title: "\u00C9v\u00E9nement corporatif",
          description: "Animation professionnelle pour vos \u00E9v\u00E9nements d\u2019entreprise : galas, lancements, conf\u00E9rences et f\u00EAtes de bureau.",
        },
        festival: {
          title: "Festival",
          description: "Prestation DJ \u00E9nergique pour festivals et \u00E9v\u00E9nements ext\u00E9rieurs avec syst\u00E8me de son adapt\u00E9 aux grandes foules.",
        },
        prive: {
          title: "F\u00EAte priv\u00E9e",
          description: "Anniversaires, r\u00E9unions de famille, f\u00EAtes entre amis \u2014 ambiance sur mesure pour chaque occasion.",
        },
        levee: {
          title: "Lev\u00E9e de fonds",
          description: "Animation dynamique pour vos \u00E9v\u00E9nements-b\u00E9n\u00E9fice et activit\u00E9s caritatives.",
        },
        sportif: {
          title: "\u00C9v\u00E9nement sportif",
          description: "Ambiance \u00E9lectrisante pour \u00E9v\u00E9nements sportifs, tournois et c\u00E9r\u00E9monies de remise de prix.",
        },
        scolaire: {
          title: "\u00C9v\u00E9nement scolaire",
          description: "Bals, danses scolaires et activit\u00E9s \u00E9tudiantes avec musique adapt\u00E9e au public.",
        },
        other: {
          title: "Autre \u00E9v\u00E9nement",
          description: "Vous avez un \u00E9v\u00E9nement sp\u00E9cial en t\u00EAte ? Contactez-nous pour discuter de vos besoins.",
        },
      },
      included: "\u00C9quipement inclus",
      includedList: [
        "Syst\u00E8me de son professionnel",
        "\u00C9clairage d\u2019ambiance et effets",
        "Microphones sans fil",
        "Table de mixage DJ",
        "Biblioth\u00E8que musicale compl\u00E8te",
      ],
      cta: "Demander un devis",
    },
    location: {
      title: "Location d\u2019\u00E9quipement",
      subtitle: "Mat\u00E9riel audio professionnel \u00E0 louer",
      intro:
        "MusiqueSD met \u00E0 votre disposition une vaste gamme d\u2019\u00E9quipement audio professionnel en location. Que ce soit pour un \u00E9v\u00E9nement, un spectacle ou un projet de studio, nous avons ce qu\u2019il vous faut.",
      categories: {
        sono: {
          title: "Sonorisation",
          items: [
            "Haut-parleurs actifs et passifs",
            "Caissons de basses",
            "Amplificateurs",
            "Syst\u00E8mes de son portables",
          ],
        },
        mixage: {
          title: "Consoles de mixage",
          items: [
            "Consoles num\u00E9riques",
            "Tables de mixage analogiques",
            "Interfaces audio USB",
            "Contr\u00F4leurs MIDI",
          ],
        },
        micro: {
          title: "Microphones",
          items: [
            "Microphones \u00E0 condensateur",
            "Microphones dynamiques",
            "Microphones sans fil",
            "Microphones cravate",
          ],
        },
        eclairage: {
          title: "\u00C9clairage",
          items: [
            "Projecteurs LED",
            "Lasers",
            "Stroboscopes",
            "Barres LED",
          ],
        },
        instruments: {
          title: "Instruments",
          items: [
            "Claviers et pianos num\u00E9riques",
            "Guitares \u00E9lectriques et acoustiques",
            "Batteries \u00E9lectroniques",
            "Amplificateurs de guitare et basse",
          ],
        },
      },
      formTitle: "Demande de location",
      formName: "Nom complet",
      formEmail: "Courriel",
      formPhone: "T\u00E9l\u00E9phone",
      formDate: "Date souhait\u00E9e",
      formEquipment: "\u00C9quipement souhait\u00E9",
      formEquipmentPlaceholder: "D\u00E9crivez l\u2019\u00E9quipement dont vous avez besoin...",
      formSubmit: "Envoyer la demande",
    },
    cours: {
      title: "Cours de musique en ligne",
      subtitle: "Apprenez la musique \u00E0 votre rythme, de chez vous",
      intro:
        "MusiqueSD offre des cours de musique en ligne pour adultes et enfants de tous les niveaux. Que vous soyez d\u00E9butant ou interm\u00E9diaire, nos cours personnalis\u00E9s vous permettront de progresser \u00E0 votre rythme.",
      instruments: {
        piano: {
          title: "Piano",
          description: "Apprenez le piano classique ou moderne avec des cours adapt\u00E9s \u00E0 votre niveau et vos go\u00FBts musicaux.",
        },
        guitare: {
          title: "Guitare",
          description: "Guitare acoustique ou \u00E9lectrique, du d\u00E9butant \u00E0 l\u2019interm\u00E9diaire. Accords, picking, strumming et plus.",
        },
        chant: {
          title: "Chant",
          description: "D\u00E9veloppez votre voix avec des techniques vocales adapt\u00E9es. Respiration, justesse et interpr\u00E9tation.",
        },
        batterie: {
          title: "Batterie",
          description: "Rythme, coordination et techniques de batterie acoustique et \u00E9lectronique.",
        },
        basse: {
          title: "Basse",
          description: "Cours de basse \u00E9lectrique : grooves, walking bass, slap et techniques avanc\u00E9es.",
        },
        ukulele: {
          title: "Ukul\u00E9l\u00E9",
          description: "Instrument fun et accessible, parfait pour d\u00E9buter. Apprenez vos chansons pr\u00E9f\u00E9r\u00E9es rapidement.",
        },
        theorie: {
          title: "Th\u00E9orie musicale",
          description: "Compr\u00E9hension des gammes, accords, rythmes et structure musicale. Indispensable pour tout musicien.",
        },
      },
      forWhom: "Pour qui ?",
      adults: "Adultes",
      adultsDesc: "Cours adapt\u00E9s pour adultes d\u00E9butants et interm\u00E9diaires.",
      children: "Enfants",
      childrenDesc: "Cours ludiques et p\u00E9dagogiques pour les jeunes musiciens.",
      cta: "S\u2019inscrire aux cours",
    },
    contact: {
      title: "Nous contacter",
      subtitle: "Une question ? Un projet ? \u00C9crivez-nous !",
      info: "Coordonn\u00E9es",
      phone: "T\u00E9l\u00E9phone",
      email: "Courriel",
      region: "R\u00E9gion desservie",
      regionValue: "Grand Montr\u00E9al et environs",
      social: "R\u00E9seaux sociaux",
      formTitle: "Envoyez-nous un message",
      formName: "Nom complet",
      formEmail: "Courriel",
      formPhone: "T\u00E9l\u00E9phone (optionnel)",
      formSubject: "Sujet",
      formSubjectPlaceholder: "Choisir un sujet",
      formSubjectOptions: {
        studio: "R\u00E9servation studio",
        dj: "DJ et animation",
        location: "Location d\u2019\u00E9quipement",
        cours: "Cours de musique",
        other: "Autre",
      },
      formMessage: "Message",
      formMessagePlaceholder: "D\u00E9crivez votre projet ou posez votre question...",
      formSubmit: "Envoyer le message",
    },
    gallery: {
      title: "Galerie",
      subtitle: "Photos du studio, \u00E9quipement et soir\u00E9es DJ",
      all: "Tout",
      studio: "Studio",
      equipement: "\u00C9quipement",
      dj: "DJ / Soir\u00E9e festive",
      showing: "affich\u00E9s",
      emptyCategory: "Aucune photo dans cette cat\u00E9gorie.",
      imageAlt: "Image \u00E0 venir",
      prevPhoto: "Photo pr\u00E9c\u00E9dente",
      nextPhoto: "Photo suivante",
      close: "Fermer",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      studio: "Studio",
      dj: "DJ & Events",
      location: "Rentals",
      courses: "Online Courses",
      gallery: "Gallery",
      contact: "Contact Us",
    },
    footer: {
      tagline: "Your musical partner for over 20 years.",
      navigation: "Navigation",
      services: "Services",
      contact: "Contact",
      region: "Service area: Greater Montr\u00E9al and surroundings",
      rights: "All rights reserved.",
      rental: "Equipment Rental",
      onlineCourses: "Online Courses",
    },
    home: {
      hero: {
        title: "Your musical partner for ",
        titleAccent: "20 years",
        description:
          "Recording studio, DJ and event hosting, professional equipment rental and online music lessons. Whether you want to record your next song or bring your wedding to life, MusiqueSD is here for you.",
        cta: "Request a quote",
        gallery: "View gallery",
      },
      services: {
        title: "Our Services",
        subtitle: "Discover everything MusiqueSD can do for you",
      },
      serviceCards: {
        studio: {
          title: "Recording Studio",
          description:
            "Professional audio and video recording. Mixing, mastering and full music production in our studio equipped with the best industry software.",
          cta: "Discover the studio",
        },
        dj: {
          title: "DJ & Events",
          description:
            "Musical entertainment for weddings, corporate events, festivals, private parties and more. Professional sound system and lighting included.",
          cta: "Learn more",
        },
        location: {
          title: "Equipment Rental",
          description:
            "Rent professional audio equipment: mixing consoles, microphones, speakers, lighting and musical instruments.",
          cta: "View equipment",
        },
        cours: {
          title: "Online Music Lessons",
          description:
            "Learn piano, guitar, voice, drums, bass, ukulele or music theory. Lessons for adults and children.",
          cta: "View courses",
        },
      },
      about: {
        title: "About Marc Desjardins",
        subtitle: "The passionate mind behind MusiqueSD",
        p1: "With over 20 years of experience in the music industry, Marc Desjardins founded MusiqueSD to share his passion for music in all its forms. A self-taught and versatile musician, he plays over a dozen instruments and offers professional services tailored to every need.",
        p2: "Whether you\u2019re an emerging artist looking to record your first album, a couple planning the perfect wedding, or a beginner dreaming of learning guitar, Marc and MusiqueSD are here to help.",
        cta: "Learn more about Marc",
      },
      spotlight: {
        studioTitle: "A complete studio at your disposal",
        studioP1:
          "Our recording studio is equipped with the most renowned software in the industry: Pro Tools, FL Studio, Ableton Live, Logic Pro, Cubase, Studio One and many more. Whether you want to record a song, a podcast, a voice-over or a video project, we have everything you need.",
        studioP2:
          "Our services include multitrack audio recording, professional mixing, mastering, full music production and even video production with editing.",
        studioCta: "Book the studio",
        djTitle: "Bring your events to life with style",
        djP1: "From intimate weddings to outdoor festivals, corporate events and private parties, MusiqueSD brings the energy and the perfect atmosphere to every occasion. Professional sound system, lighting, hosting and experienced DJ.",
        djP2: "We offer customized packages for weddings, corporate events, private parties, fundraisers, festivals and much more.",
        djCta: "Plan my event",
        coursTitle: "Learn music online",
        coursP1:
          "Our online music lessons are designed for adults and children of all levels. Piano, guitar, voice, drums, bass, ukulele and music theory: choose your instrument and progress at your own pace with a passionate instructor.",
        coursCta: "View available courses",
      },
      tech: {
        title: "Technologies & Software",
        subtitle: "The best tools in the music industry",
      },
      stats: {
        years: "Years of experience",
        events: "Events hosted",
        software: "Software mastered",
        courseTypes: "Course types",
      },
      finalCta: {
        title: "Ready to start your musical project?",
        description:
          "Contact us today to discuss your project. Whether it\u2019s a studio booking, DJ entertainment, equipment rental or music lessons, we\u2019re here to listen.",
        cta: "Contact us now",
        phone: "Call us",
        links: "Quick links",
      },
    },
    about: {
      title: "About",
      subtitle: "Discover the person behind MusiqueSD",
      whoTitle: "Who is Marc Desjardins?",
      whoP1:
        "Passionate about music for over 20 years, Marc Desjardins is a self-taught and versatile musician who founded MusiqueSD to share his passion in all its forms.",
      whoP2:
        "Whether behind a mixing console in the studio, at the turntables during an event, or in front of a screen teaching music online, Marc brings his experience and enthusiasm to every project.",
      highlights: {
        title: "Highlights",
        items: [
          "Over 20 years of musical experience",
          "Mastery of a dozen instruments",
          "Self-taught and versatile musician",
          "Expert in audio and video production",
          "DJ and host for all types of events",
          "Passionate instructor for adults and children",
        ],
      },
      passionTitle: "One passion, many talents",
      passionP1:
        "Marc doesn\u2019t just play music \u2014 he lives it. His studio is equipped with the best software in the industry and he masters every aspect of music production, from recording to mastering.",
      passionP2:
        "His personalized approach and warmth make him a beloved instructor, a memorable DJ and a trusted collaborator for all your musical projects.",
      cta: "Contact Marc",
    },
    studio: {
      title: "Recording Studio",
      subtitle: "Professional audio and video recording",
      audioTitle: "Audio Recording",
      audioDescription:
        "Our studio offers a professional environment for recording music, vocals, podcasts and more. Equipped with high-end gear and the best industry software.",
      audioServices: "Audio services",
      audioServicesList: [
        "Multitrack recording",
        "Professional mixing",
        "Mastering",
        "Full music production",
        "Podcast recording",
        "Voice-over and narration",
      ],
      videoTitle: "Video Production",
      videoDescription:
        "In addition to audio, we offer complete video production services, including professional filming and editing.",
      videoServices: "Video services",
      videoServicesList: [
        "Professional video filming",
        "Editing and post-production",
        "Music videos",
        "Promotional videos",
      ],
      softwareTitle: "Software we use",
      cta: "Book a session",
    },
    dj: {
      title: "DJ & Events",
      subtitle: "Professional musical entertainment for all your events",
      intro:
        "MusiqueSD offers professional musical entertainment services for all types of events. With a professional sound and lighting system, we create the perfect atmosphere for every occasion.",
      events: {
        mariage: {
          title: "Wedding",
          description: "Create unforgettable memories with a musical atmosphere perfectly suited to every moment of your special day. Cocktail, dinner, dance party.",
        },
        corporatif: {
          title: "Corporate Event",
          description: "Professional entertainment for your business events: galas, launches, conferences and office parties.",
        },
        festival: {
          title: "Festival",
          description: "Energetic DJ performance for festivals and outdoor events with a sound system suited for large crowds.",
        },
        prive: {
          title: "Private Party",
          description: "Birthdays, family reunions, parties with friends \u2014 custom atmosphere for every occasion.",
        },
        levee: {
          title: "Fundraiser",
          description: "Dynamic entertainment for your benefit events and charitable activities.",
        },
        sportif: {
          title: "Sporting Event",
          description: "Electrifying atmosphere for sports events, tournaments and award ceremonies.",
        },
        scolaire: {
          title: "School Event",
          description: "Proms, school dances and student activities with age-appropriate music.",
        },
        other: {
          title: "Other Event",
          description: "Have a special event in mind? Contact us to discuss your needs.",
        },
      },
      included: "Equipment included",
      includedList: [
        "Professional sound system",
        "Ambient lighting and effects",
        "Wireless microphones",
        "DJ mixing table",
        "Complete music library",
      ],
      cta: "Request a quote",
    },
    location: {
      title: "Equipment Rental",
      subtitle: "Professional audio equipment for rent",
      intro:
        "MusiqueSD offers a wide range of professional audio equipment for rent. Whether for an event, a show or a studio project, we have what you need.",
      categories: {
        sono: {
          title: "Sound Systems",
          items: [
            "Active and passive speakers",
            "Subwoofers",
            "Amplifiers",
            "Portable sound systems",
          ],
        },
        mixage: {
          title: "Mixing Consoles",
          items: [
            "Digital consoles",
            "Analog mixing boards",
            "USB audio interfaces",
            "MIDI controllers",
          ],
        },
        micro: {
          title: "Microphones",
          items: [
            "Condenser microphones",
            "Dynamic microphones",
            "Wireless microphones",
            "Lavalier microphones",
          ],
        },
        eclairage: {
          title: "Lighting",
          items: [
            "LED projectors",
            "Lasers",
            "Strobes",
            "LED bars",
          ],
        },
        instruments: {
          title: "Instruments",
          items: [
            "Keyboards and digital pianos",
            "Electric and acoustic guitars",
            "Electronic drum kits",
            "Guitar and bass amplifiers",
          ],
        },
      },
      formTitle: "Rental Request",
      formName: "Full name",
      formEmail: "Email",
      formPhone: "Phone",
      formDate: "Desired date",
      formEquipment: "Equipment needed",
      formEquipmentPlaceholder: "Describe the equipment you need...",
      formSubmit: "Submit request",
    },
    cours: {
      title: "Online Music Lessons",
      subtitle: "Learn music at your own pace, from home",
      intro:
        "MusiqueSD offers online music lessons for adults and children of all levels. Whether you\u2019re a beginner or intermediate, our personalized lessons will help you progress at your own pace.",
      instruments: {
        piano: {
          title: "Piano",
          description: "Learn classical or modern piano with lessons adapted to your level and musical tastes.",
        },
        guitare: {
          title: "Guitar",
          description: "Acoustic or electric guitar, from beginner to intermediate. Chords, picking, strumming and more.",
        },
        chant: {
          title: "Voice",
          description: "Develop your voice with adapted vocal techniques. Breathing, pitch and interpretation.",
        },
        batterie: {
          title: "Drums",
          description: "Rhythm, coordination and techniques for acoustic and electronic drums.",
        },
        basse: {
          title: "Bass",
          description: "Electric bass lessons: grooves, walking bass, slap and advanced techniques.",
        },
        ukulele: {
          title: "Ukulele",
          description: "A fun and accessible instrument, perfect for beginners. Learn your favourite songs quickly.",
        },
        theorie: {
          title: "Music Theory",
          description: "Understanding scales, chords, rhythms and musical structure. Essential for every musician.",
        },
      },
      forWhom: "Who is it for?",
      adults: "Adults",
      adultsDesc: "Lessons designed for beginner and intermediate adults.",
      children: "Children",
      childrenDesc: "Fun and educational lessons for young musicians.",
      cta: "Sign up for lessons",
    },
    contact: {
      title: "Contact Us",
      subtitle: "Have a question? A project? Write to us!",
      info: "Contact Information",
      phone: "Phone",
      email: "Email",
      region: "Service Area",
      regionValue: "Greater Montr\u00E9al and surroundings",
      social: "Social Media",
      formTitle: "Send us a message",
      formName: "Full name",
      formEmail: "Email",
      formPhone: "Phone (optional)",
      formSubject: "Subject",
      formSubjectPlaceholder: "Choose a subject",
      formSubjectOptions: {
        studio: "Studio booking",
        dj: "DJ & events",
        location: "Equipment rental",
        cours: "Music lessons",
        other: "Other",
      },
      formMessage: "Message",
      formMessagePlaceholder: "Describe your project or ask your question...",
      formSubmit: "Send message",
    },
    gallery: {
      title: "Gallery",
      subtitle: "Photos of the studio, equipment and DJ events",
      all: "All",
      studio: "Studio",
      equipement: "Equipment",
      dj: "DJ / Party",
      showing: "showing",
      emptyCategory: "No photos in this category.",
      imageAlt: "Image coming soon",
      prevPhoto: "Previous photo",
      nextPhoto: "Next photo",
      close: "Close",
    },
  },
}

/**
 * Deeply access a nested translation by dot-separated key
 */
export function getTranslation(locale: Locale, key: string): string | string[] | Record<string, unknown> {
  const parts = key.split(".")
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result: any = translations[locale]
  for (const part of parts) {
    if (result === undefined || result === null) return key
    result = result[part]
  }
  if (result === undefined || result === null) return key
  return result
}

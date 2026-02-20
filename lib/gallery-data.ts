export type GalleryCategory = "studio" | "equipement" | "dj"

export interface GalleryItem {
  id: string
  filename: string
  title: string
  description: string
  category: GalleryCategory
  titleEn?: string
  descriptionEn?: string
}

export const galleryItems: GalleryItem[] = [
  // ===== STUDIO ENREGISTREMENT =====
  {
    id: "behringer-x32-1",
    filename: "BEHRINGUER X32 PRODUCER (1).jpg",
    title: "Behringer X32 Producer",
    description:
      "Console de mixage num\u00E9rique 40 canaux avec 16 bus, \u00E9cran couleur int\u00E9gr\u00E9, effets et enregistrement USB/FireWire. Id\u00E9ale pour le studio et le live.",
    category: "studio",
  },
  {
    id: "behringer-x32-2",
    filename: "BEHRINGUER X32 PRODUCER (2).jpg",
    title: "Behringer X32 Producer - Vue lat\u00E9rale",
    description:
      "Vue lat\u00E9rale de la console X32 Producer montrant les connexions et les faders motoris\u00E9s.",
    category: "studio",
  },
  {
    id: "behringer-x32-3",
    filename: "BEHRINGUER X32 PRODUCER (3).jpg",
    title: "Behringer X32 Producer - \u00C9cran",
    description:
      "\u00C9cran couleur haute r\u00E9solution de la X32 affichant les niveaux et le routage des canaux.",
    category: "studio",
  },
  {
    id: "behringer-x32-4",
    filename: "BEHRINGUER X32 PRODUCER (4).jpg",
    title: "Behringer X32 Producer - Faders",
    description:
      "Les faders motoris\u00E9s 100mm de la X32 permettent un contr\u00F4le pr\u00E9cis et un rappel instantan\u00E9 des sc\u00E8nes.",
    category: "studio",
  },
  {
    id: "behringer-x32-4-1",
    filename: "BEHRINGUER X32 PRODUCER (4)(1).jpg",
    title: "Behringer X32 Producer - Panneau arri\u00E8re",
    description:
      "Panneau arri\u00E8re avec connectiques XLR, AES50 et USB pour l\u2019enregistrement multipiste.",
    category: "studio",
  },
  {
    id: "behringer-x32-4-2",
    filename: "BEHRINGUER X32 PRODUCER (4)(2).jpg",
    title: "Behringer X32 Producer - D\u00E9tail",
    description:
      "D\u00E9tail des boutons encodeurs et du panneau de contr\u00F4le de la console X32.",
    category: "studio",
  },
  {
    id: "behringer-x32-5",
    filename: "BEHRINGUER X32 PRODUCER (5).jpg",
    title: "Behringer X32 Producer - Configuration",
    description:
      "La X32 configur\u00E9e dans le studio MusiqueSD, pr\u00EAte pour l\u2019enregistrement.",
    category: "studio",
  },
  {
    id: "presonus-audiobox-1",
    filename: "PRESONUS AUDIOBOX USB (1).jpg",
    title: "PreSonus AudioBox USB",
    description:
      "Interface audio USB 2x2 avec pr\u00E9amplis XMAX, 24-bit/48kHz. Compacte et portable, id\u00E9ale pour l\u2019enregistrement mobile.",
    category: "studio",
  },
  {
    id: "presonus-audiobox-2",
    filename: "PRESONUS AUDIOBOX USB (2).jpg",
    title: "PreSonus AudioBox USB - Connexions",
    description:
      "Vue arri\u00E8re de l\u2019AudioBox USB montrant les entr\u00E9es/sorties et l\u2019alimentation phantom 48V.",
    category: "studio",
  },
  {
    id: "behringer-b1-1",
    filename: "BEHRINGUER B-1 MIC (1).jpg",
    title: "Behringer B-1 Microphone \u00E0 condensateur",
    description:
      "Microphone \u00E0 condensateur large diaphragme avec capsule plaqu\u00E9e or. Directivit\u00E9 cardio\u00EFde, r\u00E9ponse en fr\u00E9quence 20Hz-20kHz.",
    category: "studio",
  },
  {
    id: "behringer-b1-2",
    filename: "BEHRINGUER B-1 MIC (2).jpg",
    title: "Behringer B-1 - Avec suspension",
    description:
      "Le B-1 mont\u00E9 sur suspension \u00E9lastique pour isoler les vibrations et obtenir un enregistrement propre.",
    category: "studio",
  },
  {
    id: "behringer-b1-3",
    filename: "BEHRINGUER B-1 MIC (3).jpg",
    title: "Behringer B-1 - Coffret",
    description:
      "Le coffret complet du B-1 avec micro, suspension \u00E9lastique et \u00E9tui de transport.",
    category: "studio",
  },
  {
    id: "rode-m5",
    filename: "RODE M5 MIC.jpg",
    title: "Rode M5 Microphones",
    description:
      "Paire de microphones \u00E0 condensateur compacts avec capsule 1/2 pouce. Excellents pour l\u2019enregistrement st\u00E9r\u00E9o, overhead de batterie et instruments acoustiques.",
    category: "studio",
  },
  {
    id: "sennheiser-e835-1",
    filename: "SENNHEISER E835(1).jpg",
    title: "Sennheiser e835",
    description:
      "Microphone dynamique cardio\u00EFde con\u00E7u pour le chant live. R\u00E9ponse en fr\u00E9quence taill\u00E9e pour la voix, robuste et fiable.",
    category: "studio",
  },
  {
    id: "sennheiser-e835-2",
    filename: "SENNHEISER E835(2).jpg",
    title: "Sennheiser e835 - D\u00E9tail",
    description:
      "Vue rapproch\u00E9e de la grille du Sennheiser e835, optimis\u00E9e pour rejeter le bruit ambiant.",
    category: "studio",
  },
  {
    id: "shure-mic",
    filename: "SHURE MIC.jpg",
    title: "Shure Microphone",
    description:
      "Microphone dynamique Shure, r\u00E9f\u00E9rence mondiale pour le chant live et l\u2019enregistrement vocal. Robuste et polyvalent.",
    category: "studio",
  },
  {
    id: "acoustic-guitar-mic",
    filename: "ACCOUSTIC GUITAR MIC.jpg",
    title: "Microphone guitare acoustique",
    description:
      "Configuration microphone d\u00E9di\u00E9e \u00E0 l\u2019enregistrement de guitare acoustique en studio.",
    category: "studio",
  },
  {
    id: "audio-technica-wireless",
    filename: "AUDIO-TECHNICA WIRELESS MIC.jpg",
    title: "Audio-Technica Microphone sans fil",
    description:
      "Syst\u00E8me de microphone sans fil Audio-Technica pour une libert\u00E9 de mouvement totale sur sc\u00E8ne ou en studio.",
    category: "studio",
  },
  {
    id: "harmony-singer",
    filename: "HARMONY SINGER TC-HELICON.jpg",
    title: "TC-Helicon Harmony Singer",
    description:
      "Processeur vocal qui g\u00E9n\u00E8re des harmonies automatiques bas\u00E9es sur les accords de guitare. Effet reverb et tonalit\u00E9 int\u00E9gr\u00E9s.",
    category: "studio",
  },
  {
    id: "phantom-48",
    filename: "PHANTOM +48 (JACK 1_4).jpg",
    title: "Alimentation Phantom +48V",
    description:
      "Alimentation phantom +48V avec sortie jack 1/4 pour les microphones \u00E0 condensateur n\u00E9cessitant une alimentation externe.",
    category: "studio",
  },
  {
    id: "signalflex-di",
    filename: "SIGNALFLEX PRO DIRECT BOX  SF-DB X2.jpg",
    title: "SignalFlex Pro Direct Box SF-DB x2",
    description:
      "Paire de bo\u00EEtes de direct passives pour convertir les signaux d\u2019instruments en signaux sym\u00E9triques pour la console.",
    category: "studio",
  },
  {
    id: "stand-mic",
    filename: "STAND UP MIC.jpg",
    title: "Pied de micro",
    description:
      "Pied de micro professionnel avec boom ajustable pour un positionnement optimal en studio ou sur sc\u00E8ne.",
    category: "studio",
  },
  {
    id: "mic-stand-accessories",
    filename: "MIC STAND _ CUP HOLDER _ TABLETTE HOLDER.jpg",
    title: "Accessoires pied de micro",
    description:
      "Pied de micro avec porte-gobelet et support tablette int\u00E9gr\u00E9s. Pratique pour les performances live.",
    category: "studio",
  },
  {
    id: "audio-technica-headphone",
    filename: "AUDIO-TECHNICA (HEADPHONE).jpg",
    title: "Audio-Technica Casque d\u2019\u00E9coute",
    description:
      "Casque d\u2019\u00E9coute Audio-Technica professionnel pour le monitoring en studio. Confort et pr\u00E9cision sonore.",
    category: "studio",
  },
  {
    id: "audio-technica-m50x",
    filename: "AUDIO-TECHNICA ATH-M50X.jpg",
    title: "Audio-Technica ATH-M50x",
    description:
      "Casque de monitoring studio r\u00E9f\u00E9rence. R\u00E9ponse en fr\u00E9quence 15-28kHz, coussinets circumauraux, pliable pour le transport.",
    category: "studio",
  },
  {
    id: "ultrasone-dj1-pro",
    filename: "ULTRASONE DJ1-PRO HEADPHONE.jpg",
    title: "Ultrasone DJ1 Pro",
    description:
      "Casque DJ professionnel avec technologie S-Logic. Basses profondes, isolation sonore sup\u00E9rieure et design rotatif.",
    category: "studio",
  },
  {
    id: "poster-bass",
    filename: "POSTER (BASS TABS).jpg",
    title: "Poster tablatures basse",
    description:
      "Affiche r\u00E9f\u00E9rence des tablatures et positions de notes pour la basse \u00E9lectrique.",
    category: "studio",
  },
  {
    id: "poster-guitar",
    filename: "POSTER (GUITAR TABS).jpg",
    title: "Poster tablatures guitare",
    description:
      "Affiche r\u00E9f\u00E9rence des accords et tablatures pour la guitare. Outil p\u00E9dagogique essentiel.",
    category: "studio",
  },
  {
    id: "lutrin",
    filename: "LUTRIN.jpg",
    title: "Lutrin / Porte-partition",
    description:
      "Lutrin ajustable pour tenir les partitions, tablettes ou livres pendant la pratique ou l\u2019enregistrement.",
    category: "studio",
  },

  // ===== \u00C9QUIPEMENT =====
  {
    id: "casio-px560-1",
    filename: "CASIO PRIVIA PX-560(1) .jpg",
    title: "Casio Privia PX-560",
    description:
      "Piano num\u00E9rique 88 touches avec son de piano \u00E0 queue AiR, 650 sons, \u00E9cran tactile couleur et interface audio USB.",
    category: "equipement",
  },
  {
    id: "casio-px560-2",
    filename: "CASIO PRIVIA PX-560(2).jpg",
    title: "Casio Privia PX-560 - \u00C9cran tactile",
    description:
      "\u00C9cran tactile couleur du PX-560 pour naviguer dans les sons, les rythmes et les param\u00E8tres.",
    category: "equipement",
  },
  {
    id: "casio-px560-3",
    filename: "CASIO PRIVIA PX-560(3).jpg",
    title: "Casio Privia PX-560 - Configuration",
    description:
      "Le PX-560 configur\u00E9 sur son support avec p\u00E9dalier, pr\u00EAt pour le jeu.",
    category: "equipement",
  },
  {
    id: "casio-px560-3-1",
    filename: "CASIO PRIVIA PX-560(3)(1).jpg",
    title: "Casio Privia PX-560 - Vue d\u2019ensemble",
    description:
      "Vue d\u2019ensemble du PX-560 montrant les contr\u00F4les, le clavier 88 touches et les haut-parleurs int\u00E9gr\u00E9s.",
    category: "equipement",
  },
  {
    id: "casio-px560-4",
    filename: "CASIO PRIVIA PX-560(4).jpg",
    title: "Casio Privia PX-560 - Panneau",
    description:
      "Panneau de contr\u00F4le du PX-560 avec touches de fonctions, potentiom\u00E8tres et \u00E9cran.",
    category: "equipement",
  },
  {
    id: "casio-px560-5",
    filename: "CASIO PRIVIA PX-560(5).jpg",
    title: "Casio Privia PX-560 - Connexions",
    description:
      "Panneau arri\u00E8re du PX-560 avec sorties audio, USB, MIDI et entr\u00E9e p\u00E9dale.",
    category: "equipement",
  },
  {
    id: "casio-px560-6",
    filename: "CASIO PRIVIA PX-560(6).jpg",
    title: "Casio Privia PX-560 - D\u00E9tail",
    description:
      "D\u00E9tail du clavier du PX-560 avec m\u00E9canique \u00E0 marteaux tri-sensor pour un toucher r\u00E9aliste.",
    category: "equipement",
  },
  {
    id: "casio-lk73-1",
    filename: "CASIO LK-73(1).jpg",
    title: "Casio LK-73",
    description:
      "Clavier lumineux 61 touches avec syst\u00E8me d\u2019apprentissage int\u00E9gr\u00E9. Les touches s\u2019allument pour guider l\u2019apprentissage.",
    category: "equipement",
  },
  {
    id: "casio-lk73-2",
    filename: "CASIO LK-73(2).jpg",
    title: "Casio LK-73 - Vue compl\u00E8te",
    description:
      "Vue compl\u00E8te du Casio LK-73 montrant le clavier lumineux et les haut-parleurs int\u00E9gr\u00E9s.",
    category: "equipement",
  },
  {
    id: "arturia-beatstep",
    filename: "ARTURIA BEATSTEP.jpg",
    title: "Arturia BeatStep",
    description:
      "Contr\u00F4leur MIDI et s\u00E9quenceur analogique 16 pads. Interface USB/MIDI/CV pour contr\u00F4ler synth\u00E9s et DAW.",
    category: "equipement",
  },
  {
    id: "alesis-samplepad-1",
    filename: "ALESIS (SAMPLEPAD PRO 8-PAD)(1).jpg",
    title: "Alesis SamplePad Pro 8-Pad",
    description:
      "Surface de percussion \u00E9lectronique \u00E0 8 pads sensibles \u00E0 la v\u00E9locit\u00E9. 200 sons int\u00E9gr\u00E9s, entr\u00E9e carte SD pour charger vos propres samples.",
    category: "equipement",
  },
  {
    id: "alesis-samplepad-2",
    filename: "ALESIS (SAMPLEPAD PRO 8-PAD)(2).jpg",
    title: "Alesis SamplePad Pro - D\u00E9tail",
    description:
      "D\u00E9tail des pads en caoutchouc du SamplePad Pro offrant une r\u00E9ponse naturelle et silencieuse.",
    category: "equipement",
  },
  {
    id: "guitar-fender-fishman",
    filename: "GUITAR ACCOUSTIQUE FENDER+FISHMAN (BLACK).jpg",
    title: "Guitare acoustique Fender avec Fishman",
    description:
      "Guitare acoustique Fender noire \u00E9quip\u00E9e d\u2019un micro Fishman pour l\u2019amplification. Id\u00E9ale pour la sc\u00E8ne et le studio.",
    category: "equipement",
  },
  {
    id: "epiphone-dr100",
    filename: "EPIPHONE DR-100 (SUNSET).jpg",
    title: "Epiphone DR-100 (Sunburst)",
    description:
      "Guitare acoustique dreadnought Epiphone finition sunburst. Table en \u00E9pic\u00E9a, dos et \u00E9clisses en acajou. Excellent rapport qualit\u00E9-prix.",
    category: "equipement",
  },
  {
    id: "gk-2265",
    filename: "GK 2265 SERIE (SUNSET).jpg",
    title: "GK S\u00E9rie 2265 (Sunburst)",
    description:
      "Guitare acoustique s\u00E9rie 2265 en finition sunburst. Son chaud et \u00E9quilibr\u00E9 pour l\u2019accompagnement.",
    category: "equipement",
  },
  {
    id: "ibanez-black",
    filename: "IBANEZ (BLACK).jpg",
    title: "Ibanez \u00C9lectrique (Noire)",
    description:
      "Guitare \u00E9lectrique Ibanez noire avec manche rapide et micros polyvalents. Parfaite pour le rock, le m\u00E9tal et le jazz.",
    category: "equipement",
  },
  {
    id: "ibanez-12string",
    filename: "IBANEZ 12 STRING (BLACK).jpg",
    title: "Ibanez 12 cordes (Noire)",
    description:
      "Guitare acoustique Ibanez 12 cordes noire pour un son riche et plein. Id\u00E9ale pour l\u2019accompagnement et les arp\u00E8ges.",
    category: "equipement",
  },
  {
    id: "ibanez-gio",
    filename: "IBANEZ GIO (BLEU).jpg",
    title: "Ibanez GIO (Bleue)",
    description:
      "Guitare \u00E9lectrique Ibanez GIO series en finition bleue. Manche fin et rapide, parfaite pour les d\u00E9butants et interm\u00E9diaires.",
    category: "equipement",
  },
  {
    id: "jackson-black",
    filename: "JACKSON (BLACK).jpg",
    title: "Jackson \u00C9lectrique (Noire)",
    description:
      "Guitare \u00E9lectrique Jackson noire au design agressif. Humbuckers haute sortie, manche compound radius pour le shred.",
    category: "equipement",
  },
  {
    id: "yamaha-bass",
    filename: "YAMAHA BASS (WHITE).jpg",
    title: "Yamaha Basse (Blanche)",
    description:
      "Basse \u00E9lectrique Yamaha blanche. Son pr\u00E9cis et polyvalent, manche confortable, id\u00E9ale pour tous les styles musicaux.",
    category: "equipement",
  },
  {
    id: "mandolin",
    filename: "MANDOLIN (SUNSET).jpg",
    title: "Mandoline (Sunburst)",
    description:
      "Mandoline traditionnelle en finition sunburst. 8 cordes pour un son cristallin typique du folk et du bluegrass.",
    category: "equipement",
  },
  {
    id: "boss-katana-1",
    filename: "BOSS KATANA-50(1).jpg",
    title: "Boss Katana-50",
    description:
      "Amplificateur guitare 50W avec 5 types d\u2019ampli, plus de 60 effets BOSS, et connectivit\u00E9 USB pour l\u2019enregistrement.",
    category: "equipement",
  },
  {
    id: "boss-katana-2",
    filename: "BOSS KATANA-50(2).jpg",
    title: "Boss Katana-50 - Panneau",
    description:
      "Panneau de contr\u00F4le du Katana-50 avec s\u00E9lection d\u2019ampli, EQ, effets et contr\u00F4le de volume.",
    category: "equipement",
  },
  {
    id: "boss-katana-3",
    filename: "BOSS KATANA-50(3).jpg",
    title: "Boss Katana-50 - Vue arri\u00E8re",
    description:
      "Vue arri\u00E8re du Katana-50 avec sortie ligne, USB, boucle d\u2019effets et entr\u00E9e auxiliaire.",
    category: "equipement",
  },
  {
    id: "marshall-1",
    filename: "MARSHALL AMP(1).jpg",
    title: "Marshall Amplificateur",
    description:
      "Amplificateur Marshall l\u00E9gendaire. Le son rock classique avec distorsion naturelle et m\u00E9diums percutants.",
    category: "equipement",
  },
  {
    id: "marshall-2",
    filename: "MARSHALL AMP(2).jpg",
    title: "Marshall Amplificateur - D\u00E9tail",
    description:
      "D\u00E9tail du panneau de contr\u00F4le Marshall avec gain, EQ et reverb.",
    category: "equipement",
  },
  {
    id: "roland-amp",
    filename: "ROLAND AMP.jpg",
    title: "Roland Amplificateur",
    description:
      "Amplificateur Roland polyvalent avec son propre et effets int\u00E9gr\u00E9s. Id\u00E9al pour guitare acoustique et clavier.",
    category: "equipement",
  },
  {
    id: "roland-amp-2",
    filename: "ROALND AMP(2).jpg",
    title: "Roland Amplificateur - Vue 2",
    description:
      "Seconde vue de l\u2019amplificateur Roland montrant la construction robuste et le haut-parleur.",
    category: "equipement",
  },
  {
    id: "line6-bass-amp-1",
    filename: "LINE 6 BASS AMP(1).jpg",
    title: "Line 6 Amplificateur Basse",
    description:
      "Amplificateur basse Line 6 avec mod\u00E9lisation de nombreux amplis classiques et effets int\u00E9gr\u00E9s.",
    category: "equipement",
  },
  {
    id: "line6-bass-amp-2",
    filename: "LINE 6 BASS AMP(1)(1).jpg",
    title: "Line 6 Amplificateur Basse - D\u00E9tail",
    description:
      "D\u00E9tail du panneau de contr\u00F4le de l\u2019ampli basse Line 6 avec s\u00E9lection de mod\u00E8les.",
    category: "equipement",
  },
  {
    id: "line6-pod-1",
    filename: "LINE 6 POD XT LIVE (PEDAL)(1).jpg",
    title: "Line 6 POD XT Live",
    description:
      "P\u00E9dalier multi-effets guitare avec mod\u00E9lisation d\u2019amplis, effets de studio et expression. 128 presets utilisateur.",
    category: "equipement",
  },
  {
    id: "line6-pod-2",
    filename: "LINE 6 POD XT LIVE (PEDAL)(2).jpg",
    title: "Line 6 POD XT Live - \u00C9cran",
    description:
      "\u00C9cran LCD du POD XT Live affichant les param\u00E8tres d\u2019effets et de mod\u00E9lisation d\u2019amplis.",
    category: "equipement",
  },
  {
    id: "line6-pod-3",
    filename: "LINE 6 POD XT LIVE (PEDAL)(3).jpg",
    title: "Line 6 POD XT Live - P\u00E9dalier",
    description:
      "Vue d\u2019ensemble du p\u00E9dalier POD XT Live avec footswitches, p\u00E9dale d\u2019expression et \u00E9cran.",
    category: "equipement",
  },
  {
    id: "boss-loop-1",
    filename: "PEDAL BOSS (LOOP STATION RC-3)(1).jpg",
    title: "Boss RC-3 Loop Station",
    description:
      "P\u00E9dale looper Boss RC-3 avec 3 heures d\u2019enregistrement, 99 m\u00E9moires et rythmes int\u00E9gr\u00E9s. Essentielle pour la pratique.",
    category: "equipement",
  },
  {
    id: "boss-loop-2",
    filename: "PEDAL BOSS (LOOP STATION RC-3)(2).jpg",
    title: "Boss RC-3 Loop Station - D\u00E9tail",
    description:
      "D\u00E9tail de la p\u00E9dale Boss RC-3 montrant les contr\u00F4les de niveau, tempo et m\u00E9moire.",
    category: "equipement",
  },
  {
    id: "speaker-fender-1",
    filename: "SPEAKER FENDER FIGHTER 10(1).jpg",
    title: "Fender Fighter 10",
    description:
      "Enceinte amplifi\u00E9e Fender Fighter 10 pouces, 220W. Son clair et puissant pour la sonorisation live.",
    category: "equipement",
  },
  {
    id: "speaker-fender-2",
    filename: "SPEAKER FENDER FIGHTER 10(2).jpg",
    title: "Fender Fighter 10 - Panneau",
    description:
      "Panneau arri\u00E8re du Fighter 10 avec connectiques, EQ et contr\u00F4le de volume.",
    category: "equipement",
  },
  {
    id: "speaker-fender-3",
    filename: "SPEAKER FENDER FIGHTER 10(3).jpg",
    title: "Fender Fighter 10 - Configuration",
    description:
      "Le Fender Fighter 10 sur pied, configur\u00E9 pour la sonorisation d\u2019\u00E9v\u00E9nements.",
    category: "equipement",
  },
  {
    id: "mackie-sub-1",
    filename: "MAKIE SUB.jpg",
    title: "Mackie Subwoofer",
    description:
      "Caisson de basses Mackie actif pour une reproduction des basses fr\u00E9quences profonde et puissante.",
    category: "equipement",
  },
  {
    id: "mackie-sub-2",
    filename: "MAKIE SUB(2).jpg",
    title: "Mackie Subwoofer - Vue lat\u00E9rale",
    description:
      "Vue lat\u00E9rale du subwoofer Mackie montrant le design et la construction robuste.",
    category: "equipement",
  },
  {
    id: "mackie-sub-3",
    filename: "MAKIE SUB(3).jpg",
    title: "Mackie Subwoofer - Panneau",
    description:
      "Panneau arri\u00E8re du subwoofer Mackie avec crossover, volume et connectiques.",
    category: "equipement",
  },
  {
    id: "drums",
    filename: "DRUMS.jpg",
    title: "Batterie acoustique",
    description:
      "Kit de batterie acoustique complet avec grosse caisse, caisse claire, toms, cymbales et hardware.",
    category: "equipement",
  },
  {
    id: "cajon",
    filename: "CAJON BOX DRUMS.jpg",
    title: "Caj\u00F3n",
    description:
      "Caj\u00F3n percussion en bois. Instrument polyvalent pour l\u2019accompagnement acoustique, le flamenco et les jams.",
    category: "equipement",
  },
  {
    id: "tambourin",
    filename: "TAMBOURIN.jpg",
    title: "Tambourin",
    description:
      "Tambourin \u00E0 main avec cymbalettes m\u00E9talliques. Instrument de percussion essentiel pour l\u2019accompagnement.",
    category: "equipement",
  },
  {
    id: "tambourin-drum",
    filename: "TAMBOURIN POUR DRUM.jpg",
    title: "Tambourin pour batterie",
    description:
      "Tambourin montable sur pied de batterie pour ajouter une texture rythmique suppl\u00E9mentaire.",
    category: "equipement",
  },
  {
    id: "tambourin-pied",
    filename: "TAMBOURIN DE PIED (AA).jpg",
    title: "Tambourin de pied",
    description:
      "Tambourin actionn\u00E9 au pied, permettant de jouer de la percussion tout en gardant les mains libres.",
    category: "equipement",
  },
  {
    id: "meinl-shaker",
    filename: "MEINL PERCUSSION SH4BK (BLACK).jpg",
    title: "Meinl SH4BK Shaker",
    description:
      "Shaker Meinl en plastique ABS noir. Son net et pr\u00E9cis pour l\u2019enregistrement et les performances live.",
    category: "equipement",
  },
  {
    id: "maracas",
    filename: "MARACAS.jpg",
    title: "Maracas",
    description:
      "Paire de maracas traditionnelles pour l\u2019accompagnement rythmique latin et les ambiances festives.",
    category: "equipement",
  },
  {
    id: "triangle",
    filename: "TRIANGLE.jpg",
    title: "Triangle",
    description:
      "Triangle m\u00E9tallique de percussion avec batte. Son cristallin pour l\u2019orchestre et les arrangements.",
    category: "equipement",
  },
  {
    id: "grelot",
    filename: "GRELOT.jpg",
    title: "Grelots",
    description:
      "Grelots de percussion pour ajouter des accents rythmiques. Utilis\u00E9s en musique traditionnelle et contemporaine.",
    category: "equipement",
  },
  {
    id: "glass-slider",
    filename: "GLASS SLIDER.jpg",
    title: "Glass Slide",
    description:
      "Bottleneck en verre pour guitare slide. Produit un son doux et chaud caract\u00E9ristique du blues et du country.",
    category: "equipement",
  },
  {
    id: "capo-tuner",
    filename: "CAPOT_TUNER.jpg",
    title: "Capodastre et accordeur",
    description:
      "Capodastre pour changer la tonalit\u00E9 de la guitare et accordeur chromatique \u00E0 pince pour un accordage pr\u00E9cis.",
    category: "equipement",
  },
  {
    id: "hohner-harmonica-1",
    filename: "HOHNER PBH7 PIEDMONT BLUES 7PC HARMONICA SET(1).jpg",
    title: "Hohner Piedmont Blues 7PC",
    description:
      "Coffret de 7 harmonicas Hohner Piedmont Blues dans les tonalit\u00E9s principales. Parfait pour le blues, le folk et le country.",
    category: "equipement",
  },
  {
    id: "hohner-harmonica-2",
    filename: "HOHNER PBH7 PIEDMONT BLUES 7PC HARMONICA SET(2).jpg",
    title: "Hohner Piedmont Blues - D\u00E9tail",
    description:
      "D\u00E9tail des 7 harmonicas Hohner en diff\u00E9rentes tonalit\u00E9s (A, Bb, C, D, E, F, G).",
    category: "equipement",
  },
  {
    id: "leem-korg",
    filename: "LEEM LT-1000_KORG METRONOME MA-30.jpg",
    title: "Leem LT-1000 & Korg MA-30",
    description:
      "Accordeur Leem LT-1000 et m\u00E9tronome Korg MA-30. Deux outils indispensables pour la pratique musicale.",
    category: "equipement",
  },

  // ===== DJ (SOIR\u00C9E FESTIVE) =====
  {
    id: "pioneer-dj-1",
    filename: "PIONEER DJ DDJ-SX 4(1).jpg",
    title: "Pioneer DJ DDJ-SX4",
    description:
      "Contr\u00F4leur DJ 4 voies pour Serato DJ Pro. Jog wheels grande taille, pads de performance et table de mixage professionnelle.",
    category: "dj",
  },
  {
    id: "pioneer-dj-2",
    filename: "PIONEER DJ DDJ-SX 4(2).jpg",
    title: "Pioneer DJ DDJ-SX4 - Jog Wheels",
    description:
      "Les jog wheels du DDJ-SX4 avec affichage central pour le scratch et le mix pr\u00E9cis.",
    category: "dj",
  },
  {
    id: "pioneer-dj-3",
    filename: "PIONEER DJ DDJ-SX 4(3).jpg",
    title: "Pioneer DJ DDJ-SX4 - Mixer",
    description:
      "Section mixer du DDJ-SX4 avec faders, EQ 3 bandes, filtres et pads de performance.",
    category: "dj",
  },
  {
    id: "pioneer-dj-4",
    filename: "PIONEER DJ DDJ-SX 4(4).jpg",
    title: "Pioneer DJ DDJ-SX4 - Pads",
    description:
      "Pads de performance r\u00E9tro\u00E9clair\u00E9s pour hot cues, boucles, slicer et sampler.",
    category: "dj",
  },
  {
    id: "pioneer-dj-5",
    filename: "PIONEER DJ DDJ-SX 4(5).jpg",
    title: "Pioneer DJ DDJ-SX4 - Configuration compl\u00E8te",
    description:
      "Le DDJ-SX4 configur\u00E9 avec ordinateur et enceintes, pr\u00EAt pour une soir\u00E9e festive.",
    category: "dj",
  },
  {
    id: "disco-light",
    filename: "DISCO LIGHT(DJ).jpg",
    title: "Jeu de lumi\u00E8res disco",
    description:
      "Jeu de lumi\u00E8res LED multicolores pour cr\u00E9er l\u2019ambiance festive parfaite lors de vos \u00E9v\u00E9nements.",
    category: "dj",
  },
]

// English translations keyed by id
const enTranslations: Record<string, { titleEn: string; descriptionEn: string }> = {
  "behringer-x32-1": { titleEn: "Behringer X32 Producer", descriptionEn: "40-channel digital mixing console with 16 buses, built-in color screen, effects and USB/FireWire recording. Ideal for studio and live." },
  "behringer-x32-2": { titleEn: "Behringer X32 Producer - Side View", descriptionEn: "Side view of the X32 Producer showing connections and motorized faders." },
  "behringer-x32-3": { titleEn: "Behringer X32 Producer - Screen", descriptionEn: "High-resolution color screen of the X32 displaying channel levels and routing." },
  "behringer-x32-4": { titleEn: "Behringer X32 Producer - Faders", descriptionEn: "The X32\u2019s 100mm motorized faders allow precise control and instant scene recall." },
  "behringer-x32-4-1": { titleEn: "Behringer X32 Producer - Rear Panel", descriptionEn: "Rear panel with XLR, AES50 and USB connectors for multitrack recording." },
  "behringer-x32-4-2": { titleEn: "Behringer X32 Producer - Detail", descriptionEn: "Detail of the encoder knobs and control panel of the X32 console." },
  "behringer-x32-5": { titleEn: "Behringer X32 Producer - Setup", descriptionEn: "The X32 set up in the MusiqueSD studio, ready for recording." },
  "presonus-audiobox-1": { titleEn: "PreSonus AudioBox USB", descriptionEn: "2x2 USB audio interface with XMAX preamps, 24-bit/48kHz. Compact and portable, ideal for mobile recording." },
  "presonus-audiobox-2": { titleEn: "PreSonus AudioBox USB - Connections", descriptionEn: "Rear view of the AudioBox USB showing inputs/outputs and 48V phantom power." },
  "behringer-b1-1": { titleEn: "Behringer B-1 Condenser Microphone", descriptionEn: "Large-diaphragm condenser microphone with gold-plated capsule. Cardioid pattern, 20Hz-20kHz frequency response." },
  "behringer-b1-2": { titleEn: "Behringer B-1 - With Shock Mount", descriptionEn: "The B-1 mounted on a shock mount to isolate vibrations for clean recording." },
  "behringer-b1-3": { titleEn: "Behringer B-1 - Complete Kit", descriptionEn: "Complete B-1 kit with microphone, shock mount and carrying case." },
  "rode-m5": { titleEn: "Rode M5 Microphones", descriptionEn: "Pair of compact condenser microphones with 1/2-inch capsule. Excellent for stereo recording, drum overheads and acoustic instruments." },
  "sennheiser-e835-1": { titleEn: "Sennheiser e835", descriptionEn: "Cardioid dynamic microphone designed for live vocals. Frequency response tailored for voice, rugged and reliable." },
  "sennheiser-e835-2": { titleEn: "Sennheiser e835 - Detail", descriptionEn: "Close-up view of the Sennheiser e835 grille, optimized to reject ambient noise." },
  "shure-mic": { titleEn: "Shure Microphone", descriptionEn: "Shure dynamic microphone, a worldwide reference for live vocals and vocal recording. Rugged and versatile." },
  "acoustic-guitar-mic": { titleEn: "Acoustic Guitar Microphone", descriptionEn: "Microphone setup dedicated to recording acoustic guitar in the studio." },
  "audio-technica-wireless": { titleEn: "Audio-Technica Wireless Microphone", descriptionEn: "Audio-Technica wireless microphone system for complete freedom of movement on stage or in the studio." },
  "harmony-singer": { titleEn: "TC-Helicon Harmony Singer", descriptionEn: "Vocal processor that generates automatic harmonies based on guitar chords. Built-in reverb and tone effects." },
  "phantom-48": { titleEn: "Phantom Power +48V", descriptionEn: "+48V phantom power supply with 1/4-inch jack output for condenser microphones requiring external power." },
  "signalflex-di": { titleEn: "SignalFlex Pro Direct Box SF-DB x2", descriptionEn: "Pair of passive DI boxes to convert instrument signals to balanced signals for the console." },
  "stand-mic": { titleEn: "Microphone Stand", descriptionEn: "Professional microphone stand with adjustable boom for optimal positioning in studio or on stage." },
  "mic-stand-accessories": { titleEn: "Microphone Stand Accessories", descriptionEn: "Microphone stand with built-in cup holder and tablet holder. Convenient for live performances." },
  "audio-technica-headphone": { titleEn: "Audio-Technica Headphones", descriptionEn: "Professional Audio-Technica headphones for studio monitoring. Comfort and sonic precision." },
  "audio-technica-m50x": { titleEn: "Audio-Technica ATH-M50x", descriptionEn: "Reference studio monitoring headphones. 15-28kHz frequency response, circumaural ear pads, foldable for transport." },
  "ultrasone-dj1-pro": { titleEn: "Ultrasone DJ1 Pro", descriptionEn: "Professional DJ headphones with S-Logic technology. Deep bass, superior sound isolation and rotating design." },
  "poster-bass": { titleEn: "Bass Tablature Poster", descriptionEn: "Reference poster of tablatures and note positions for electric bass." },
  "poster-guitar": { titleEn: "Guitar Tablature Poster", descriptionEn: "Reference poster of chords and tablatures for guitar. Essential teaching tool." },
  "lutrin": { titleEn: "Music Stand", descriptionEn: "Adjustable music stand to hold sheet music, tablets or books during practice or recording." },
  "casio-px560-1": { titleEn: "Casio Privia PX-560", descriptionEn: "88-key digital piano with AiR grand piano sound, 650 tones, color touch screen and USB audio interface." },
  "casio-px560-2": { titleEn: "Casio Privia PX-560 - Touch Screen", descriptionEn: "Color touch screen of the PX-560 for navigating sounds, rhythms and settings." },
  "casio-px560-3": { titleEn: "Casio Privia PX-560 - Setup", descriptionEn: "The PX-560 set up on its stand with pedal unit, ready to play." },
  "casio-px560-3-1": { titleEn: "Casio Privia PX-560 - Overview", descriptionEn: "Overview of the PX-560 showing controls, 88-key keyboard and built-in speakers." },
  "casio-px560-4": { titleEn: "Casio Privia PX-560 - Panel", descriptionEn: "Control panel of the PX-560 with function keys, knobs and screen." },
  "casio-px560-5": { titleEn: "Casio Privia PX-560 - Connections", descriptionEn: "Rear panel of the PX-560 with audio outputs, USB, MIDI and pedal input." },
  "casio-px560-6": { titleEn: "Casio Privia PX-560 - Detail", descriptionEn: "Detail of the PX-560 keyboard with tri-sensor hammer action for realistic touch." },
  "casio-lk73-1": { titleEn: "Casio LK-73", descriptionEn: "61-key lighted keyboard with built-in learning system. Keys light up to guide learning." },
  "casio-lk73-2": { titleEn: "Casio LK-73 - Full View", descriptionEn: "Full view of the Casio LK-73 showing the lighted keyboard and built-in speakers." },
  "arturia-beatstep": { titleEn: "Arturia BeatStep", descriptionEn: "16-pad MIDI controller and analog sequencer. USB/MIDI/CV interface for controlling synths and DAWs." },
  "alesis-samplepad-1": { titleEn: "Alesis SamplePad Pro 8-Pad", descriptionEn: "8-pad velocity-sensitive electronic percussion surface. 200 built-in sounds, SD card input for loading your own samples." },
  "alesis-samplepad-2": { titleEn: "Alesis SamplePad Pro - Detail", descriptionEn: "Detail of the SamplePad Pro rubber pads offering natural and quiet response." },
  "guitar-fender-fishman": { titleEn: "Fender Acoustic Guitar with Fishman", descriptionEn: "Black Fender acoustic guitar equipped with a Fishman pickup for amplification. Ideal for stage and studio." },
  "epiphone-dr100": { titleEn: "Epiphone DR-100 (Sunburst)", descriptionEn: "Dreadnought acoustic guitar with sunburst finish. Spruce top, mahogany back and sides. Excellent value." },
  "gk-2265": { titleEn: "GK Series 2265 (Sunburst)", descriptionEn: "Series 2265 acoustic guitar in sunburst finish. Warm and balanced sound for accompaniment." },
  "ibanez-black": { titleEn: "Ibanez Electric (Black)", descriptionEn: "Black Ibanez electric guitar with fast neck and versatile pickups. Perfect for rock, metal and jazz." },
  "ibanez-12string": { titleEn: "Ibanez 12-String (Black)", descriptionEn: "Black Ibanez 12-string acoustic guitar for a rich, full sound. Ideal for accompaniment and arpeggios." },
  "ibanez-gio": { titleEn: "Ibanez GIO (Blue)", descriptionEn: "Ibanez GIO series electric guitar in blue finish. Thin, fast neck, perfect for beginners and intermediates." },
  "jackson-black": { titleEn: "Jackson Electric (Black)", descriptionEn: "Black Jackson electric guitar with aggressive design. High-output humbuckers, compound radius neck for shredding." },
  "yamaha-bass": { titleEn: "Yamaha Bass (White)", descriptionEn: "White Yamaha electric bass. Precise and versatile sound, comfortable neck, ideal for all musical styles." },
  "mandolin": { titleEn: "Mandolin (Sunburst)", descriptionEn: "Traditional mandolin in sunburst finish. 8 strings for the crystalline sound typical of folk and bluegrass." },
  "boss-katana-1": { titleEn: "Boss Katana-50", descriptionEn: "50W guitar amplifier with 5 amp types, over 60 BOSS effects, and USB connectivity for recording." },
  "boss-katana-2": { titleEn: "Boss Katana-50 - Panel", descriptionEn: "Control panel of the Katana-50 with amp selection, EQ, effects and volume control." },
  "boss-katana-3": { titleEn: "Boss Katana-50 - Rear View", descriptionEn: "Rear view of the Katana-50 with line output, USB, effects loop and auxiliary input." },
  "marshall-1": { titleEn: "Marshall Amplifier", descriptionEn: "Legendary Marshall amplifier. Classic rock tone with natural distortion and punchy mids." },
  "marshall-2": { titleEn: "Marshall Amplifier - Detail", descriptionEn: "Detail of the Marshall control panel with gain, EQ and reverb." },
  "roland-amp": { titleEn: "Roland Amplifier", descriptionEn: "Versatile Roland amplifier with clean sound and built-in effects. Ideal for acoustic guitar and keyboard." },
  "roland-amp-2": { titleEn: "Roland Amplifier - View 2", descriptionEn: "Second view of the Roland amplifier showing the rugged construction and speaker." },
  "line6-bass-amp-1": { titleEn: "Line 6 Bass Amplifier", descriptionEn: "Line 6 bass amplifier with modeling of numerous classic amps and built-in effects." },
  "line6-bass-amp-2": { titleEn: "Line 6 Bass Amplifier - Detail", descriptionEn: "Detail of the Line 6 bass amp control panel with model selection." },
  "line6-pod-1": { titleEn: "Line 6 POD XT Live", descriptionEn: "Guitar multi-effects pedalboard with amp modeling, studio effects and expression. 128 user presets." },
  "line6-pod-2": { titleEn: "Line 6 POD XT Live - Screen", descriptionEn: "LCD screen of the POD XT Live displaying effects and amp modeling parameters." },
  "line6-pod-3": { titleEn: "Line 6 POD XT Live - Pedalboard", descriptionEn: "Overview of the POD XT Live pedalboard with footswitches, expression pedal and screen." },
  "boss-loop-1": { titleEn: "Boss RC-3 Loop Station", descriptionEn: "Boss RC-3 looper pedal with 3 hours of recording, 99 memories and built-in rhythms. Essential for practice." },
  "boss-loop-2": { titleEn: "Boss RC-3 Loop Station - Detail", descriptionEn: "Detail of the Boss RC-3 pedal showing level, tempo and memory controls." },
  "speaker-fender-1": { titleEn: "Fender Fighter 10", descriptionEn: "Fender Fighter 10-inch powered speaker, 220W. Clear and powerful sound for live PA." },
  "speaker-fender-2": { titleEn: "Fender Fighter 10 - Panel", descriptionEn: "Rear panel of the Fighter 10 with connections, EQ and volume control." },
  "speaker-fender-3": { titleEn: "Fender Fighter 10 - Setup", descriptionEn: "The Fender Fighter 10 on a stand, configured for event sound reinforcement." },
  "mackie-sub-1": { titleEn: "Mackie Subwoofer", descriptionEn: "Active Mackie subwoofer for deep and powerful low-frequency reproduction." },
  "mackie-sub-2": { titleEn: "Mackie Subwoofer - Side View", descriptionEn: "Side view of the Mackie subwoofer showing the design and rugged construction." },
  "mackie-sub-3": { titleEn: "Mackie Subwoofer - Panel", descriptionEn: "Rear panel of the Mackie subwoofer with crossover, volume and connections." },
  "drums": { titleEn: "Acoustic Drum Kit", descriptionEn: "Complete acoustic drum kit with bass drum, snare, toms, cymbals and hardware." },
  "cajon": { titleEn: "Caj\u00F3n", descriptionEn: "Wooden caj\u00F3n percussion. Versatile instrument for acoustic accompaniment, flamenco and jams." },
  "tambourin": { titleEn: "Tambourine", descriptionEn: "Hand tambourine with metal jingles. Essential percussion instrument for accompaniment." },
  "tambourin-drum": { titleEn: "Drum Tambourine", descriptionEn: "Mountable tambourine for drum stand to add extra rhythmic texture." },
  "tambourin-pied": { titleEn: "Foot Tambourine", descriptionEn: "Foot-operated tambourine, allowing percussion playing while keeping hands free." },
  "meinl-shaker": { titleEn: "Meinl SH4BK Shaker", descriptionEn: "Black ABS plastic Meinl shaker. Clean and precise sound for recording and live performances." },
  "maracas": { titleEn: "Maracas", descriptionEn: "Pair of traditional maracas for Latin rhythmic accompaniment and festive atmospheres." },
  "triangle": { titleEn: "Triangle", descriptionEn: "Metal percussion triangle with beater. Crystalline sound for orchestra and arrangements." },
  "grelot": { titleEn: "Jingle Bells", descriptionEn: "Percussion jingle bells for adding rhythmic accents. Used in traditional and contemporary music." },
  "glass-slider": { titleEn: "Glass Slide", descriptionEn: "Glass bottleneck for slide guitar. Produces a smooth, warm sound characteristic of blues and country." },
  "capo-tuner": { titleEn: "Capo and Tuner", descriptionEn: "Capo to change guitar key and clip-on chromatic tuner for precise tuning." },
  "hohner-harmonica-1": { titleEn: "Hohner Piedmont Blues 7PC", descriptionEn: "Set of 7 Hohner Piedmont Blues harmonicas in the main keys. Perfect for blues, folk and country." },
  "hohner-harmonica-2": { titleEn: "Hohner Piedmont Blues - Detail", descriptionEn: "Detail of the 7 Hohner harmonicas in different keys (A, Bb, C, D, E, F, G)." },
  "leem-korg": { titleEn: "Leem LT-1000 & Korg MA-30", descriptionEn: "Leem LT-1000 tuner and Korg MA-30 metronome. Two indispensable tools for music practice." },
  "pioneer-dj-1": { titleEn: "Pioneer DJ DDJ-SX4", descriptionEn: "4-channel DJ controller for Serato DJ Pro. Large-size jog wheels, performance pads and professional mixer." },
  "pioneer-dj-2": { titleEn: "Pioneer DJ DDJ-SX4 - Jog Wheels", descriptionEn: "The DDJ-SX4 jog wheels with center display for precise scratching and mixing." },
  "pioneer-dj-3": { titleEn: "Pioneer DJ DDJ-SX4 - Mixer", descriptionEn: "Mixer section of the DDJ-SX4 with faders, 3-band EQ, filters and performance pads." },
  "pioneer-dj-4": { titleEn: "Pioneer DJ DDJ-SX4 - Pads", descriptionEn: "Backlit performance pads for hot cues, loops, slicer and sampler." },
  "pioneer-dj-5": { titleEn: "Pioneer DJ DDJ-SX4 - Full Setup", descriptionEn: "The DDJ-SX4 configured with computer and speakers, ready for a party." },
  "disco-light": { titleEn: "Disco Light", descriptionEn: "Multicolor LED light set to create the perfect festive atmosphere at your events." },
}

// Merge English translations into gallery items
galleryItems.forEach((item) => {
  const en = enTranslations[item.id]
  if (en) {
    item.titleEn = en.titleEn
    item.descriptionEn = en.descriptionEn
  }
})

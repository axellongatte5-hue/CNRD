export interface DeporteeStop {
  name: string;
  lat: number;
  lng: number;
  date?: string;
  info?: string;
  type: "origin" | "transit" | "camp";
}

export interface Deportee {
  id: string;
  name: string;
  photo: string;
  birthDate: string;
  arrestDate: string;
  camp: string;
  fate: string;
  description: string;
  route: DeporteeStop[];
  color: string;
}

export const deportees: Deportee[] = [
  {
    id: "feigelson",
    name: "Raphaël Feigelson",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Rapha%C3%ABl_Feigelson.jpg/220px-Rapha%C3%ABl_Feigelson.jpg",
    birthDate: "17 mars 1923, Strasbourg",
    arrestDate: "4 mars 1943",
    camp: "Auschwitz-Birkenau",
    fate: "Survivant — Libéré en janvier 1945",
    description:
      "Résistant juif français, membre du réseau Marcel. Arrêté à Toulouse, il est interné à Drancy avant d'être déporté à Auschwitz. Survivant de la Shoah, il consacra sa vie au témoignage et à la mémoire.",
    route: [
      {
        name: "Toulouse",
        lat: 43.6047,
        lng: 1.4442,
        date: "Mars 1943",
        info: "Lieu d'arrestation. Raphaël Feigelson est arrêté par la police française.",
        type: "origin",
      },
      {
        name: "Drancy",
        lat: 48.9172,
        lng: 2.4513,
        date: "Mars 1943",
        info: "Camp d'internement et de transit. Principal camp de départ des convois de déportation vers les camps d'extermination nazis.",
        type: "transit",
      },
      {
        name: "Auschwitz-Birkenau",
        lat: 50.0343,
        lng: 19.1784,
        date: "1943–1945",
        info: "Camp d'extermination. Plus de 1,1 million de personnes y furent assassinées, dont environ 1 million de Juifs.",
        type: "camp",
      },
    ],
    color: "#dc2626",
  },
  {
    id: "seguy",
    name: "Georges Séguy",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Georges_S%C3%A9guy_%281927-2016%29.jpg/220px-Georges_S%C3%A9guy_%281927-2016%29.jpg",
    birthDate: "16 mars 1927, Toulouse",
    arrestDate: "Février 1944",
    camp: "Mauthausen",
    fate: "Survivant — Libéré le 5 mai 1945",
    description:
      "Résistant communiste français, cheminot. Arrêté à 16 ans pour ses activités de résistance, il est déporté à Mauthausen. Après la guerre, il devient secrétaire général de la CGT (1967-1982).",
    route: [
      {
        name: "Toulouse",
        lat: 43.6047,
        lng: 1.4442,
        date: "Février 1944",
        info: "Arrêté pour activités de résistance au sein des cheminots.",
        type: "origin",
      },
      {
        name: "Compiègne",
        lat: 49.4178,
        lng: 2.8262,
        date: "1944",
        info: "Camp de Royallieu. Principal camp de transit pour les déportés politiques français vers les camps de concentration.",
        type: "transit",
      },
      {
        name: "Mauthausen",
        lat: 48.2583,
        lng: 14.5122,
        date: "1944–1945",
        info: "Camp de concentration de catégorie III (le plus dur). Environ 90 000 détenus y périrent dans des conditions de travail forcé inhumaines.",
        type: "camp",
      },
    ],
    color: "#dc2626",
  },
  {
    id: "lestage",
    name: "Suzanne Lestage",
    photo: "",
    birthDate: "Inconnue",
    arrestDate: "1944",
    camp: "Ravensbrück, puis Mauthausen",
    fate: "Survivante — Libérée en 1945",
    description:
      "Résistante française déportée à Ravensbrück, le principal camp de concentration pour femmes, puis transférée à Mauthausen. Elle témoigna de l'horreur des camps après la guerre.",
    route: [
      {
        name: "France (lieu d'arrestation)",
        lat: 46.6034,
        lng: 1.8883,
        date: "1944",
        info: "Arrêtée pour faits de résistance.",
        type: "origin",
      },
      {
        name: "Ravensbrück",
        lat: 53.1903,
        lng: 13.1697,
        date: "1944–1945",
        info: "Principal camp de concentration pour femmes. Plus de 130 000 femmes y furent détenues, environ 50 000 y moururent.",
        type: "camp",
      },
      {
        name: "Mauthausen",
        lat: 48.2583,
        lng: 14.5122,
        date: "1945",
        info: "Transférée lors des évacuations de fin de guerre. Libérée par les forces américaines le 5 mai 1945.",
        type: "camp",
      },
    ],
    color: "#dc2626",
  },
  {
    id: "rolland",
    name: "Yves Rolland",
    photo: "",
    birthDate: "Inconnue",
    arrestDate: "1944",
    camp: "Neuengamme",
    fate: "Décédé en déportation",
    description:
      "Résistant français déporté au camp de concentration de Neuengamme, près de Hambourg. Ce camp fut l'un des plus meurtriers du système concentrationnaire nazi.",
    route: [
      {
        name: "France (lieu d'arrestation)",
        lat: 47.3,
        lng: 2.0,
        date: "1944",
        info: "Arrêté pour activités de résistance.",
        type: "origin",
      },
      {
        name: "Compiègne",
        lat: 49.4178,
        lng: 2.8262,
        date: "1944",
        info: "Camp de Royallieu, transit vers les camps de concentration.",
        type: "transit",
      },
      {
        name: "Neuengamme",
        lat: 53.4275,
        lng: 10.2317,
        date: "1944–1945",
        info: "Camp de concentration près de Hambourg. Plus de 42 000 détenus y trouvèrent la mort, soumis au travail forcé.",
        type: "camp",
      },
    ],
    color: "#dc2626",
  },
  {
    id: "bouteille",
    name: "Robert Bouteille",
    photo: "",
    birthDate: "Inconnue",
    arrestDate: "1944",
    camp: "Buchenwald",
    fate: "Survivant — Libéré le 11 avril 1945",
    description:
      "Résistant français déporté au camp de concentration de Buchenwald, près de Weimar. Ce camp symbolise la barbarie nazie et la résistance des déportés qui organisèrent leur propre libération.",
    route: [
      {
        name: "France (lieu d'arrestation)",
        lat: 45.8,
        lng: 1.2,
        date: "1944",
        info: "Arrêté pour faits de résistance.",
        type: "origin",
      },
      {
        name: "Compiègne",
        lat: 49.4178,
        lng: 2.8262,
        date: "1944",
        info: "Camp de Royallieu, transit vers les camps de concentration.",
        type: "transit",
      },
      {
        name: "Buchenwald",
        lat: 51.0217,
        lng: 11.2486,
        date: "1944–1945",
        info: "Camp de concentration près de Weimar. Environ 56 000 détenus y moururent. Les déportés organisèrent un soulèvement et libérèrent le camp le 11 avril 1945.",
        type: "camp",
      },
    ],
    color: "#dc2626",
  },
  {
    id: "nakache",
    name: "Alfred Nakache",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Alfred_Nakache_en_1942.jpg/220px-Alfred_Nakache_en_1942.jpg",
    birthDate: "18 novembre 1915, Constantine (Algérie)",
    arrestDate: "20 janvier 1944",
    camp: "Auschwitz-Birkenau",
    fate: "Survivant — Libéré en 1945. Décédé le 4 août 1983",
    description:
      "Champion de natation français, surnommé « le nageur d'Auschwitz ». Multiple recordman de France et d'Europe, il fut déporté avec sa femme et sa fille. Seul survivant de sa famille, il reprit la compétition après la guerre et devint à nouveau champion de France.",
    route: [
      {
        name: "Toulouse",
        lat: 43.6047,
        lng: 1.4442,
        date: "Janvier 1944",
        info: "Arrêté avec sa femme Paule et sa fille Annie (2 ans). Alfred vivait et s'entraînait à Toulouse.",
        type: "origin",
      },
      {
        name: "Drancy",
        lat: 48.9172,
        lng: 2.4513,
        date: "Janvier 1944",
        info: "Interné au camp de Drancy avant la déportation. Sa femme et sa fille y sont également internées.",
        type: "transit",
      },
      {
        name: "Auschwitz-Birkenau",
        lat: 50.0343,
        lng: 19.1784,
        date: "1944–1945",
        info: "Déporté par le convoi n°66. Sa femme Paule et sa fille Annie furent assassinées à leur arrivée. Alfred survécut grâce à sa condition physique exceptionnelle.",
        type: "camp",
      },
    ],
    color: "#dc2626",
  },
];

export const timelineEvents = [
  { year: 1939, event: "Début de la Seconde Guerre mondiale", detail: "1er septembre — L'Allemagne envahit la Pologne" },
  { year: 1940, event: "Armistice et Régime de Vichy", detail: "Le gouvernement de Vichy collabore avec l'occupant nazi" },
  { year: 1941, event: "Premières rafles en France", detail: "Rafle du Billet vert, internement massif de Juifs étrangers" },
  { year: 1942, event: "Rafle du Vel d'Hiv", detail: "16-17 juillet — 13 152 Juifs arrêtés à Paris, dont 4 115 enfants" },
  { year: 1943, event: "Intensification des déportations", detail: "Convois réguliers depuis Drancy vers Auschwitz et autres camps" },
  { year: 1944, event: "Débarquement et Libération", detail: "6 juin — Débarquement en Normandie. Libération progressive de la France" },
  { year: 1945, event: "Libération des camps", detail: "Janvier–Mai — Découverte de l'horreur des camps par les Alliés" },
];

export const campLocations = [
  { name: "Auschwitz-Birkenau", lat: 50.0343, lng: 19.1784, type: "extermination" as const },
  { name: "Mauthausen", lat: 48.2583, lng: 14.5122, type: "concentration" as const },
  { name: "Ravensbrück", lat: 53.1903, lng: 13.1697, type: "concentration" as const },
  { name: "Neuengamme", lat: 53.4275, lng: 10.2317, type: "concentration" as const },
  { name: "Buchenwald", lat: 51.0217, lng: 11.2486, type: "concentration" as const },
  { name: "Drancy", lat: 48.9172, lng: 2.4513, type: "transit" as const },
  { name: "Compiègne", lat: 49.4178, lng: 2.8262, type: "transit" as const },
];

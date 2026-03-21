// Image import removed - using standard img tags

/* ─── Data ─── */

const timelineEvents = [
  {
    date: "Aout 1938",
    title: "Creation du camp",
    description:
      "Apres l'Anschluss (annexion de l'Autriche par l'Allemagne nazie en mars 1938), les SS etablissent le camp de concentration de Mauthausen pres de la ville du meme nom, a environ 20 km de Linz. Les premiers prisonniers, principalement des opposants politiques allemands et autrichiens, sont transferes depuis Dachau.",
  },
  {
    date: "1938 - 1939",
    title: "La carriere de granit",
    description:
      "Le camp est construit a cote des carrieres de granit de Wiener Graben, exploitees par la societe SS DEST (Deutsche Erd- und Steinwerke). Le travail dans les carrieres devient rapidement un outil d'extermination : les detenus sont forces de porter des blocs de pierre de 50 kg dans l'escalier de la mort.",
  },
  {
    date: "1939",
    title: "Classification «Catégorie III»",
    description:
      "Les nazis classent Mauthausen comme camp de «catégorie III», la plus sévère, réservé aux prisonniers considérés comme «irréductibles» et «irrécupérables». Cette classification implique les conditions de détention les plus brutales et la plus faible espérance de vie de tout le système concentrationnaire.",
  },
  {
    date: "1940",
    title: "Creation de Gusen",
    description:
      "Un deuxieme camp, Gusen, est construit a 5 km de Mauthausen. Il devient rapidement aussi meurtrier que le camp principal. Gusen sera complete par Gusen II et Gusen III, formant un complexe ou des dizaines de milliers de detenus mourront.",
  },
  {
    date: "1941",
    title: "Debut des gazages",
    description:
      "Une chambre a gaz est installee au camp principal. Des milliers de prisonniers seront assassines par le gaz Zyklon B. Un camion a gaz fait egalement la navette entre Mauthausen et Gusen pour executer des detenus. Les prisonniers de guerre sovietiques sont parmi les premieres victimes.",
  },
  {
    date: "1943 - 1944",
    title: "Expansion massive",
    description:
      "Le reseau de sous-camps s'etend considerablement pour fournir une main-d'oeuvre esclave a l'industrie de guerre. Pres de 50 sous-camps sont crees, ou les detenus travaillent dans des conditions mortelles pour l'industrie aeronautique, l'armement et la construction souterraine.",
  },
  {
    date: "Janvier - avril 1945",
    title: "Les marches de la mort",
    description:
      "Des dizaines de milliers de detenus des camps de l'Est arrivent a Mauthausen apres des marches forcees eprouvantes. Le camp, deja surpeuple, voit ses conditions se deteriorer dramatiquement. Les epidemies et la famine tuent des milliers de personnes dans les derniers mois.",
  },
  {
    date: "5 mai 1945",
    title: "Liberation",
    description:
      "Les troupes americaines de la 11e division blindee liberent Mauthausen et ses sous-camps. Elles decouvrent environ 40 000 survivants dans un etat de delabrement extreme, ainsi que les preuves des atrocites commises : chambres a gaz, fours crematoires, et les temoignages de l'horreur de l'escalier de la mort.",
  },
]

const campSections = [
  {
    title: "Le camp principal",
    subtitle: "Forteresse de granit",
    description:
      "Mauthausen etait construit en pierre de granit, lui donnant l'apparence d'une forteresse medievale. Ses murs massifs, ses tours de garde et son portail imposant en faisaient l'un des camps les plus securises du Reich. Le camp surplombait le Danube, offrant un contraste saisissant entre la beaute du paysage et l'horreur des lieux.",
    details: [
      "L'entree principale, avec son portail de granit et son aigle nazi, est devenue un symbole du systeme concentrationnaire.",
      "Le camp comptait une chambre a gaz deguisee en salle de douche, ou des milliers de detenus furent assassines au Zyklon B.",
      "Le crematorium fonctionnait en permanence, incinerant les corps des victimes executees, mortes de faim ou d'epuisement.",
      "Le « Bunker » (prison du camp) etait un lieu de torture ou les detenus etaient soumis aux sevices les plus cruels.",
      "Un terrain de football SS jouxtait le camp, ou les gardiens se divertissaient a quelques metres des atrocites.",
    ],
  },
  {
    title: "L'escalier de la mort",
    subtitle: "186 marches vers l'enfer",
    description:
      "Le « Todesstiege » (escalier de la mort) est le symbole le plus terrifiant de Mauthausen. Cet escalier de 186 marches, taille dans la roche, reliait le fond de la carriere de Wiener Graben au camp. Les detenus devaient le gravir plusieurs fois par jour en portant des blocs de granit de 25 a 50 kg sur le dos.",
    details: [
      "Les marches, irregulieres et glissantes, causaient de nombreuses chutes. Les gardes SS poussaient deliberement des prisonniers dans le vide.",
      "Le mur au-dessus de la carriere etait surnomme le « Mur des parachutistes » : les SS y precipitaient des detenus dans le vide.",
      "Les prisonniers epuises qui tombaient etaient battus ou abattus sur place par les gardes.",
      "Le granit extrait servait aux grands projets architecturaux du Reich, notamment les plans megalomanes d'Albert Speer pour Berlin.",
      "Plusieurs milliers de detenus sont morts dans la carriere et dans l'escalier de la mort.",
    ],
  },
  {
    title: "Le complexe Gusen",
    subtitle: "Le camp jumeau meurtrier",
    description:
      "Gusen, a 5 km de Mauthausen, etait parfois considere comme encore plus mortel que le camp principal. Divise en trois camps (Gusen I, II et III), il abritait des ateliers d'armement souterrains ou les detenus travaillaient dans des conditions epouvantables.",
    details: [
      "Les tunnels souterrains de Gusen, appeles « Bergkristall », servaient a fabriquer des chasseurs Messerschmitt Me 262.",
      "Le taux de mortalite a Gusen etait parmi les plus eleves de tous les camps : travail epuisant, sous-alimentation, epidemies.",
      "Les detenus espagnols republicains furent nombreux a Gusen, ou beaucoup perirent.",
      "Une chambre a gaz mobile (camion) faisait la navette entre Mauthausen et Gusen pour executer les prisonniers.",
      "Plus de 35 000 personnes sont mortes a Gusen et ses sous-camps.",
    ],
  },
]

const conditions = [
  {
    title: "La faim",
    subtitle: "Famine organisee",
    description:
      "Les rations alimentaires etaient deliberement insuffisantes : une soupe claire, un morceau de pain noir, parfois un ersatz de cafe. Les detenus recevaient entre 700 et 1 000 calories par jour, bien en dessous du minimum vital. La faim etait un outil de domination et d'extermination lente. Les « Muselmanner » (detenus squelettiques) etaient voues a une mort certaine.",
  },
  {
    title: "La carriere",
    subtitle: "Extermination par le travail",
    description:
      "Le travail dans la carriere de granit etait concu pour tuer. Les detenus devaient extraire des blocs de pierre a mains nues ou avec des outils rudimentaires, puis les porter sur leur dos dans l'escalier de la mort. Les journees duraient 11 a 12 heures. Ceux qui s'effondraient etaient battus, jetes dans le vide ou abattus. Des milliers sont morts d'epuisement, de chutes ou d'executions.",
  },
  {
    title: "La violence",
    subtitle: "Cruaute systematique",
    description:
      "Mauthausen etait repute pour la cruaute exceptionnelle de ses gardes SS. Les tortures incluaient la pendaison par les poignets, l'immersion dans l'eau glacee, les coups de fouet. Les executions etaient frequentes : pendaisons, fusillades, noyades dans les bassins du camp. Le « mur des parachutistes » au-dessus de la carriere servait a precipiter des detenus dans le vide pour le divertissement des SS.",
  },
  {
    title: "Le froid",
    subtitle: "L'hiver autrichien",
    description:
      "Les hivers autrichiens etaient particulierement rudes a 250 metres d'altitude. Les detenus, vetements insuffisants, etaient forces de travailler par tous les temps. Des appels interminables dans le froid causaient des dizaines de morts par hypothermie. Certains etaient arroses d'eau glacee et laisses dehors jusqu'a ce que mort s'ensuive.",
  },
  {
    title: "La deshumanisation",
    subtitle: "Destruction de l'identite",
    description:
      "Les prisonniers de Mauthausen subissaient une deshumanisation totale : tonte, confiscation de tout effet personnel, attribution d'un numero. Les triangles de couleur identifiaient chaque categorie : rouge pour les politiques, vert pour les criminels, rose pour les homosexuels, violet pour les Temoins de Jehovah, bleu pour les apatrides, noir pour les « asociaux ». Les Juifs portaient deux triangles superposes formant l'etoile de David.",
  },
]

const statistics = [
  { number: "190 000", label: "Detenus", description: "Environ 190 000 personnes ont ete detenues a Mauthausen et ses sous-camps entre 1938 et 1945." },
  { number: "90 000", label: "Victimes", description: "Pres de 90 000 detenus sont morts a Mauthausen : executes, morts de faim, gazees ou epuises au travail." },
  { number: "49", label: "Sous-camps", description: "Le complexe de Mauthausen comprenait 49 sous-camps dissemines en Autriche et dans le sud de l'Allemagne." },
]

const detailedStats = [
  { number: "Polonais", description: "Environ 30 000 Polonais, le groupe national le plus nombreux parmi les detenus" },
  { number: "Sovietiques", description: "Plusieurs dizaines de milliers, dont de nombreux prisonniers de guerre executes" },
  { number: "Hongrois", description: "Dizaines de milliers de Juifs hongrois deportes en 1944-1945" },
  { number: "Espagnols", description: "Environ 7 000 republicains espagnols, refugies en France puis deportes" },
]

const deportes = [
  {
    name: "Seguy",
    arrivalDate: "Date inconnue",
    status: "Deporte",
    description:
      "Deporte au camp de Mauthausen. Les conditions exactes de sa detention restent a documenter.",
  },
  {
    name: "Lestage",
    arrivalDate: "Date inconnue",
    status: "Deporte",
    description:
      "Deporte au camp de Mauthausen. Les circonstances de sa deportation et de son parcours dans le camp font partie de la memoire a preserver.",
  },
]

const resistanceActs = [
  {
    title: "La solidarite internationale",
    description:
      "Malgre la brutalite extreme du camp, des reseaux de solidarite se formerent entre detenus de differentes nationalites. Les communistes allemands et autrichiens, les republicains espagnols et les resistants de toute l'Europe partageaient nourriture, informations et soutien moral. Cette entraide a permis a certains de survivre.",
  },
  {
    title: "Les temoins de l'horreur",
    description:
      "Des detenus affectes au service photographique des SS, comme Francisco Boix, photographe espagnol, reussirent a cacher des cliches qui documenteraient les crimes nazis. Ces photographies constituerent des preuves accablantes lors des proces de Nuremberg et de Dachau.",
  },
  {
    title: "Le sabotage discret",
    description:
      "Dans les ateliers d'armement souterrains de Gusen, les detenus pratiquaient un sabotage methodique de la production. Pieces defectueuses, travail ralenti, machines mal reglees : ces actes de resistance, s'ils etaient decouverts, entrainaient une execution immediate.",
  },
  {
    title: "La preservation de la memoire",
    description:
      "Certains detenus, au peril de leur vie, tinrent des journaux clandestins ou memoriserent les noms des victimes et des bourreaux. Ces temoignages furent essentiels apres la guerre pour rendre justice et honorer la memoire des disparus.",
  },
]

const liberationFacts = [
  "Environ 40 000 detenus encore vivants a la liberation, beaucoup dans un etat critique",
  "Plus de 3 000 detenus moururent encore dans les semaines suivant la liberation, trop affaiblis pour survivre",
  "Les troupes americaines decouvrirent des preuves accablantes : chambres a gaz, fours crematoires, registres d'executions",
  "Des survivants squelettiques, certains pesant moins de 30 kg, temoignant de l'horreur vecue",
  "Le camp servit ensuite de camp de personnes deplacees jusqu'en 1947",
]

/* ─── Page ─── */

export default function MauthausenPage() {
  return (
    <main>
      {/* ══════ HERO ══════ */}
      <section className="relative min-h-[85vh] flex items-end">
        <Image
          src="/images/mauthausen-gate.jpg"
          alt="Entree du camp de concentration de Mauthausen"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-16 md:pb-24">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            1938 &mdash; 1945
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl text-foreground">
            Mauthausen
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Camp de categorie III, le plus brutal du systeme concentrationnaire
            nazi, au coeur de l{"'"}Autriche.
          </p>
          <div className="mt-8 h-px w-24 bg-primary" />
        </div>
      </section>

      {/* ══════ INTRODUCTION ══════ */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              La forteresse de l{"'"}horreur
            </h2>
            <div className="mt-4 h-px w-16 bg-primary" />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Mauthausen etait un camp de concentration nazi situe en{" "}
              <span className="font-semibold text-foreground">Autriche</span>,
              cree en{" "}
              <span className="font-semibold text-foreground">aout 1938</span>,
              quelques mois apres l{"'"}Anschluss. Il est tristement celebre
              pour la{" "}
              <span className="font-semibold text-foreground">
                brutalite extreme
              </span>{" "}
              de ses conditions de detention et son taux de mortalite parmi les
              plus eleves de tous les camps nazis.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Classe par les nazis comme camp de{" "}
              <span className="font-semibold text-foreground">
                "categorie III"
              </span>
              , la plus severe, Mauthausen etait reserve aux prisonniers
              consideres comme{" "}
              <span className="font-semibold text-foreground">
                « irreducables »
              </span>{" "}
              et{" "}
              <span className="font-semibold text-foreground">
                « irrecuperables »
              </span>
              . Cette classification signifiait les conditions les plus
              inhumaines et la plus faible esperance de survie.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Les prisonniers venaient de toute l{"'"}Europe :{" "}
              <span className="font-semibold text-foreground">
                opposants politiques
              </span>
              ,{" "}
              <span className="font-semibold text-foreground">resistants</span>,{" "}
              <span className="font-semibold text-foreground">Juifs</span>,{" "}
              <span className="font-semibold text-foreground">intimport CampPageLayout from '../components/CampPageLayout';

const mauthausenData = {
  dates: "1938 — 1945",
  title: "Mauthausen",
  subtitle: "Camp de catégorie III, le plus brutal du système concentrationnaire nazi, en Autriche.",
  
  introTitle: "L'escalier de la mort",
  introText: [
    "Mauthausen fut classé par les SS comme camp de catégorie III, réservé aux détenus considérés comme « irrécupérables ». C'était le camp le plus dur du système nazi.",
    "Construit près d'une carrière de granit, le camp est tristement célèbre pour son « escalier de la mort » : 186 marches que les détenus devaient gravir en portant des blocs de pierre de 25 à 50 kg.",
  ],
  
  timeline: [
    {
      date: "Août 1938",
      title: "Création du camp",
      description: "Après l'Anschluss, les premiers détenus arrivent pour construire le camp près de la carrière de Wiener-Graben.",
    },
    {
      date: "1939",
      title: "Camp de catégorie III",
      description: "Mauthausen est classé camp d'extermination par le travail. Les conditions y sont les plus dures du système nazi.",
    },
    {
      date: "1943",
      title: "Développement industriel",
      description: "Les tunnels souterrains de Gusen sont creusés pour la production d'armement. Des milliers de détenus y mourront.",
    },
    {
      date: "Mai 1945",
      title: "Libération",
      description: "Le 5 mai, les troupes américaines libèrent le camp. Ils découvrent des scènes d'horreur indescriptibles.",
    },
  ],
  
  structureTitle: "Un système de mort",
  structureSubtitle: "Organisation",
  structureText: [
    "Mauthausen contrôlait un vaste réseau de sous-camps à travers l'Autriche. Le complexe de Gusen était presque aussi meurtrier que le camp principal.",
  ],
  structureBlocks: [
    {
      title: "Le camp principal",
      text: "Situé sur un plateau dominant le Danube, entouré de murs de granit. L'entrée fortifiée et les tours de guet en faisaient une forteresse.",
    },
    {
      title: "La carrière de Wiener-Graben",
      text: "Les détenus extrayaient le granit dans des conditions mortelles. L'escalier de la mort reliait la carrière au camp.",
    },
    {
      title: "Les tunnels de Gusen",
      text: "Vastes galeries souterraines où des milliers de détenus travaillaient et mouraient pour l'industrie de guerre nazie.",
    },
  ],
  
  processTitle: "L'extermination",
  processSubtitle: "Méthodes",
  processText: [
    "À Mauthausen, les SS développèrent des méthodes particulièrement cruelles pour éliminer les détenus, souvent présentées comme des « accidents ».",
  ],
  processList: [
    "Précipitation depuis le haut de la carrière (le « mur des parachutistes »).",
    "Épuisement dans les escaliers sous le poids des blocs de granit.",
    "Chambre à gaz et camions à gaz.",
    "Exécutions par balles et pendaisons.",
    "Expériences médicales mortelles.",
    "Noyades dans les bassins du camp.",
  ],
  
  conditionsTitle: "La terreur quotidienne",
  conditionsSubtitle: "Conditions",
  conditionsCards: [
    {
      title: "Le travail de la carrière",
      subtitle: "L'escalier de la mort",
      text: "186 marches irrégulières à gravir en portant des blocs de granit. Une chute entraînait souvent la mort de plusieurs détenus.",
    },
    {
      title: "Le froid",
      subtitle: "L'hiver autrichien",
      text: "Les hivers rigoureux à plus de 400 mètres d'altitude tuaient les détenus affaiblis par malnutrition.",
    },
    {
      title: "Les SS de Mauthausen",
      subtitle: "Sadisme organisé",
      text: "Les gardes SS de Mauthausen étaient réputés pour leur cruauté exceptionnelle, même selon les standards nazis.",
    },
    {
      title: "Les « Muselmanners »",
      subtitle: "Les condamnés",
      text: "Les détenus arrivés au stade d'épuisement total étaient systématiquement éliminés.",
    },
  ],
  
  stats: [
    { value: "190 000", label: "Détenus", description: "Passés par le camp" },
    { value: "90 000", label: "Morts", description: "Dans le complexe" },
    { value: "47%", label: "Mortalité", description: "Taux effroyable" },
  ],
  statsSecondary: [
    { value: "49", label: "Sous-camps" },
    { value: "186", label: "Marches" },
    { value: "30+", label: "Nationalités" },
    { value: "7", label: "Années" },
  ],
  
  deportes: [
    {
      nom: "Francisco Boix",
      date: "1941",
      statut: "Survécu",
      details: "Photographe espagnol qui réussit à sauver et cacher des milliers de photos documentant les atrocités. Témoin clé à Nuremberg.",
    },
    {
      nom: "Simon Wiesenthal",
      date: "1945",
      statut: "Survécu",
      details: "Transféré à Mauthausen en janvier 1945. Devint après-guerre le plus célèbre chasseur de nazis.",
    },
  ],
  
  liberationTitle: "La libération",
  liberationText: [
    "Le 5 mai 1945, les troupes américaines de la 11e division blindée libèrent Mauthausen. Ils découvrent environ 16 000 survivants dans un état de délabrement extrême.",
    "Les photographies prises par les libérateurs constituent un témoignage accablant des crimes nazis. Certaines furent utilisées lors des procès de Nuremberg.",
    "Le camp de Gusen avait été libéré deux jours plus tôt. Au total, près de 40 000 détenus furent libérés dans le complexe de Mauthausen.",
  ],
  
  memorialQuote: "Passant, va dire à Sparte que nous sommes morts ici en obéissant à ses lois.",
  memorialAuthor: "Inscription sur le monument espagnol de Mauthausen",
  memorialStat: "90 000",
  memorialStatLabel: "victimes à Mauthausen",
  
  otherCamps: [
    { name: "Auschwitz", country: "Pologne", path: "/camp/auschwitz" },
    { name: "Buchenwald", country: "Allemagne", path: "/camp/buchenwald" },
    { name: "Ravensbrück", country: "Allemagne", path: "/camp/ravensbruck" },
    { name: "Neuengamme", country: "Allemagne", path: "/camp/neuengamme" },
    { name: "Drancy", country: "France", path: "/camp/drancy" },
    { name: "Compiègne", country: "France", path: "/camp/compiegne" },
  ],
};

export default function Mauthausen() {
  return <CampPageLayout {...mauthausenData} />;
}

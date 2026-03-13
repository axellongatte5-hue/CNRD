import Image from "next/image"

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
    title: "Classification \"Categorie III\"",
    description:
      "Les nazis classent Mauthausen comme camp de \"categorie III\", la plus severe, reserve aux prisonniers consideres comme \"irreducables\" et \"irrecuperables\". Cette classification implique les conditions de detention les plus brutales et la plus faible esperance de vie de tout le systeme concentrationnaire.",
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
      "Le \"Bunker\" (prison du camp) etait un lieu de torture ou les detenus etaient soumis aux sevices les plus cruels.",
      "Un terrain de football SS jouxtait le camp, ou les gardiens se divertissaient a quelques metres des atrocites.",
    ],
  },
  {
    title: "L'escalier de la mort",
    subtitle: "186 marches vers l'enfer",
    description:
      "Le \"Todesstiege\" (escalier de la mort) est le symbole le plus terrifiant de Mauthausen. Cet escalier de 186 marches, taille dans la roche, reliait le fond de la carriere de Wiener Graben au camp. Les detenus devaient le gravir plusieurs fois par jour en portant des blocs de granit de 25 a 50 kg sur le dos.",
    details: [
      "Les marches, irregulieres et glissantes, causaient de nombreuses chutes. Les gardes SS poussaient deliberement des prisonniers dans le vide.",
      "Le mur au-dessus de la carriere etait surnomme le \"Mur des parachutistes\" : les SS y precipitaient des detenus dans le vide.",
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
      "Les tunnels souterrains de Gusen, appeles \"Bergkristall\", servaient a fabriquer des chasseurs Messerschmitt Me 262.",
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
      "Les rations alimentaires etaient deliberement insuffisantes : une soupe claire, un morceau de pain noir, parfois un ersatz de cafe. Les detenus recevaient entre 700 et 1 000 calories par jour, bien en dessous du minimum vital. La faim etait un outil de domination et d'extermination lente. Les \"Muselmanner\" (detenus squelettiques) etaient voues a une mort certaine.",
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
      "Mauthausen etait repute pour la cruaute exceptionnelle de ses gardes SS. Les tortures incluaient la pendaison par les poignets, l'immersion dans l'eau glacee, les coups de fouet. Les executions etaient frequentes : pendaisons, fusillades, noyades dans les bassins du camp. Le \"mur des parachutistes\" au-dessus de la carriere servait a precipiter des detenus dans le vide pour le divertissement des SS.",
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
      "Les prisonniers de Mauthausen subissaient une deshumanisation totale : tonte, confiscation de tout effet personnel, attribution d'un numero. Les triangles de couleur identifiaient chaque categorie : rouge pour les politiques, vert pour les criminels, rose pour les homosexuels, violet pour les Temoins de Jehovah, bleu pour les apatrides, noir pour les \"asociaux\". Les Juifs portaient deux triangles superposes formant l'etoile de David.",
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
                \"categorie III\"
              </span>
              , la plus severe, Mauthausen etait reserve aux prisonniers
              consideres comme{" "}
              <span className="font-semibold text-foreground">
                \"irreducables\"
              </span>{" "}
              et{" "}
              <span className="font-semibold text-foreground">
                \"irrecuperables\"
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
              <span className="font-semibold text-foreground">intellectuels</span>,{" "}
              <span className="font-semibold text-foreground">
                prisonniers de guerre
              </span>
              ,{" "}
              <span className="font-semibold text-foreground">
                republicains espagnols
              </span>{" "}
              et bien d{"'"}autres groupes que le regime nazi voulait eliminer
              ou exploiter jusqu{"'"}a la mort.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ TIMELINE ══════ */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
          Chronologie
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          Les dates cles de Mauthausen
        </h2>
        <div className="mt-4 h-px w-16 bg-primary" />

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />
          <div className="flex flex-col gap-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 ${
                  index % 2 === 0
                    ? "md:pr-12 md:text-right md:self-start"
                    : "md:pl-12 md:self-end"
                }`}
              >
                <div
                  className={`absolute top-1 left-2.5 h-3 w-3 rounded-full border-2 border-primary bg-background md:top-1 ${
                    index % 2 === 0
                      ? "md:left-auto md:-right-1.5"
                      : "md:-left-1.5"
                  }`}
                />
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  {event.date}
                </p>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {event.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CAMP STRUCTURE ══════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Structure du camp
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            L{"'"}escalier de la mort et les carrieres
          </h2>
          <div className="mt-4 h-px w-16 bg-primary" />

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Mauthausen etait construit a proximite des carrieres de granit de{" "}
            <span className="font-semibold text-foreground">Wiener Graben</span>
            . Le travail dans ces carrieres, et notamment dans le tristement
            celebre{" "}
            <span className="font-semibold text-foreground">
              escalier de la mort
            </span>
            , etait concu comme un instrument d{"'"}
            <span className="font-semibold text-foreground">
              extermination par le travail
            </span>
            .
          </p>

          {/* Image de l'escalier */}
          <div className="mt-12">
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-sm">
              <Image
                src="/images/mauthausen-stairs.jpg"
                alt="L'escalier de la mort de Mauthausen - 186 marches vers l'enfer"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-background/20" />
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              L{"'"}escalier de la mort (Todesstiege) &mdash; 186 marches reliant
              la carriere au camp
            </p>
          </div>

          <div className="mt-16 flex flex-col gap-12">
            {campSections.map((section, index) => (
              <div
                key={index}
                className="group border-l-2 border-border py-6 pl-8 transition-colors hover:border-primary"
              >
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      {section.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium uppercase tracking-widest text-primary">
                      {section.subtitle}
                    </p>
                    <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                      {section.description}
                    </p>
                  </div>
                </div>
                <ul className="mt-6 flex flex-col gap-3">
                  {section.details.map((detail, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CONDITIONS ══════ */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Conditions de vie
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              L{"'"}enfer sur terre
            </h2>
            <div className="mt-4 h-px w-16 bg-primary" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Mauthausen etait repute, meme parmi les autres camps, pour la
              cruaute exceptionnelle de ses conditions. Le travail dans les
              carrieres, le froid autrichien, la violence des gardes et la
              famine organisee faisaient de chaque jour un combat pour la
              survie.
            </p>
          </div>

          <div className="md:w-2/3">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm">
              <Image
                src="/images/mauthausen-quarry.jpg"
                alt="La carriere de granit de Wiener Graben a Mauthausen"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-background/20" />
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              La carriere de Wiener Graben &mdash; lieu de travail force et d{"'"}execution
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {conditions.map((condition, index) => (
            <div
              key={index}
              className="border border-border bg-card p-8 transition-colors hover:border-primary"
            >
              <h3 className="font-serif text-xl font-bold text-foreground">
                {condition.title}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-primary">
                {condition.subtitle}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {condition.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ STATISTICS ══════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              En chiffres
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              L{"'"}ampleur du crime
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-primary" />
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-4xl font-bold text-primary md:text-5xl">
                  {stat.number}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-foreground">
                  {stat.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <h3 className="text-center font-serif text-xl font-bold text-foreground">
              Nationalites des detenus
            </h3>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {detailedStats.map((stat, index) => (
                <div
                  key={index}
                  className="border-l-2 border-border pl-4 transition-colors hover:border-primary"
                >
                  <p className="font-semibold text-foreground">{stat.number}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ RESISTANCE ══════ */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
          Actes de resistance
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          Resister a Mauthausen
        </h2>
        <div className="mt-4 h-px w-16 bg-primary" />

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Dans cet univers de violence absolue, des actes de resistance, meme
          infimes, temoignaient de la dignite indestructible de l{"'"}etre humain.
          Solidarite, sabotage, preservation de la memoire : autant de formes de
          combat contre la barbarie.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {resistanceActs.map((act, index) => (
            <div
              key={index}
              className="border-l-2 border-border pl-6 transition-colors hover:border-primary"
            >
              <h3 className="font-serif text-xl font-bold text-foreground">
                {act.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {act.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ DEPORTES ══════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Temoignages
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Des destins brises
          </h2>
          <div className="mt-4 h-px w-16 bg-primary" />

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Derriere les chiffres, des vies. Chaque nom represente une personne
            arrachee a sa famille, a son pays, a son avenir. Voici quelques-uns
            de ceux qui ont ete deportes a Mauthausen.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {deportes.map((deporte, index) => (
              <div
                key={index}
                className="border border-border bg-card p-8 transition-colors hover:border-primary"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      {deporte.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Arrive le {deporte.arrivalDate}
                    </p>
                  </div>
                  <span className="rounded-sm bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {deporte.status}
                  </span>
                </div>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  {deporte.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ LIBERATION ══════ */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              5 mai 1945
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              La liberation
            </h2>
            <div className="mt-4 h-px w-16 bg-primary" />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Le{" "}
              <span className="font-semibold text-foreground">5 mai 1945</span>,
              les troupes americaines de la{" "}
              <span className="font-semibold text-foreground">
                11e division blindee
              </span>{" "}
              atteignent Mauthausen. Ils decouvrent un spectacle d{"'"}horreur
              que les mots peinent a decrire : des dizaines de milliers de
              survivants squelettiques, des montagnes de cadavres, les preuves
              d{"'"}un crime sans precedent.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Dans les jours precedents, les SS avaient tente de faire
              disparaitre les preuves et d{"'"}evacuer certains detenus. Mais
              l{"'"}effondrement du Reich les avait empeches de mener a bien
              leur sinistre projet. Les survivants purent enfin temoigner.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-serif text-xl font-bold text-foreground">
            Ce que les liberateurs decouvrirent
          </h3>
          <ul className="mt-6 flex flex-col gap-4">
            {liberationFacts.map((fact, index) => (
              <li key={index} className="flex gap-3 text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span className="leading-relaxed">{fact}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 border-l-2 border-primary py-4 pl-6">
          <blockquote className="font-serif text-xl italic leading-relaxed text-foreground">
            &ldquo;Si l{"'"}echo de leur voix faiblit, nous perirons.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-muted-foreground">
            &mdash; Paul Eluard, poete francais
          </p>
        </div>
      </section>

      {/* ══════ MEMORIAL ══════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Lieu de memoire
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Ne jamais oublier
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary" />

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Mauthausen est aujourd{"'"}hui un{" "}
            <span className="font-semibold text-foreground">
              memorial
            </span>{" "}
            visite par des centaines de milliers de personnes chaque annee. Le
            site preserve la memoire des{" "}
            <span className="font-semibold text-foreground">
              90 000 victimes
            </span>{" "}
            et rappelle ou peut mener la haine, le racisme et le totalitarisme.
          </p>

          <div className="mt-12 border-l-2 border-primary py-4 pl-6 text-left">
            <blockquote className="font-serif text-xl italic leading-relaxed text-foreground">
              &ldquo;L{"'"}oubli serait un triomphe definitif de l{"'"}ennemi.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm text-muted-foreground">
              &mdash; Primo Levi, ecrivain et survivant d{"'"}Auschwitz
            </p>
          </div>

          <p className="mt-12 font-serif text-2xl font-bold text-foreground">
            Plus jamais ca.
          </p>
        </div>
      </section>

      {/* ══════ NAVIGATION VERS AUTRES CAMPS ══════ */}
      <section className="border-t border-border bg-background py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Autres lieux de memoire
            </p>
            <h2 className="mt-4 font-serif text-2xl font-bold text-foreground md:text-3xl">
              Decouvrir les autres camps
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-primary" />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <a
              href="/"
              className="group border border-border bg-card p-8 transition-colors hover:border-primary"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Pologne &middot; 1940-1945
              </p>
              <h3 className="mt-2 font-serif text-xl font-bold text-foreground">
                Auschwitz-Birkenau
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Plus de 1,1 million de victimes. Symbole mondial de la Shoah.
              </p>
              <p className="mt-4 text-sm font-medium text-primary group-hover:underline">
                Voir la page &rarr;
              </p>
            </a>

            <a
              href="/buchenwald"
              className="group border border-border bg-card p-8 transition-colors hover:border-primary"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Allemagne &middot; 1937-1945
              </p>
              <h3 className="mt-2 font-serif text-xl font-bold text-foreground">
                Buchenwald
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Pres de Weimar. Plus de 56 000 victimes. Auto-liberation des detenus.
              </p>
              <p className="mt-4 text-sm font-medium text-primary group-hover:underline">
                Voir la page &rarr;
              </p>
            </a>

            <a
              href="/neuengamme"
              className="group border border-border bg-card p-8 transition-colors hover:border-primary"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Allemagne &middot; 1938-1945
              </p>
              <h3 className="mt-2 font-serif text-xl font-bold text-foreground">
                Neuengamme
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Pres de Hambourg. 106 000 detenus. Tragedie de la baie de Lubeck.
              </p>
              <p className="mt-4 text-sm font-medium text-primary group-hover:underline">
                Voir la page &rarr;
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* ══════ FOOTER ══════ */}
      <footer className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="font-serif text-lg font-bold text-foreground">
              Concours National de la Resistance et de la Deportation
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Ce site a ete realise dans le cadre du Concours de la Resistance.
              <br />
              En memoire de toutes les victimes.
            </p>
            <div className="mt-4 h-px w-16 bg-primary" />
            <p className="text-xs text-muted-foreground">
              &copy; 2025 &mdash; Devoir de Memoire
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

import Image from "next/image"

/* ─── Data ─── */

const timelineEvents = [
  {
    date: "Juillet 1937",
    title: "Creation du camp",
    description:
      "Les SS commencent la construction du camp de concentration de Buchenwald sur l'Ettersberg, une colline boisee a 8 km de Weimar, ville symbole de la culture allemande. Les premiers prisonniers, principalement des opposants politiques et des criminels de droit commun, sont contraints de construire leur propre prison.",
  },
  {
    date: "1938",
    title: "Premiers Juifs deportes",
    description:
      "Apres la Nuit de Cristal (9-10 novembre 1938), environ 10 000 Juifs allemands sont internes a Buchenwald. Beaucoup sont liberes apres avoir signe des documents cedant leurs biens et s'engageant a emigrer, mais des centaines meurent des suites des mauvais traitements.",
  },
  {
    date: "1939 - 1941",
    title: "Expansion du camp",
    description:
      "Avec le debut de la guerre, le camp s'agrandit considerablement. Des prisonniers de guerre polonais, puis des resistants de toute l'Europe arrivent en masse. Le travail force devient un element central de l'economie de guerre nazie.",
  },
  {
    date: "1941",
    title: "Execution des prisonniers sovietiques",
    description:
      "Plus de 8 000 prisonniers de guerre sovietiques sont executes a Buchenwald, souvent dans les ecuries du camp transformees en lieu d'execution. Ils sont abattus d'une balle dans la nuque sous pretexte d'un examen medical.",
  },
  {
    date: "1943 - 1944",
    title: "Sous-camps industriels",
    description:
      "Buchenwald devient le centre d'un vaste reseau de plus de 130 sous-camps. Les detenus sont exploites par des entreprises allemandes comme Gustloff-Werke, Junkers et BMW pour la production d'armements. L'usine souterraine de Dora fabrique les fusees V2.",
  },
  {
    date: "Aout 1944",
    title: "Transfert d'Auschwitz",
    description:
      "Face a l'avancee sovietique, des milliers de detenus sont transferes depuis Auschwitz et d'autres camps de l'Est vers Buchenwald. La population du camp explose, aggravant les conditions deja catastrophiques.",
  },
  {
    date: "Janvier - avril 1945",
    title: "Marches de la mort",
    description:
      "Des dizaines de milliers de prisonniers des camps de l'Est arrivent a Buchenwald apres des marches forcees meurtrireres. Le camp, prevu pour 8 000 personnes, compte plus de 80 000 detenus dans des conditions apocalyptiques.",
  },
  {
    date: "11 avril 1945",
    title: "Liberation",
    description:
      "Les troupes americaines de la 6e division blindee liberent Buchenwald. Fait unique : une organisation clandestine de resistants armes avait pris le controle du camp quelques heures avant l'arrivee des Americains, protegeant les detenus des derniers SS.",
  },
]

const campSections = [
  {
    title: "Le camp principal",
    subtitle: "Centre administratif et de detention",
    description:
      "Le camp principal de Buchenwald s'etendait sur 40 hectares sur les pentes de l'Ettersberg. Il comprenait les baraquements des detenus, les batiments administratifs SS, les ateliers, l'infirmerie et les installations de torture et d'execution.",
    details: [
      "Le portail d'entree portait l'inscription cynique \"Jedem das Seine\" (\"A chacun son du\"), visible depuis l'interieur du camp comme un rappel permanent de l'ideologie nazie.",
      "L'Appellplatz (place d'appel) pouvait contenir des milliers de detenus pour des appels interminables, parfois de plusieurs heures, par tous les temps.",
      "Le crematorium, construit en 1940, pouvait incinerer jusqu'a 400 corps par jour. Un ascenseur amenait les cadavres depuis la cave ou avaient lieu les executions.",
      "Le bloc 46 servait de laboratoire pour des experiences medicales sur les detenus, notamment des tests de vaccins contre le typhus.",
      "Le zoo SS, situe a cote du camp, permettait aux familles des gardiens de se divertir a quelques metres des atrocites.",
    ],
  },
  {
    title: "Les sous-camps",
    subtitle: "Un reseau de travail force",
    description:
      "Buchenwald administrait un vaste reseau de plus de 130 sous-camps dissemines a travers l'Allemagne. Ces Kommandos exterieurs fournissaient une main-d'oeuvre esclave a l'industrie de guerre allemande.",
    details: [
      "Dora-Mittelbau, le plus tristement celebre, exploitait les detenus dans des tunnels souterrains pour fabriquer les fusees V1 et V2. Plus de 20 000 prisonniers y sont morts.",
      "Les detenus travaillaient pour des entreprises comme BMW, Siemens, IG Farben, Krupp et de nombreuses autres firmes allemandes.",
      "Les conditions dans les sous-camps etaient souvent pires que dans le camp principal : travail epuisant, sous-alimentation extreme, absence de soins.",
      "Les SS louaient les detenus aux entreprises pour 4 a 6 Reichsmarks par jour, un commerce humain extremement lucratif.",
      "Beaucoup de sous-camps furent evacues vers Buchenwald en 1945, provoquant une surpopulation catastrophique.",
    ],
  },
  {
    title: "Le \"Petit Camp\"",
    subtitle: "L'antichambre de la mort",
    description:
      "Le \"Petit Camp\" (Kleines Lager), cree en 1942, etait une section de quarantaine qui devint un veritable mouroir. Les nouveaux arrivants et les detenus les plus faibles y etaient parques dans des conditions encore plus terribles que dans le camp principal.",
    details: [
      "Les baraquements du Petit Camp, prevus pour 50 personnes, en contenaient souvent plus de 1 000.",
      "Les detenus dormaient sur des chatieres de bois a cinq niveaux, souvent a plusieurs par niveau.",
      "Elie Wiesel, futur prix Nobel de la paix, y fut detenu avec son pere en 1945 apres son transfert d'Auschwitz.",
      "Le Petit Camp avait le taux de mortalite le plus eleve : faim, maladies, epuisement y fauchaient des centaines de vies chaque jour.",
      "En avril 1945, plus de 15 000 personnes y etaient entassees, dont de nombreux enfants juifs hongrois.",
    ],
  },
]

const conditions = [
  {
    title: "La faim",
    subtitle: "Famine organisee",
    description:
      "Les rations alimentaires etaient volontairement insuffisantes : une soupe claire le matin, une autre le soir, un morceau de pain. Les detenus recevaient environ 1 000 calories par jour (moitie du minimum vital). Le vol de nourriture etait puni de mort, pourtant la faim poussait beaucoup a prendre ce risque. Les \"Muselmanners\" (squelettiques) etaient voues a une mort certaine.",
  },
  {
    title: "Le travail force",
    subtitle: "Extermination par le labeur",
    description:
      "Les journees commencaient a 4h30 et duraient 12 heures minimum. Les detenus travaillaient dans les carrieres de pierre, les ateliers d'armement, la construction. La politique de \"Vernichtung durch Arbeit\" (extermination par le travail) visait a epuiser les prisonniers jusqu'a la mort tout en tirant profit de leur labeur. Ceux qui s'effondraient etaient battus ou abattus.",
  },
  {
    title: "La violence",
    subtitle: "Terreur quotidienne",
    description:
      "Les coups, les tortures et les executions arbitraires rythmaient la vie du camp. Les SS et les Kapos (prisonniers-surveillants) avaient droit de vie et de mort. Les punitions incluaient le fouet, la pendaison par les bras, l'enfermement dans des cellules minuscules. Les executions publiques servaient a terroriser l'ensemble du camp. Le bunker (prison du camp) etait un lieu de torture systematique.",
  },
  {
    title: "Les maladies",
    subtitle: "Epidemies mortelles",
    description:
      "Le typhus, la dysenterie, la tuberculose sevissaient en permanence. L'infirmerie du camp, loin de soigner, servait souvent de lieu de selection : les malades incurables recevaient des injections letales de phenol. Les experiences medicales du bloc 46 testaient des vaccins sur des cobayes humains, causant des centaines de morts. L'absence d'hygiene et la surpopulation favorisaient les epidemies.",
  },
  {
    title: "La deshumanisation",
    subtitle: "Destruction de l'identite",
    description:
      "Des l'arrivee, les detenus etaient depouilles de tout : vetements, objets personnels, cheveux, dignite. Leur nom etait remplace par un numero. Ils portaient l'uniforme raye et un triangle de couleur : rouge pour les politiques, vert pour les criminels, rose pour les homosexuels, noir pour les \"asociaux\", violet pour les Temoins de Jehovah, jaune pour les Juifs (souvent superpose a un autre triangle formant l'etoile de David).",
  },
]

const statistics = [
  { number: "280 000", label: "Detenus", description: "Environ 280 000 personnes ont ete detenues a Buchenwald et ses sous-camps entre 1937 et 1945." },
  { number: "56 000", label: "Victimes", description: "Plus de 56 000 detenus sont morts a Buchenwald : executes, morts de faim, de maladie ou d'epuisement." },
  { number: "130+", label: "Sous-camps", description: "Buchenwald administrait plus de 130 sous-camps, formant un vaste reseau de travail force en Allemagne." },
]

const detailedStats = [
  { number: "Juifs", description: "Plusieurs dizaines de milliers, dont beaucoup transferes d'Auschwitz en 1944-45" },
  { number: "Politiques", description: "Communistes, sociaux-democrates, resistants de toute l'Europe" },
  { number: "Polonais", description: "Plusieurs milliers d'intellectuels, resistants et otages polonais" },
  { number: "Sovietiques", description: "Plus de 8 000 prisonniers de guerre executes, des milliers d'autres detenus" },
]

const resistanceActs = [
  {
    title: "L'organisation clandestine",
    description:
      "Des 1937, des prisonniers politiques, principalement communistes allemands, creent une organisation secrete de resistance. Ce Comite international clandestin coordonnait l'entraide, le sabotage discret et la protection des plus vulnerables. Il comptait des membres de plus de 20 nationalites, unis contre la barbarie nazie.",
  },
  {
    title: "Le sabotage industriel",
    description:
      "Dans les ateliers d'armement, les detenus pratiquaient un sabotage discret mais efficace : pieces defectueuses, machines mal reglees, production ralentie. A Dora, le taux de defaillance des fusees V2 etait anormalement eleve grace a ces actes de resistance. Ceux qui etaient pris risquaient une execution immediate.",
  },
  {
    title: "Sauver les enfants",
    description:
      "L'organisation clandestine s'efforça de proteger les enfants juifs du camp, les cachant lors des selections et leur procurant des rations supplementaires. Parmi eux, le jeune Elie Wiesel, alors age de 16 ans. Environ 900 enfants furent sauves grace a ces efforts.",
  },
  {
    title: "L'auto-liberation",
    description:
      "Le 11 avril 1945, voyant les SS preparer l'evacuation du camp, le Comite clandestin declencha une insurrection armee. Avec des armes cachees depuis des mois, les resistants prirent le controle du camp quelques heures avant l'arrivee des troupes americaines, empechant un massacre final.",
  },
]

const liberationFacts = [
  "21 000 detenus encore vivants a la liberation, dont beaucoup dans un etat critique",
  "Plus de 28 000 detenus evacues dans les jours precedents vers d'autres camps ou tues en route",
  "Des montagnes de cadavres que les SS n'avaient pas eu le temps de bruler",
  "Des survivants squelettiques, malades, traumatises a vie",
  "Des documents compromettants que les SS avaient tente de detruire",
]

/* ─── Page ─── */

export default function BuchenwaldPage() {
  return (
    <main>
      {/* ══════ HERO ══════ */}
      <section className="relative min-h-[85vh] flex items-end">
        <Image
          src="/images/buchenwald-gate.jpg"
          alt="Entree du camp de concentration de Buchenwald"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-16 md:pb-24">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            1937 &mdash; 1945
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl text-foreground">
            Buchenwald
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            L{"'"}un des plus grands camps de concentration nazis, sur les
            hauteurs de Weimar, au coeur de l{"'"}Allemagne.
          </p>
          <div className="mt-8 h-px w-24 bg-primary" />
        </div>
      </section>

      {/* ══════ INTRODUCTION ══════ */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Sur la colline de l{"'"}Ettersberg
            </h2>
            <div className="mt-4 h-px w-16 bg-primary" />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Buchenwald etait l{"'"}un des plus grands camps de concentration
              nazis, situe en{" "}
              <span className="font-semibold text-foreground">Allemagne</span>,
              pres de{" "}
              <span className="font-semibold text-foreground">Weimar</span>,
              ville symbole de la culture allemande classique ou vecurent Goethe
              et Schiller. Cette proximite avec un haut lieu de la civilisation
              europeenne rend le contraste encore plus saisissant.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Cree en{" "}
              <span className="font-semibold text-foreground">
                juillet 1937
              </span>
              , il a servi principalement comme{" "}
              <span className="font-semibold text-foreground">
                camp de travail force
              </span>{" "}
              jusqu{"'"}a sa liberation le{" "}
              <span className="font-semibold text-foreground">
                11 avril 1945
              </span>
              . Contrairement a Auschwitz, Buchenwald ne disposait pas de
              chambres a gaz, mais la brutalite quotidienne, le travail
              epuisant, la faim et les executions y ont cause la mort de{" "}
              <span className="font-semibold text-foreground">
                plus de 56 000 personnes
              </span>
              .
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Des dizaines de milliers de personnes y ont ete deportees :{" "}
              <span className="font-semibold text-foreground">
                opposants politiques
              </span>{" "}
              (communistes, sociaux-democrates, syndicalistes),{" "}
              <span className="font-semibold text-foreground">Juifs</span>,{" "}
              <span className="font-semibold text-foreground">Roms</span>,{" "}
              <span className="font-semibold text-foreground">
                prisonniers de guerre
              </span>
              ,{" "}
              <span className="font-semibold text-foreground">homosexuels</span>
              ,{" "}
              <span className="font-semibold text-foreground">
                Temoins de Jehovah
              </span>{" "}
              et d{"'"}autres groupes persecutes par le regime nazi.
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
          Les dates cles de Buchenwald
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
            Un systeme concentrationnaire tentaculaire
          </h2>
          <div className="mt-4 h-px w-16 bg-primary" />

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Buchenwald n{"'"}etait pas un camp isole mais le centre d{"'"}un
            vaste reseau de detention et de travail force. Le camp principal
            administrait plus de 130 sous-camps dissemines a travers l{"'"}
            Allemagne, formant une veritable{" "}
            <span className="font-semibold text-foreground">
              entreprise d{"'"}exploitation humaine
            </span>{" "}
            au service de l{"'"}economie de guerre nazie.
          </p>

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

        <div className="relative mx-auto mt-20 max-w-5xl px-6">
          <div className="relative aspect-[21/9] overflow-hidden rounded-sm">
            <Image
              src="/images/buchenwald-overview.jpg"
              alt="Vue du camp de Buchenwald sur l'Ettersberg"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-background/30" />
          </div>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            Le camp de Buchenwald sur la colline de l{"'"}Ettersberg, pres de
            Weimar, symbole du contraste entre culture et barbarie
          </p>
        </div>
      </section>

      {/* ══════ CONDITIONS ══════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
            La vie quotidienne
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Des conditions inhumaines
          </h2>
          <div className="mt-4 h-px w-16 bg-primary" />

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Meme s{"'"}il n{"'"}etait pas un camp d{"'"}extermination comme
            Auschwitz, la brutalite quotidienne a Buchenwald a cause la mort de
            plus de 56 000 detenus. Chaque aspect de la vie y etait concu pour
            humilier, epuiser et finalement tuer les prisonniers.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {conditions.slice(0, 4).map((condition, index) => (
              <div key={index} className="border border-border bg-card p-8">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {condition.title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary">
                  {condition.subtitle}
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {condition.description}
                </p>
              </div>
            ))}

            <div className="border border-border bg-card p-8 md:col-span-2">
              <h3 className="font-serif text-xl font-bold text-foreground">
                {conditions[4].title}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary">
                {conditions[4].subtitle}
              </p>
              <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
                {conditions[4].description}
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
            <Image
              src="/images/buchenwald-barracks.jpg"
              alt="Interieur des baraquements de Buchenwald"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-background/20" />
          </div>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            L{"'"}interieur des baraquements : surpopulation, insalubrite et
            conditions de vie deplorables
          </p>
        </div>
      </section>

      {/* ══════ STATISTIQUES ══════ */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Le bilan humain
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Plus de 56 000 victimes
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary" />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Derriere ces chiffres, des vies brisees, des familles aneantes, des
            destins voles. Chaque nombre represente un etre humain : un pere,
            une mere, un enfant, un ami.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="border border-border bg-secondary p-8 text-center"
            >
              <p className="font-serif text-4xl font-bold text-primary md:text-5xl">
                {stat.number}
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-foreground">
                {stat.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {detailedStats.map((stat, index) => (
            <div key={index} className="border border-border p-6 text-center">
              <p className="font-serif text-lg font-bold text-foreground">
                {stat.number}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <p className="text-center leading-relaxed text-muted-foreground">
            Parmi les detenus figuraient des personnalites comme{" "}
            <span className="font-semibold text-foreground">
              Leon Blum
            </span>{" "}
            (ancien president du Conseil francais),{" "}
            <span className="font-semibold text-foreground">
              Jorge Semprun
            </span>{" "}
            (ecrivain espagnol), ou encore le jeune{" "}
            <span className="font-semibold text-foreground">Elie Wiesel</span>,
            futur prix Nobel de la paix.
          </p>
        </div>
      </section>

      {/* ══════ RESISTANCE ══════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Resistances
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Resister a Buchenwald
          </h2>
          <div className="mt-4 h-px w-16 bg-primary" />

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Buchenwald fut l{"'"}un des camps ou la resistance interieure fut la
            plus organisee. Des prisonniers politiques, principalement
            communistes allemands, creerent une organisation clandestine qui
            permit de sauver des centaines de vies et mena a l{"'"}unique cas d
            {"'"}auto-liberation d{"'"}un camp nazi.
          </p>

          <div className="mt-12 flex flex-col gap-8">
            {resistanceActs.map((act, index) => (
              <div
                key={index}
                className="border-l-2 border-border pl-6 transition-colors hover:border-primary"
              >
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {act.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {act.description}
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
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              La liberation et l{"'"}apres
            </h2>
            <div className="mt-4 h-px w-16 bg-primary" />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Le{" "}
              <span className="font-semibold text-foreground">
                11 avril 1945
              </span>
              , les troupes americaines de la 6e division blindee atteignent
              Buchenwald. Fait unique dans l{"'"}histoire des camps nazis : les
              detenus s{"'"}etaient deja liberes eux-memes quelques heures plus
              tot.
            </p>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              Face a l{"'"}imminence de la defaite, les SS avaient commence a
              evacuer le camp. L{"'"}organisation clandestine de resistance,
              voyant les gardiens s{"'"}affairer, declencha une insurrection
              armee. Avec des armes soigneusement cachees pendant des mois, les
              resistants prirent le controle du camp, capturerent les derniers
              SS et empecherent un massacre final.
            </p>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              Les soldats americains decouvrirent :
            </p>

            <ul className="mt-4 flex flex-col gap-3">
              {liberationFacts.map((item, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-l-2 border-primary pl-6">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Le Serment de Buchenwald
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Le{" "}
                <span className="font-semibold text-foreground">
                  19 avril 1945
                </span>
                , les survivants de 18 nationalites prononcent le celebre{" "}
                <span className="font-semibold text-foreground">
                  Serment de Buchenwald
                </span>{" "}
                : {'"'}Nous cesserons le combat quand le dernier des coupables
                comparaitra devant les juges des peuples. Notre mot d{"'"}ordre
                est : la destruction du nazisme jusqu{"'"}a ses racines. La
                construction d{"'"}un monde nouveau de paix et de liberte.{'"'}
              </p>
            </div>

            <div className="mt-8 border-l-2 border-primary pl-6">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Le Memorial aujourd{"'"}hui
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Le site de Buchenwald est aujourd{"'"}hui un{" "}
                <span className="font-semibold text-foreground">
                  Memorial et lieu de reflexion
                </span>{" "}
                qui accueille plusieurs centaines de milliers de visiteurs
                chaque annee. Le musee documente l{"'"}histoire du camp, tandis
                que les vestiges — crematorium, baraquements, portes — temoignent
                de l{"'"}horreur passee. Une stele comporte l{"'"}inscription :{" "}
                {'"'}Buchenwald ! Que ce nom reste un avertissement pour les
                generations a venir.{'"'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ MEMORIAL ══════ */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <div className="text-center">
          <div className="mx-auto mb-8 h-px w-24 bg-primary" />
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Devoir de memoire
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Buchenwald est aujourd{"'"}hui un lieu de memoire important. Il
            rappelle la cruaute du systeme concentrationnaire nazi et l{"'"}
            importance de defendre les droits humains pour empecher que de tels
            crimes se reproduisent.
          </p>

          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
            La proximite du camp avec{" "}
            <span className="font-semibold text-foreground">Weimar</span>, haut
            lieu de la culture allemande, rappelle que la barbarie peut surgir
            au coeur meme de la civilisation. C{"'"}est un avertissement
            permanent sur la fragilite des valeurs humanistes face a l{"'"}
            ideologie de haine.
          </p>

          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Se souvenir de Buchenwald, c{"'"}est honorer les victimes, reconnaitre
            le courage des resistants, et s{"'"}engager a ce que {'"'}Plus
            jamais ca{'"'} ne reste pas une formule vide mais un engagement
            quotidien.
          </p>

          <blockquote className="mx-auto mt-12 max-w-lg border-l-2 border-primary py-4 pl-6 text-left">
            <p className="font-serif text-xl italic leading-relaxed text-foreground">
              {'"'}On peut vivre sans souvenir et survivre meme sans espoir.
              Mais on ne peut pas vivre sans reves.{'"'}
            </p>
            <footer className="mt-3 text-sm text-muted-foreground">
              &mdash; Jorge Semprun, survivant de Buchenwald
            </footer>
          </blockquote>

          <blockquote className="mx-auto mt-8 max-w-lg border-l-2 border-primary py-4 pl-6 text-left">
            <p className="font-serif text-xl italic leading-relaxed text-foreground">
              {'"'}La nuit ne sera jamais assez sombre pour m{"'"}empecher de
              chercher la lumiere.{'"'}
            </p>
            <footer className="mt-3 text-sm text-muted-foreground">
              &mdash; Elie Wiesel, survivant de Buchenwald et Auschwitz
            </footer>
          </blockquote>

          <blockquote className="mx-auto mt-8 max-w-lg border-l-2 border-primary py-4 pl-6 text-left">
            <p className="font-serif text-xl italic leading-relaxed text-foreground">
              {'"'}Notre mot d{"'"}ordre est : la destruction du nazisme jusqu
              {"'"}a ses racines.{'"'}
            </p>
            <footer className="mt-3 text-sm text-muted-foreground">
              &mdash; Extrait du Serment de Buchenwald, 19 avril 1945
            </footer>
          </blockquote>

          <div className="mx-auto mt-12 h-px w-24 bg-primary" />

          <p className="mt-8 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Plus de 56 000 victimes &mdash; N{"'"}oublions jamais
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
              href="/mauthausen"
              className="group border border-border bg-card p-8 transition-colors hover:border-primary"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Autriche &middot; 1938-1945
              </p>
              <h3 className="mt-2 font-serif text-xl font-bold text-foreground">
                Mauthausen
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Camp de categorie III. Pres de 90 000 victimes. L{"'"}escalier de la mort.
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

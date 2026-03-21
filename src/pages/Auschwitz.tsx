import Image from "next/image"

/* ─── Data ─── */

const timelineEvents = [
  {
    date: "27 avril 1940",
    title: "Ordre de creation",
    description:
      "Heinrich Himmler ordonne la creation d'un camp de concentration a Oswiecim. Le site choisi est une ancienne caserne militaire polonaise.",
  },
  {
    date: "14 juin 1940",
    title: "Premiers prisonniers",
    description:
      "Le premier transport de 728 prisonniers politiques polonais arrive a Auschwitz I. Ils sont principalement des intellectuels, des resistants et des membres de l'elite polonaise.",
  },
  {
    date: "3 septembre 1941",
    title: "Premiers gazages",
    description:
      "Les premiers essais de gazage au Zyklon B sont effectues dans les sous-sols du bloc 11 d'Auschwitz I, sur environ 600 prisonniers de guerre sovietiques et 250 detenus malades.",
  },
  {
    date: "Octobre 1941",
    title: "Construction de Birkenau",
    description:
      "Debut de la construction d'Auschwitz II-Birkenau, a 3 km du camp principal. Ce camp est prevu pour accueillir 100 000 prisonniers de guerre, mais il deviendra le principal centre d'extermination.",
  },
  {
    date: "Janvier 1942",
    title: "Conference de Wannsee",
    description:
      "La conference de Wannsee, le 20 janvier 1942, organise la mise en oeuvre de la \"Solution finale\". Auschwitz est designe comme le principal centre d'extermination des Juifs d'Europe.",
  },
  {
    date: "1942 - 1944",
    title: "Deportations massives",
    description:
      "Des convois arrivent de toute l'Europe : France, Pays-Bas, Belgique, Hongrie, Grece, Italie, Norvege... A l'arrivee, les SS effectuent une \"selection\" : ceux juges inaptes au travail sont envoyes directement aux chambres a gaz.",
  },
  {
    date: "Mai - juillet 1944",
    title: "Deportation des Juifs de Hongrie",
    description:
      "En seulement 56 jours, environ 437 000 Juifs hongrois sont deportes a Auschwitz-Birkenau. C'est la phase d'extermination la plus intense du camp : jusqu'a 10 000 personnes assassinees par jour.",
  },
  {
    date: "7 octobre 1944",
    title: "Revolte du Sonderkommando",
    description:
      "Les membres du Sonderkommando (detenus forces de travailler dans les crematoriums) se revolent. Ils font exploser le crematorium IV et tuent plusieurs SS. La revolte est ecrasee : 451 detenus sont executes.",
  },
  {
    date: "Novembre 1944",
    title: "Fin des gazages",
    description:
      "Devant l'avancee de l'Armee rouge, Himmler ordonne l'arret des gazages et la destruction des chambres a gaz et des crematoriums pour effacer les preuves des crimes.",
  },
  {
    date: "17 janvier 1945",
    title: "Marches de la mort",
    description:
      "Les SS evacuent le camp. Environ 56 000 detenus sont forces de marcher dans le froid glacial vers l'ouest. Des milliers meurent d'epuisement, de froid ou sont abattus en chemin.",
  },
  {
    date: "27 janvier 1945",
    title: "Liberation",
    description:
      "L'Armee rouge libere Auschwitz. Les soldats sovietiques decouvrent environ 7 000 survivants, la plupart dans un etat critique. Ils trouvent aussi 7 tonnes de cheveux humains et des montagnes de vetements et d'objets personnels.",
  },
]

const camps = [
  {
    number: "I",
    title: "Auschwitz I",
    subtitle: "Camp principal",
    description:
      "Le premier camp, etabli en juin 1940 dans d'anciennes casernes militaires polonaises, servait initialement de camp de concentration pour les prisonniers politiques polonais. Il est devenu le centre administratif de tout le complexe concentrationnaire.",
    details: [
      "Pouvait contenir jusqu'a 20 000 detenus.",
      "Le bloc 11, surnomme \"le bloc de la mort\", abritait les cellules de punition et le mur des executions ou des milliers de prisonniers furent fusilles.",
      "C'est dans les sous-sols de ce bloc que les premiers essais de gazage au Zyklon B ont eu lieu en septembre 1941.",
      "Le crematorium I, equipe d'une chambre a gaz, pouvait incinerer 340 corps par jour.",
      "L'inscription cynique \"Arbeit macht frei\" (\"Le travail rend libre\") surmontait le portail d'entree.",
    ],
  },
  {
    number: "II",
    title: "Auschwitz II-Birkenau",
    subtitle: "Centre d'extermination",
    description:
      "Le plus grand des camps du complexe, construit a partir d'octobre 1941 a 3 km du camp principal. C'est ici que les nazis ont organise l'extermination industrielle. La majorite des victimes d'Auschwitz y ont ete assassinees.",
    details: [
      "Le camp s'etendait sur 170 hectares et comprenait plus de 300 baraquements en bois et en brique.",
      "Quatre grands crematoriums (II, III, IV et V) etaient equipes de chambres a gaz pouvant tuer jusqu'a 6 000 personnes par jour.",
      "La \"rampe de selection\" (Judenrampe puis Bahnrampe a partir de mai 1944) etait le lieu ou les deportes etaient tries : ceux juges \"inaptes\" (environ 75%) etaient envoyes directement a la mort.",
      "Le \"Kanada\" etait le nom donne aux entrepots ou les biens voles aux deportes etaient tries et stockes.",
      "Le camp des familles de Theresienstadt et le camp des familles tsiganes existaient temporairement avant que leurs occupants ne soient envoyes aux chambres a gaz.",
    ],
  },
  {
    number: "III",
    title: "Auschwitz III-Monowitz",
    subtitle: "Camp de travail force",
    description:
      "Construit en octobre 1942 pour fournir de la main-d'oeuvre forcee a l'usine de caoutchouc synthetique Buna-Werke de la societe IG Farben. Les detenus y etaient soumis a un travail epuisant dans des conditions inhumaines.",
    details: [
      "IG Farben, l'un des plus grands groupes industriels allemands, a investi plus de 700 millions de Reichsmarks dans l'usine.",
      "L'esperance de vie moyenne d'un detenu a Monowitz etait d'environ 3 mois.",
      "Les detenus juges trop faibles pour travailler etaient regulierement \"selectionnes\" et envoyes aux chambres a gaz de Birkenau.",
      "Le prix Nobel de litterature Primo Levi a ete detenu a Monowitz. Son temoignage \"Si c'est un homme\" est devenu un texte fondamental de la litterature de la Shoah.",
      "Environ 40 sous-camps supplementaires dependaient du complexe d'Auschwitz, fournissant du travail force a diverses industries allemandes.",
    ],
  },
]

const deportes = [
  {
    nom: "Feigelson",
    dateDeportation: "31 juillet 1944",
    info: "Evade d'Auschwitz le 22 janvier 1945",
    statut: "Evade",
    details:
      "Deporte a Auschwitz le 31 juillet 1944, alors que le camp fonctionnait encore a plein regime. Il a reussi l'exploit extremement rare de s'evader le 22 janvier 1945, seulement cinq jours avant la liberation du camp par l'Armee rouge. Les evasions d'Auschwitz etaient exceptionnellement dangereuses : le camp etait entoure de clotures electrifiees, de miradors et d'une zone de securite de plusieurs kilometres. Sur les 802 tentatives d'evasion documentees, seules 144 ont abouti. Son evasion en janvier 1945 a eu lieu dans le contexte chaotique de l'evacuation du camp par les nazis.",
  },
  {
    nom: "Nackache",
    dateDeportation: "20 janvier 1944",
    info: "Deporte a Auschwitz",
    statut: "Deporte",
    details:
      "Deporte a Auschwitz le 20 janvier 1944, en pleine periode d'intensification des deportations depuis la France. A cette date, le regime de Vichy collaborait activement avec les nazis pour organiser les rafles et les convois de deportation. Les Juifs de France etaient d'abord internes dans des camps de transit comme Drancy, Pithiviers ou Beaune-la-Rolande, avant d'etre achemines par trains vers les camps d'extermination en Pologne occupee.",
  },
]

const liberationEvidence = [
  "7 tonnes de cheveux humains, pretes a etre expediees pour la fabrication de tissu industriel",
  "Des centaines de milliers de vetements d'hommes, de femmes et d'enfants",
  "44 000 paires de chaussures",
  "Des montagnes de lunettes, protheses, valises et objets personnels",
  "Les ruines des chambres a gaz et crematoriums, partiellement dynamites par les SS pour effacer les preuves",
]

/* ─── Page ─── */

export default function AuschwitzPage() {
  return (
    <main>
      {/* ══════ HERO ══════ */}
      <section className="relative min-h-[85vh] flex items-end">
        <Image
          src="/images/auschwitz-gate.jpg"
          alt="Entree du camp de concentration d'Auschwitz"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-16 md:pb-24">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            1940 &mdash; 1945
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl text-foreground">
            Auschwitz
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Le plus grand camp de concentration et d{"'"}extermination nazi. Un
            lieu de memoire pour l{"'"}humanite.
          </p>
          <div className="mt-8 h-px w-24 bg-primary" />
        </div>
      </section>

      {/* ══════ INTRODUCTION ══════ */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Un crime contre l{"'"}humanite
            </h2>
            <div className="mt-4 h-px w-16 bg-primary" />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Auschwitz etait le plus grand camp de concentration et d{"'"}
              extermination mis en place par l{"'"}Allemagne nazie pendant la
              Seconde Guerre mondiale. Situe pres de la ville d{"'"}Oswiecim,
              en{" "}
              <span className="font-semibold text-foreground">
                Pologne occupee
              </span>
              , a environ 60 kilometres a l{"'"}ouest de Cracovie, il a ete
              utilise entre{" "}
              <span className="font-semibold text-foreground">
                1940 et 1945
              </span>
              .
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Des millions de personnes, principalement des{" "}
              <span className="font-semibold text-foreground">Juifs</span>{" "}
              (environ 1 million), mais aussi des prisonniers politiques
              polonais, des Roms et Sintis, des prisonniers de guerre
              sovietiques, des resistants, des homosexuels, des Temoins de
              Jehovah et d{"'"}autres groupes persecutes, y ont ete deportes
              depuis toute l{"'"}Europe.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Le camp a ete cree sur ordre de{" "}
              <span className="font-semibold text-foreground">
                Heinrich Himmler
              </span>
              , chef de la SS, et place sous le commandement de{" "}
              <span className="font-semibold text-foreground">
                Rudolf Hoss
              </span>{" "}
              de 1940 a 1943. Il est devenu l{"'"}instrument central de la{" "}
              <span className="font-semibold text-foreground">
                {'"'}Solution finale{'"'}
              </span>
              , le plan nazi d{"'"}extermination systematique des Juifs d{"'"}
              Europe.
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
          Les dates cles d{"'"}Auschwitz
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
            Trois camps, un systeme de mort
          </h2>
          <div className="mt-4 h-px w-16 bg-primary" />

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Le complexe d{"'"}Auschwitz ne se limitait pas a un seul camp. Il s
            {"'"}agissait d{"'"}un vaste reseau concentrationnaire comprenant
            trois camps principaux et plus de 40 sous-camps, formant une
            veritable{" "}
            <span className="font-semibold text-foreground">
              industrie de la mort
            </span>{" "}
            a une echelle sans precedent dans l{"'"}histoire.
          </p>

          <div className="mt-16 flex flex-col gap-12">
            {camps.map((camp) => (
              <div
                key={camp.number}
                className="group border-l-2 border-border py-6 pl-8 transition-colors hover:border-primary"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
                  <div className="flex-shrink-0">
                    <span className="font-serif text-5xl font-bold text-primary md:text-6xl">
                      {camp.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      {camp.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium uppercase tracking-widest text-primary">
                      {camp.subtitle}
                    </p>
                    <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                      {camp.description}
                    </p>
                  </div>
                </div>
                <ul className="mt-6 ml-0 flex flex-col gap-3 md:ml-24">
                  {camp.details.map((detail, i) => (
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
              src="/images/auschwitz-birkenau.jpg"
              alt="Les rails menant a l'entree d'Auschwitz-Birkenau"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-background/30" />
          </div>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            Les voies ferrees menant a l{"'"}entree d{"'"}Auschwitz
            II-Birkenau, par lesquelles des centaines de milliers de deportes
            sont arrives
          </p>
        </div>
      </section>

      {/* ══════ EXTERMINATION ══════ */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Le processus d{"'"}extermination
            </h2>
            <div className="mt-4 h-px w-16 bg-primary" />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg leading-relaxed text-muted-foreground">
              L{"'"}extermination a Auschwitz-Birkenau etait un processus
              industrialise, methodiquement organise par les SS pour assassiner
              le plus grand nombre de personnes possible dans un minimum de
              temps.
            </p>

            <div className="mt-10 flex flex-col gap-8">
              <div className="border-l-2 border-border pl-6">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  L{"'"}arrivee et la selection
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Les deportes arrivaient par trains, entasses dans des wagons a
                  bestiaux, apres des jours de voyage sans eau ni nourriture.
                  Beaucoup mouraient pendant le trajet. A l{"'"}arrivee, les
                  medecins SS, dont le tristement celebre{" "}
                  <span className="font-semibold text-foreground">
                    Josef Mengele
                  </span>
                  , procedaient a une{" "}
                  <span className="font-semibold text-foreground">
                    {'"'}selection{'"'}
                  </span>{" "}
                  : d{"'"}un geste de la main, ils decidaient qui vivrait
                  temporairement pour le travail force et qui serait assassine
                  immediatement. Environ{" "}
                  <span className="font-semibold text-foreground">
                    75 % des deportes
                  </span>{" "}
                  etaient envoyes directement aux chambres a gaz, sans meme
                  etre enregistres dans le camp.
                </p>
              </div>

              <div className="border-l-2 border-border pl-6">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Les chambres a gaz
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Les victimes etaient conduites vers ce qu{"'"}on leur
                  presentait comme des{" "}
                  <span className="font-semibold text-foreground">
                    {'"'}douches{'"'}
                  </span>
                  . On leur demandait de se deshabiller et de memoriser le
                  numero de leur portemanteau pour creer l{"'"}illusion de la
                  normalite. Les chambres a gaz, hermetiquement fermees,
                  pouvaient contenir jusqu{"'"}a 2 000 personnes. Le{" "}
                  <span className="font-semibold text-foreground">
                    Zyklon B
                  </span>
                  , un pesticide a base d{"'"}acide cyanhydrique, etait verse
                  par des ouvertures dans le plafond. La mort survenait en 15 a
                  20 minutes dans d{"'"}atroces souffrances.
                </p>
              </div>

              <div className="border-l-2 border-border pl-6">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Les crematoriums et le Sonderkommando
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Les corps etaient ensuite brules dans les{" "}
                  <span className="font-semibold text-foreground">
                    crematoriums
                  </span>
                  . Ce travail etait impose aux membres du{" "}
                  <span className="font-semibold text-foreground">
                    Sonderkommando
                  </span>
                  , des detenus (principalement juifs) forces d{"'"}accomplir
                  cette tache sous peine de mort. Ils devaient egalement
                  recuperer les dents en or, couper les cheveux des victimes et
                  trier leurs objets personnels. Ces detenus etaient eux-memes
                  regulierement assassines et remplaces pour eliminer les
                  temoins. Les quatre crematoriums de Birkenau pouvaient
                  incinerer environ{" "}
                  <span className="font-semibold text-foreground">
                    4 756 corps par jour
                  </span>
                  .
                </p>
              </div>

              <div className="border-l-2 border-border pl-6">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Les experiences medicales
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Le docteur{" "}
                  <span className="font-semibold text-foreground">
                    Josef Mengele
                  </span>
                  , surnomme l{"'"}
                  {'"'}Ange de la Mort{'"'}, menait des experiences
                  pseudo-scientifiques inhumaines sur les detenus, en
                  particulier sur les jumeaux, les personnes handicapees et les
                  Roms. D{"'"}autres medecins SS, comme Carl Clauberg et Horst
                  Schumann, pratiquaient des sterilisations forcees. Ces {'"'}
                  experiences{'"'} causaient d{"'"}atroces souffrances et la
                  mort de la plupart des victimes.
                </p>
              </div>
            </div>
          </div>
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
            Pour ceux qui echappaient a la mort immediate, la vie dans le camp
            etait un calvaire quotidien deliberement concu pour deshumaniser,
            affaiblir et, a terme, tuer les detenus. Chaque aspect de leur
            existence etait une forme de torture.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="border border-border bg-card p-8">
              <h3 className="font-serif text-xl font-bold text-foreground">
                La faim
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Famine organisee
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Les rations alimentaires etaient deliberement insuffisantes :
                environ{" "}
                <span className="font-semibold text-foreground">
                  700 calories par jour
                </span>{" "}
                (contre 2 000 necessaires). Le matin, un ersatz de cafe ; le
                midi, une soupe a base d{"'"}eau et de legumes pourris ; le
                soir, un morceau de pain rassis avec un peu de margarine. Cette
                sous-alimentation systematique conduisait les detenus a un etat
                de delabrement physique appele{" "}
                <span className="font-semibold text-foreground">
                  {'"'}Muselmann{'"'}
                </span>{" "}
                (squelettique, apathique), signe annoncant une mort prochaine.
              </p>
            </div>

            <div className="border border-border bg-card p-8">
              <h3 className="font-serif text-xl font-bold text-foreground">
                La violence
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Terreur permanente
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Les coups, les tortures et les executions arbitraires faisaient
                partie du quotidien. Les{" "}
                <span className="font-semibold text-foreground">Kapos</span>{" "}
                (detenus charges de surveiller les autres) pouvaient battre a
                mort leurs codetenus en toute impunite. Les punitions
                comprenaient le{" "}
                <span className="font-semibold text-foreground">
                  poteau de suspension
                </span>{" "}
                (les bras attaches dans le dos, le detenu etait suspendu), l
                {"'"}enfermement dans des cellules debout de 90 cm sur 90 cm,
                ou des heures d{"'"}appel immobiles par tous les temps.
              </p>
            </div>

            <div className="border border-border bg-card p-8">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Les maladies
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Epidemies endemiques
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Le typhus, la dysenterie, la tuberculose, la gale et d{"'"}
                autres maladies sevissaient en permanence en raison de la
                surpopulation, du manque d{"'"}hygiene et de la
                sous-alimentation. Les{" "}
                <span className="font-semibold text-foreground">
                  {'"'}infirmeries{'"'}
                </span>{" "}
                du camp, loin de soigner les malades, servaient souvent de lieux
                de selection : les malades juges irrecuperables etaient envoyes
                aux chambres a gaz ou tues par injection de phenol dans le
                coeur.
              </p>
            </div>

            <div className="border border-border bg-card p-8">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Le travail force
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Extermination par le travail
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                La politique de{" "}
                <span className="font-semibold text-foreground">
                  {'"'}Vernichtung durch Arbeit{'"'}
                </span>{" "}
                (extermination par le travail) visait a tirer le maximum de
                profit du travail des detenus avant leur mort. Les journees
                commencaient a 4h30 du matin et duraient 10 a 12 heures.
                Terrassement, construction, travail en usine, transport de
                materiaux : tout etait fait pour epuiser les prisonniers. Ceux
                qui s{"'"}effondraient etaient battus ou abattus.
              </p>
            </div>

            <div className="border border-border bg-card p-8 md:col-span-2">
              <h3 className="font-serif text-xl font-bold text-foreground">
                La deshumanisation
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Destruction de l{"'"}identite
              </p>
              <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
                Des l{"'"}arrivee, les detenus etaient depouilles de tout ce qui
                faisait leur identite : leurs vetements, leurs objets
                personnels, leurs cheveux. Leur nom etait remplace par un{" "}
                <span className="font-semibold text-foreground">
                  numero tatoue sur l{"'"}avant-bras
                </span>{" "}
                (une pratique specifique a Auschwitz). Ils etaient revetus d
                {"'"}un uniforme raye et portaient un triangle de couleur
                identifiant leur categorie : jaune pour les Juifs, rouge pour
                les politiques, noir pour les {'"'}asociaux{'"'}, marron pour
                les Roms, rose pour les homosexuels, violet pour les Temoins de
                Jehovah.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
            <Image
              src="/images/auschwitz-barracks.jpg"
              alt="Interieur des baraquements d'Auschwitz"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-background/20" />
          </div>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            L{"'"}interieur des baraquements du camp : des conditions de
            surpopulation et d{"'"}insalubrite extremes
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
            Un million cent mille victimes
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary" />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Les chiffres, aussi vertigineux soient-ils, ne rendent pas compte de
            l{"'"}ampleur de la tragedie. Derriere chaque nombre se trouvent des
            individus : des hommes, des femmes, des enfants, des familles
            entieres aneantes.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="border border-border bg-secondary p-8 text-center">
            <p className="font-serif text-4xl font-bold text-primary md:text-5xl">
              1,1 M
            </p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-foreground">
              Victimes totales
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Le nombre total estime de personnes assassinees a Auschwitz entre
              1940 et 1945.
            </p>
          </div>
          <div className="border border-border bg-secondary p-8 text-center">
            <p className="font-serif text-4xl font-bold text-primary md:text-5xl">
              1 M
            </p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-foreground">
              Juifs assassines
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Environ 1 million de Juifs ont ete assassines, soit environ 90 %
              de toutes les victimes du camp.
            </p>
          </div>
          <div className="border border-border bg-secondary p-8 text-center">
            <p className="font-serif text-4xl font-bold text-primary md:text-5xl">
              1,3 M
            </p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-foreground">
              Deportes au total
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Environ 1,3 million de personnes ont ete deportees a Auschwitz
              depuis toute l{"'"}Europe.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="border border-border p-6 text-center">
            <p className="font-serif text-2xl font-bold text-foreground">
              70 000
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Polonais non-juifs
            </p>
          </div>
          <div className="border border-border p-6 text-center">
            <p className="font-serif text-2xl font-bold text-foreground">
              25 000
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Roms et Sintis
            </p>
          </div>
          <div className="border border-border p-6 text-center">
            <p className="font-serif text-2xl font-bold text-foreground">
              15 000
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Prisonniers de guerre sovietiques
            </p>
          </div>
          <div className="border border-border p-6 text-center">
            <p className="font-serif text-2xl font-bold text-foreground">
              10 000 &ndash; 15 000
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Autres nationalites (Tcheques, Francais, Yougoslaves...)
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <p className="text-center leading-relaxed text-muted-foreground">
            Parmi les deportes francais, environ{" "}
            <span className="font-semibold text-foreground">
              76 000 Juifs
            </span>{" "}
            ont ete deportes de France vers les camps nazis, dont une grande
            partie vers Auschwitz. Seuls environ{" "}
            <span className="font-semibold text-foreground">2 500</span> d
            {"'"}entre eux sont revenus. Parmi eux, 11 400 enfants de moins de
            16 ans dont aucun n{"'"}est revenu.
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
            Resister a Auschwitz
          </h2>
          <div className="mt-4 h-px w-16 bg-primary" />

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Meme dans l{"'"}enfer d{"'"}Auschwitz, des actes de resistance ont
            eu lieu. Des formes diverses de courage face a une machine de mort
            qui semblait invincible.
          </p>

          <div className="mt-12 flex flex-col gap-8">
            <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Les evasions
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">
                  802 tentatives d{"'"}evasion
                </span>{" "}
                ont ete documentees, dont{" "}
                <span className="font-semibold text-foreground">
                  144 ont reussi
                </span>
                . L{"'"}une des plus celebres est celle de{" "}
                <span className="font-semibold text-foreground">
                  Rudolf Vrba et Alfred Wetzler
                </span>{" "}
                en avril 1944. Ils se sont caches pendant trois jours dans un
                tas de bois impregne d{"'"}essence de tabac pour tromper les
                chiens. Leur temoignage detaille, connu sous le nom de{" "}
                <span className="font-semibold text-foreground">
                  {'"'}Rapport Vrba-Wetzler{'"'}
                </span>
                , a ete l{"'"}un des premiers a reveler au monde l{"'"}ampleur
                de l{"'"}extermination a Birkenau.
              </p>
            </div>

            <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
              <h3 className="font-serif text-xl font-bold text-foreground">
                La revolte du Sonderkommando
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Le{" "}
                <span className="font-semibold text-foreground">
                  7 octobre 1944
                </span>
                , les membres du Sonderkommando se sont souleves. Des femmes
                detenues a l{"'"}usine d{"'"}armement{" "}
                <span className="font-semibold text-foreground">
                  Union-Werke
                </span>
                , notamment{" "}
                <span className="font-semibold text-foreground">
                  Roza Robota, Ella Gartner, Esther Wajcblum et Regina
                  Safirsztajn
                </span>
                , avaient fait passer clandestinement de la poudre explosive.
                Les insurges ont reussi a faire exploser le crematorium IV et a
                tuer trois SS. Les quatre femmes ont ete arretees, torturees et
                pendues publiquement en janvier 1945.
              </p>
            </div>

            <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Temoigner et documenter
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Plusieurs membres du Sonderkommando ont cache des manuscrits et
                des photographies en les enterrant pres des crematoriums, au
                peril de leur vie. Ces documents, retrouves apres la guerre,
                sont parmi les temoignages les plus poignants de l{"'"}
                Holocauste. Les{" "}
                <span className="font-semibold text-foreground">
                  quatre photographies prises clandestinement
                </span>{" "}
                en aout 1944 par un membre du Sonderkommando (probablement{" "}
                <span className="font-semibold text-foreground">
                  Alberto Errera
                </span>
                ) sont les seules images connues du processus d{"'"}
                extermination en cours.
              </p>
            </div>

            <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
              <h3 className="font-serif text-xl font-bold text-foreground">
                La solidarite quotidienne
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                La resistance, c{"'"}etait aussi les petits gestes du quotidien
                : partager sa maigre ration avec un compagnon plus faible,
                soigner un malade en cachette, preserver un semblant d{"'"}
                humanite a travers la priere, la poesie, le chant ou l{"'"}
                enseignement clandestin aux enfants. Le simple fait de rester
                humain face a la barbarie constituait un acte de resistance.{" "}
                <span className="font-semibold text-foreground">
                  Primo Levi
                </span>{" "}
                ecrira : {'"'}Un pays est considere comme d{"'"}autant plus
                civilise que les lois y sont plus sages et plus justes, que
                chacun y est davantage empeche d{"'"}opprimer son prochain.
                {'"'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ DEPORTES ══════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Temoignages de vie
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Des destins brises
          </h2>
          <div className="mt-4 h-px w-16 bg-primary" />

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Derriere les chiffres, il y a des vies. Chaque deportee, chaque
            detenu etait une personne avec une famille, des espoirs, un avenir
            vole. Voici les parcours de deux d{"'"}entre eux.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {deportes.map((deporte) => (
              <div
                key={deporte.nom}
                className="border border-border bg-card p-8 transition-colors hover:border-primary"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    {deporte.nom}
                  </h3>
                  <span
                    className={`inline-block rounded-sm px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                      deporte.statut === "Evade"
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {deporte.statut}
                  </span>
                </div>

                <div className="mt-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-4 bg-primary" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">
                        Date de deportation
                      </p>
                      <p className="mt-1 text-base font-medium text-foreground">
                        {deporte.dateDeportation}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="h-px w-4 bg-primary" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">
                        Parcours
                      </p>
                      <p className="mt-1 text-base font-medium text-foreground">
                        {deporte.info}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {deporte.details}
                  </p>
                </div>
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
                27 janvier 1945
              </span>
              , les soldats de la 322e division d{"'"}infanterie de l{"'"}Armee
              rouge liberent le camp d{"'"}Auschwitz. Ce qu{"'"}ils decouvrent
              depasse l{"'"}entendement humain.
            </p>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              Environ{" "}
              <span className="font-semibold text-foreground">
                7 000 survivants
              </span>{" "}
              sont encore dans le camp, la plupart dans un etat de delabrement
              extreme : squelettiques, malades, mourants. Les SS avaient tente
              d{"'"}evacuer la majorite des detenus lors des{" "}
              <span className="font-semibold text-foreground">
                marches de la mort
              </span>{" "}
              lancees le 17 janvier 1945 : environ 56 000 prisonniers ont ete
              forces de marcher dans le froid glacial de l{"'"}hiver polonais,
              vers d{"'"}autres camps a l{"'"}ouest. Des milliers sont morts d
              {"'"}epuisement, de froid ou ont ete abattus par les SS en chemin.
            </p>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              Les soldats sovietiques decouvrent aussi les preuves du crime :
            </p>

            <ul className="mt-4 flex flex-col gap-3">
              {liberationEvidence.map((item, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-l-2 border-primary pl-6">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Les proces
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Apres la guerre, les responsables nazis ont ete juges lors du{" "}
                <span className="font-semibold text-foreground">
                  proces de Nuremberg
                </span>{" "}
                (1945-1946) puis lors des{" "}
                <span className="font-semibold text-foreground">
                  proces d{"'"}Auschwitz
                </span>{" "}
                a Francfort (1963-1965). Rudolf Hoss, premier commandant d{"'"}
                Auschwitz, a ete condamne a mort et execute en 1947, pendu sur
                le site meme du camp. Cependant, de nombreux responsables ont
                echappe a la justice, certains ayant fui en Amerique du Sud
                grace aux{" "}
                <span className="font-semibold text-foreground">
                  filieres d{"'"}exfiltration
                </span>{" "}
                nazies (les {'"'}ratlines{'"'}).
              </p>
            </div>

            <div className="mt-8 border-l-2 border-primary pl-6">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Le Musee-Memorial
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                En{" "}
                <span className="font-semibold text-foreground">1947</span>, le
                site d{"'"}Auschwitz est transforme en musee d{"'"}Etat par le
                gouvernement polonais. En{" "}
                <span className="font-semibold text-foreground">1979</span>, il
                est inscrit au patrimoine mondial de l{"'"}UNESCO. Aujourd{"'"}
                hui, le{" "}
                <span className="font-semibold text-foreground">
                  Musee d{"'"}Etat d{"'"}Auschwitz-Birkenau
                </span>{" "}
                accueille plus de 2 millions de visiteurs par an. Le{" "}
                <span className="font-semibold text-foreground">
                  27 janvier
                </span>{" "}
                a ete institue Journee internationale de commemoration en
                memoire des victimes de l{"'"}Holocauste par l{"'"}ONU en 2005.
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
            Auschwitz est devenu le symbole le plus fort de la Shoah et de la
            barbarie nazie. Aujourd{"'"}hui, c{"'"}est un lieu de memoire, pour
            rappeler ce crime immense et pour que de telles atrocites ne se
            reproduisent jamais.
          </p>

          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Le{" "}
            <span className="font-semibold text-foreground">27 janvier</span>,
            date anniversaire de la liberation d{"'"}Auschwitz, est desormais la{" "}
            <span className="font-semibold text-foreground">
              Journee internationale dediee a la memoire des victimes de l{"'"}
              Holocauste
            </span>{" "}
            (ONU, 2005). En France, la Journee nationale de la deportation est
            celebree le dernier dimanche d{"'"}avril.
          </p>

          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Se souvenir, c{"'"}est comprendre que le genocide n{"'"}est pas un
            accident de l{"'"}histoire mais le resultat d{"'"}une ideologie de
            haine, de la deshumanisation progressive de l{"'"}autre, de l{"'"}
            indifference collective et de la lachete politique. C{"'"}est notre
            responsabilite de transmettre cette memoire aux generations futures.
          </p>

          <blockquote className="mx-auto mt-12 max-w-lg border-l-2 border-primary py-4 pl-6 text-left">
            <p className="font-serif text-xl italic leading-relaxed text-foreground">
              {'"'}Ceux qui ne se souviennent pas du passe sont condamnes a le
              repeter.{'"'}
            </p>
            <footer className="mt-3 text-sm text-muted-foreground">
              &mdash; George Santayana
            </footer>
          </blockquote>

          <blockquote className="mx-auto mt-8 max-w-lg border-l-2 border-primary py-4 pl-6 text-left">
            <p className="font-serif text-xl italic leading-relaxed text-foreground">
              {'"'}Si l{"'"}echo de leur voix faiblit, nous perirons.{'"'}
            </p>
            <footer className="mt-3 text-sm text-muted-foreground">
              &mdash; Paul Eluard
            </footer>
          </blockquote>

          <blockquote className="mx-auto mt-8 max-w-lg border-l-2 border-primary py-4 pl-6 text-left">
            <p className="font-serif text-xl italic leading-relaxed text-foreground">
              {'"'}Le bourreau tue toujours deux fois, la seconde fois par l
              {"'"}oubli.{'"'}
            </p>
            <footer className="mt-3 text-sm text-muted-foreground">
              &mdash; Elie Wiesel, survivant d{"'"}Auschwitz et prix Nobel de
              la paix
            </footer>
          </blockquote>

          <div className="mx-auto mt-12 h-px w-24 bg-primary" />

          <p className="mt-8 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Plus de 1,1 million de victimes &mdash; N{"'"}oublions jamais
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

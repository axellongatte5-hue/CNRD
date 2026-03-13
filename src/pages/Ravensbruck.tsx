import Image from "next/image"

export default function RavensbruckPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ══════ HERO ══════ */}
      <section className="relative flex min-h-[85vh] items-end">
        <Image
          src="/images/ravensbruck-gate.jpg"
          alt="Entree du camp de Ravensbruck"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-16 md:pb-24">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Allemagne &middot; 1939-1945
          </p>
          <h1 className="mt-4 font-serif text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Ravensbruck
          </h1>
          <div className="mt-6 h-px w-24 bg-primary" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Le plus grand camp de concentration pour femmes du Troisieme Reich.
            Plus de 130 000 detenues. Un lieu de terreur, d{"'"}exploitation et
            d{"'"}experimentation medicale.
          </p>
        </div>
      </section>

      {/* ══════ INTRODUCTION ══════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="md:flex md:gap-16">
            <div className="md:w-1/3">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
                Presentation
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
                Le camp des femmes
              </h2>
              <div className="mt-4 h-px w-16 bg-primary" />
            </div>
            <div className="mt-8 md:mt-0 md:w-2/3">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Ravensbruck etait le plus grand camp de concentration pour femmes
                du Reich, et le deuxieme plus grand dans le systeme concentrationnaire
                en general, apres Auschwitz-Birkenau. Situe a 90 km au nord de Berlin,
                pres du lac Schwedt dans le Mecklembourg, le camp fut construit en 1938-1939
                par 500 detenus transferes de Sachsenhausen.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Les premieres prisonnieres, environ 900 femmes, arriverent en mai 1939,
                transferees depuis le camp de Lichtenburg en Saxe. Le camp etait concu
                pour detenir des femmes considerees comme {"\""}indesirables{"\""}
                par le regime nazi : opposantes politiques, resistantes, Temoins de Jehovah,
                {"\""}asociales{"\""}, Roms, Juives et prisonnieres de guerre.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Un camp annexe pour hommes fut cree en avril 1941, et un camp pour
                adolescentes, l{"'"}Uckermark, ouvrit en juin 1942. Ravensbruck devint
                ainsi un complexe concentrationnaire majeur avec plus de 70 Kommandos
                exterieurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ CHRONOLOGIE ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Histoire
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Chronologie du camp
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-primary" />
          </div>

          <div className="relative mt-16">
            <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />

            {[
              {
                date: "Novembre 1938",
                title: "Construction du camp",
                desc: "500 detenus de Sachsenhausen construisent le camp pres du lac Schwedt.",
              },
              {
                date: "Mai 1939",
                title: "Premieres detenues",
                desc: "Arrivee de 900 femmes transferees du camp de Lichtenburg.",
              },
              {
                date: "Avril 1941",
                title: "Camp annexe pour hommes",
                desc: "Creation d'un camp separe pour les detenus masculins.",
              },
              {
                date: "Juin 1942",
                title: "Camp de l'Uckermark",
                desc: "Ouverture d'un camp pour adolescentes et jeunes femmes.",
              },
              {
                date: "Ete 1942",
                title: "Experiences medicales",
                desc: "Debut des experimentations sur les prisonnieres polonaises.",
              },
              {
                date: "Fin 1942",
                title: "10 000 detenues",
                desc: "Le camp atteint 10 000 prisonnieres.",
              },
              {
                date: "Janvier 1944",
                title: "Chambre a gaz",
                desc: "Installation d'une chambre a gaz provisoire.",
              },
              {
                date: "Janvier 1945",
                title: "50 000 detenues",
                desc: "Surpopulation extreme avec l'afflux des evacuations.",
              },
              {
                date: "Avril 1945",
                title: "Evacuations Croix-Rouge",
                desc: "La Croix-Rouge suedoise et danoise evacue des milliers de detenues.",
              },
              {
                date: "30 avril 1945",
                title: "Liberation",
                desc: "L'Armee rouge libere les dernieres 3 500 detenues.",
              },
            ].map((event, i) => (
              <div
                key={i}
                className={`relative mb-12 flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div
                    className={`${
                      i % 2 === 0 ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <p className="text-sm font-semibold text-primary">
                      {event.date}
                    </p>
                    <h3 className="mt-1 font-serif text-xl font-bold text-foreground">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {event.desc}
                    </p>
                  </div>
                </div>
                <div className="absolute left-4 top-1 flex h-3 w-3 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                  <span className="h-3 w-3 rounded-full border-2 border-primary bg-background" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ STRUCTURE DU CAMP ══════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Organisation
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Structure du complexe
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-primary" />
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/ravensbruck-camp.jpg"
                alt="Vue du camp de Ravensbruck"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-background/20" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Le camp principal
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Le camp principal pour femmes comprenait 32 baraques d{"'"}habitation,
                des ateliers de travail, un bunker disciplinaire (le {"\""}Zellenbau{"\""})
                et une infirmerie tristement celebre pour les experimentations medicales.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "32 baraques pour les detenues",
                  "Ateliers Siemens et industries textiles",
                  "Bunker de punition (Zellenbau)",
                  "Infirmerie (Revier) et bloc d'experimentation",
                  "Crematorium construit en 1943",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="border border-border bg-card p-8 transition-colors hover:border-primary">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Camp des hommes
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Cree en avril 1941, ce camp annexe accueillait des detenus masculins
                utilises pour les travaux les plus penibles : construction, carrieres,
                et entretien du camp principal.
              </p>
            </div>
            <div className="border border-border bg-card p-8 transition-colors hover:border-primary">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Camp de l{"'"}Uckermark
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Ce camp pour adolescentes, ouvert en juin 1942, enfermait des jeunes
                filles considerees comme {"\""}delinquantes{"\""}. En 1945, il devint
                un camp d{"'"}extermination pour les detenues jugees inaptes au travail.
              </p>
            </div>
            <div className="border border-border bg-card p-8 transition-colors hover:border-primary">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Kommandos exterieurs
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Plus de 70 Kommandos de travail etaient rattaches a Ravensbruck,
                disperses dans toute l{"'"}Allemagne. Les detenues travaillaient
                pour Siemens, BMW, Daimler-Benz et l{"'"}industrie de guerre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ EXPERIENCES MEDICALES ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="md:flex md:gap-16">
            <div className="md:w-1/3">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
                L{"'"}horreur
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
                Experimentations medicales
              </h2>
              <div className="mt-4 h-px w-16 bg-primary" />
            </div>
            <div className="mt-8 md:mt-0 md:w-2/3">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Les medecins SS soumirent les prisonnieres de Ravensbruck a des
                experiences medicales d{"'"}une cruaute inouie, violant tous les
                principes de l{"'"}ethique medicale. Ces experimentations furent
                menees principalement sur des detenues polonaises, surnommees
                les {"\""}Lapins{"\""}  ({"\""}<em>Kaninchen</em>{"\""}).
              </p>

              <div className="mt-8 space-y-6">
                <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Experiences sur les blessures
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    Les medecins infligeaient deliberement des blessures aux detenues
                    puis testaient des traitements avec des substances chimiques
                    (sulfamides) pour prevenir les infections. Beaucoup moururent
                    ou resterent handicapees a vie.
                  </p>
                </div>

                <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Greffes osseuses
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    Des experiences de transplantation et de regeneration osseuse
                    furent menees sans anesthesie adequate. Les medecins prelevaient
                    des os sur certaines detenues pour les greffer sur d{"'"}autres.
                  </p>
                </div>

                <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Sterilisations forcees
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    Des centaines de femmes Roms et d{"'"}autres groupes furent
                    sterilisees de force, dans le cadre des politiques eugenistes
                    nazies visant a {"\""}purifier{"\""}  la race.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-l-2 border-primary py-4 pl-6">
                <p className="font-serif text-xl italic leading-relaxed text-foreground">
                  {"\""} Nous avons ete traitees comme des cobayes, pas comme des
                  etres humains. Mais nous avons survecu pour temoigner. {"\""} 
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  &mdash; Temoignage d{"'"}une survivante polonaise
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ CONDITIONS DE VIE ══════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Survie
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Conditions de detention
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-primary" />
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Travail force",
                desc: "Les detenues travaillaient 12 heures par jour dans les ateliers Siemens, les usines textiles ou les Kommandos exterieurs. L'epuisement tuait autant que la faim.",
              },
              {
                title: "Faim et maladie",
                desc: "Les rations etaient insuffisantes : soupe claire et pain noir. La dysenterie, le typhus et la tuberculose se propageaient dans les baraques surpeuplees.",
              },
              {
                title: "Selections",
                desc: "Les SS organisaient regulierement des \"selections\" : les detenues jugees trop faibles pour travailler etaient isolees puis executees ou envoyees a la chambre a gaz.",
              },
              {
                title: "Violence quotidienne",
                desc: "Les gardiennes SS (Aufseherinnen) infligeaient des sevices constants : coups, humiliations, punitions arbitraires. Certaines etaient connues pour leur cruaute extreme.",
              },
              {
                title: "Surpopulation",
                desc: "En janvier 1945, le camp comptait 50 000 detenues pour une capacite prevue de 6 000. Les femmes dormaient a plusieurs par couchette, dans des conditions sanitaires desastreuses.",
              },
              {
                title: "Executions",
                desc: "Des milliers de detenues furent executees par balle, pendaison ou dans la chambre a gaz installee fin 1944. Les corps etaient brules dans le crematorium.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-border bg-card p-8 transition-colors hover:border-primary"
              >
                <h3 className="font-serif text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ STATISTIQUES ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Chiffres
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              L{"'"}ampleur du crime
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-primary" />
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-primary md:text-5xl">
                132 000
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                Femmes deportees
              </p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-primary md:text-5xl">
                20 000
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                Hommes detenus
              </p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-primary md:text-5xl">
                ~50 000
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                Victimes estimees
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            <div className="border border-border bg-card p-6 text-center">
              <p className="font-serif text-2xl font-bold text-foreground">
                40+
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                Nationalites
              </p>
            </div>
            <div className="border border-border bg-card p-6 text-center">
              <p className="font-serif text-2xl font-bold text-foreground">
                70+
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                Kommandos
              </p>
            </div>
            <div className="border border-border bg-card p-6 text-center">
              <p className="font-serif text-2xl font-bold text-foreground">
                8 000
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                Francaises deportees
              </p>
            </div>
            <div className="border border-border bg-card p-6 text-center">
              <p className="font-serif text-2xl font-bold text-foreground">
                881
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                Gardiennes SS
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-center font-serif text-xl font-bold text-foreground">
              Principales nationalites
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                { nat: "Polonaises", nb: "~40 000" },
                { nat: "Sovietiques", nb: "~25 000" },
                { nat: "Allemandes et Autrichiennes", nb: "~18 000" },
                { nat: "Hongroises", nb: "~10 000" },
                { nat: "Francaises", nb: "~8 000" },
                { nat: "Tchèques et Slovaques", nb: "~5 000" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b border-border py-3"
                >
                  <span className="text-muted-foreground">{item.nat}</span>
                  <span className="font-semibold text-foreground">{item.nb}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ RESISTANCE ══════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="md:flex md:gap-16">
            <div className="md:w-1/3">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
                Courage
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
                Resister a Ravensbruck
              </h2>
              <div className="mt-4 h-px w-16 bg-primary" />
            </div>
            <div className="mt-8 md:mt-0 md:w-2/3">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Malgre les conditions terrifiantes, les detenues de Ravensbruck
                developperent des formes de resistance qui permirent a certaines
                de survivre et de temoigner.
              </p>

              <div className="mt-8 space-y-6">
                <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Protection des {"\""}Lapins{"\""} 
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    Les detenues organiserent la protection des victimes des
                    experimentations medicales, les cachant lors des selections
                    et echangeant leurs numeros pour les sauver.
                  </p>
                </div>

                <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Sabotage industriel
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    Dans les ateliers Siemens et les usines d{"'"}armement,
                    les detenues sabotaient discretement la production :
                    pieces defectueuses, machines mal assemblees, ralentissement du travail.
                  </p>
                </div>

                <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Solidarite et entraide
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    Les femmes s{"'"}organisaient par nationalite ou par affinite
                    politique. Elles partageaient nourriture et vetements,
                    soignaient les malades, et maintenaient le moral par des
                    activites culturelles clandestines.
                  </p>
                </div>

                <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Temoignages clandestins
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    Certaines detenues parvinrent a documenter les crimes nazis,
                    notamment les experimentations medicales, cachant leurs notes
                    pour pouvoir temoigner apres la guerre.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ DEPORTEES ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Memoire
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Des destins brises
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-primary" />
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Parmi les dizaines de milliers de femmes deportees a Ravensbruck,
              voici les parcours de deux d{"'"}entre elles.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="border border-border bg-card p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Angele Rouzaud
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Resistante francaise
                  </p>
                </div>
                <span className="rounded-sm bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Deportee
                </span>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">
                    Date d{"'"}arrivee : inconnue
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">
                    Resistante arretee pour son engagement contre l{"'"}occupant
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">
                    Deportee au camp de Ravensbruck
                  </span>
                </div>
              </div>
            </div>

            <div className="border border-border bg-card p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Suzanne Lestage
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Resistante francaise
                  </p>
                </div>
                <span className="rounded-sm bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  Liberee
                </span>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">
                    Arrivee : 14 octobre 1944
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">
                    Liberation : 22 avril 1945 par la Croix-Rouge
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">
                    Evacuee par les bus blancs de la Croix-Rouge suedoise
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">
                    6 mois de detention dans des conditions inhumaines
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ LIBERATION ══════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="md:flex md:gap-16">
            <div className="md:w-1/3">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
                Avril 1945
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
                Liberation et evacuations
              </h2>
              <div className="mt-4 h-px w-16 bg-primary" />
            </div>
            <div className="mt-8 md:mt-0 md:w-2/3">
              <p className="text-lg leading-relaxed text-muted-foreground">
                La liberation de Ravensbruck fut un processus complexe, marque
                par les evacuations de la Croix-Rouge et la fuite des SS devant
                l{"'"}avancee de l{"'"}Armee rouge.
              </p>

              <div className="mt-8 space-y-6">
                <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Les bus blancs
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    En avril 1945, le comte Folke Bernadotte negocia avec Himmler
                    l{"'"}evacuation de milliers de detenues scandinaves et
                    d{"'"}autres nationalites par la Croix-Rouge suedoise.
                    Ces {"\""}bus blancs{"\""}  sauverent environ 7 500 femmes.
                  </p>
                </div>

                <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Marches de la mort
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    A partir du 27 avril 1945, les SS evacuerent les detenues
                    restantes vers l{"'"}ouest. Ces marches forcees, sans
                    nourriture ni repos, causerent la mort de milliers de femmes
                    epuisees.
                  </p>
                </div>

                <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Liberation par l{"'"}Armee rouge
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    Le 30 avril 1945, les soldats sovietiques libererent les
                    3 500 detenues restees au camp, pour la plupart trop malades
                    pour marcher. Elles etaient les temoins survivants de
                    l{"'"}horreur.
                  </p>
                </div>
              </div>

              <div className="mt-8 relative aspect-[16/9] overflow-hidden rounded-sm">
                <Image
                  src="/images/ravensbruck-memorial.jpg"
                  alt="Memorial de Ravensbruck"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-background/20" />
              </div>
              <p className="mt-3 text-center text-sm text-muted-foreground">
                Le memorial de Ravensbruck, lieu de recueillement et de memoire
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ DEVOIR DE MEMOIRE ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Ne jamais oublier
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Devoir de memoire
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary" />

          <div className="mx-auto mt-12 max-w-2xl border-l-2 border-primary py-4 pl-6 text-left">
            <p className="font-serif text-xl italic leading-relaxed text-foreground">
              {"\""} A Ravensbruck, j{"'"}ai vu ce dont les etres humains sont
              capables dans le mal absolu. Mais j{"'"}ai aussi vu ce dont les
              femmes sont capables dans la solidarite et le courage. {"\""} 
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              &mdash; Germaine Tillion, ethnologue et resistante, survivante de Ravensbruck
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-2xl border-l-2 border-primary py-4 pl-6 text-left">
            <p className="font-serif text-xl italic leading-relaxed text-foreground">
              {"\""} Ravensbruck represente la memoire specifique des femmes
              dans la deportation. Leur souffrance, leur resistance, leur
              dignite meritent d{"'"}etre transmises aux generations futures. {"\""} 
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              &mdash; Anise Postel-Vinay, resistante et survivante
            </p>
          </div>

          <p className="mt-12 text-lg leading-relaxed text-muted-foreground">
            Aujourd{"'"}hui, le site de Ravensbruck est un memorial et un musee.
            Il perpetue la memoire des dizaines de milliers de femmes qui y ont
            souffert et qui y sont mortes, et rappelle l{"'"}importance de defendre
            les droits humains et la dignite de chaque personne.
          </p>

          <div className="mx-auto mt-8 h-px w-24 bg-primary" />

          <p className="mt-8 font-serif text-2xl font-bold text-foreground">
            ~50 000 victimes
          </p>
          <p className="mt-2 text-muted-foreground">
            Pour qu{"'"}elles ne soient jamais oubliees
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

          <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            <a
              href="/"
              className="group border border-border bg-card p-4 transition-colors hover:border-primary"
            >
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
                Pologne
              </p>
              <h3 className="mt-1 font-serif text-base font-bold text-foreground">
                Auschwitz
              </h3>
              <p className="mt-3 text-xs font-medium text-primary group-hover:underline">
                Voir &rarr;
              </p>
            </a>

            <a
              href="/buchenwald"
              className="group border border-border bg-card p-4 transition-colors hover:border-primary"
            >
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
                Allemagne
              </p>
              <h3 className="mt-1 font-serif text-base font-bold text-foreground">
                Buchenwald
              </h3>
              <p className="mt-3 text-xs font-medium text-primary group-hover:underline">
                Voir &rarr;
              </p>
            </a>

            <a
              href="/mauthausen"
              className="group border border-border bg-card p-4 transition-colors hover:border-primary"
            >
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
                Autriche
              </p>
              <h3 className="mt-1 font-serif text-base font-bold text-foreground">
                Mauthausen
              </h3>
              <p className="mt-3 text-xs font-medium text-primary group-hover:underline">
                Voir &rarr;
              </p>
            </a>

            <a
              href="/neuengamme"
              className="group border border-border bg-card p-4 transition-colors hover:border-primary"
            >
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
                Allemagne
              </p>
              <h3 className="mt-1 font-serif text-base font-bold text-foreground">
                Neuengamme
              </h3>
              <p className="mt-3 text-xs font-medium text-primary group-hover:underline">
                Voir &rarr;
              </p>
            </a>

            <a
              href="/royallieu"
              className="group border border-border bg-card p-4 transition-colors hover:border-primary"
            >
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
                France
              </p>
              <h3 className="mt-1 font-serif text-base font-bold text-foreground">
                Royallieu
              </h3>
              <p className="mt-3 text-xs font-medium text-primary group-hover:underline">
                Voir &rarr;
              </p>
            </a>

            <a
              href="/drancy"
              className="group border border-border bg-card p-4 transition-colors hover:border-primary"
            >
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
                France
              </p>
              <h3 className="mt-1 font-serif text-base font-bold text-foreground">
                Drancy
              </h3>
              <p className="mt-3 text-xs font-medium text-primary group-hover:underline">
                Voir &rarr;
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

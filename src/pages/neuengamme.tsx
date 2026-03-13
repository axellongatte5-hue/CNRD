import Image from "next/image"

export default function NeuengammePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ══════ HERO ══════ */}
      <section className="relative flex min-h-[85vh] items-end">
        <Image
          src="/images/neuengamme-gate.jpg"
          alt="Entree du camp de Neuengamme"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-16 md:pb-24">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Allemagne &middot; 1938-1945
          </p>
          <h1 className="mt-4 font-serif text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Neuengamme
          </h1>
          <div className="mt-6 h-px w-24 bg-primary" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Camp de concentration pres de Hambourg, centre de la briqueterie SS
            et coeur d{"'"}un vaste reseau de plus de 85 Kommandos exterieurs.
          </p>
        </div>
      </section>

      {/* ══════ INTRODUCTION ══════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col gap-8 md:flex-row md:gap-16">
            <div className="md:w-1/3">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
                Contexte historique
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
                Un camp au service de l{"'"}industrie SS
              </h2>
              <div className="mt-4 h-px w-16 bg-primary" />
            </div>
            <div className="space-y-6 md:w-2/3">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Le KL Neuengamme se situe a environ 25 kilometres au sud-est de
                Hambourg, sur la rive droite de l{"'"}Elbe, dans une region
                marecageuse et plate. Le commandement SS decide d{"'"}y reactiver
                une briqueterie desaffectee et d{"'"}implanter un camp de
                concentration.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Le premier Kommando de travail, constitue d{"'"}une centaine de
                detenus de droit commun venant du KL Sachsenhausen, arrive sur
                le site le 13 decembre 1938. Ce camp deviendra l{"'"}un des plus
                grands complexes concentrationnaires du Reich.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                La briqueterie Deutsche Erd- und Steinwerke (DEST), entreprise
                SS, exploite les detenus pour produire des millions de briques
                destinees aux projets architecturaux megalomanes d{"'"}Albert
                Speer pour la reconstruction de Hambourg.
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
              Chronologie
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Dates cles
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-primary" />
          </div>

          <div className="relative mt-16">
            <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />

            {[
              { date: "13 decembre 1938", text: "Arrivee du premier Kommando de 100 detenus venant de Sachsenhausen pour reactiver la briqueterie." },
              { date: "Juin 1940", text: "Neuengamme devient un camp principal autonome, detache de Sachsenhausen." },
              { date: "1942", text: "Extension massive du camp. La briqueterie produit jusqu'a 2 millions de briques par mois." },
              { date: "1943", text: "Creation des premiers Kommandos exterieurs pour l'industrie de guerre allemande." },
              { date: "1944", text: "Plus de 20 Kommandos de femmes sont crees et rattaches administrativement a Neuengamme." },
              { date: "Avril 1945", text: "Debut des evacuations. Les detenus sont envoyes vers Lubeck et les navires Cap Arcona et Thielbek." },
              { date: "3 mai 1945", text: "Tragedie de la baie de Lubeck : les navires sont bombardes par la RAF, tuant plus de 7 000 detenus." },
              { date: "4 mai 1945", text: "Les troupes britanniques liberent le camp, vide de ses prisonniers." },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative mb-12 flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2" />
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
                  }`}
                >
                  <p className="text-sm font-semibold text-primary">{item.date}</p>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
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

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
              <Image
                src="/images/neuengamme-brickworks.jpg"
                alt="La briqueterie de Neuengamme"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-background/20" />
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Le camp central
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  Camp exclusivement masculin jusqu{"'"}a la fin. Les detenus
                  travaillent principalement a la briqueterie et au creusement
                  de canaux. Capacite maximale : plus de 12 000 prisonniers.
                </p>
              </div>

              <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  La briqueterie DEST
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  Coeur economique du camp. Les detenus extraient l{"'"}argile
                  des marais, fabriquent et transportent les briques dans des
                  conditions epuisantes. Le travail force cause des milliers
                  de morts.
                </p>
              </div>

              <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Les Kommandos exterieurs
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  Plus de 85 Kommandos disperses dans le nord de l{"'"}Allemagne.
                  Les detenus travaillent pour l{"'"}industrie de guerre :
                  chantiers navals, usines d{"'"}armement, deblaiement apres
                  les bombardements.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="border border-border bg-card p-8 transition-colors hover:border-primary">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Kommandos de femmes
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Plus de 20 Kommandos crees a partir de 1944",
                  "13 500 femmes deportees au total",
                  "Travail dans les usines d'armement",
                  "Fabrication de masques a gaz",
                  "Conditions aussi brutales que pour les hommes",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-border bg-card p-8 transition-colors hover:border-primary">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Le canal Dove-Elbe
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Projet pharaonique de canalisation",
                  "Creusement a la main dans les marais",
                  "Conditions de travail meurtrieres",
                  "Travail dans l'eau glacee en hiver",
                  "Des centaines de morts par epuisement",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-border bg-card p-8 transition-colors hover:border-primary">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Industrie de guerre
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Chantiers navals Blohm & Voss",
                  "Production de sous-marins U-Boot",
                  "Usines Messerschmitt et Heinkel",
                  "Deblaiement apres les bombardements allies",
                  "Construction de bunkers et fortifications",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ CONDITIONS DE VIE ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col gap-8 md:flex-row md:gap-16">
            <div className="md:w-1/3">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
                La vie au camp
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
                Conditions inhumaines
              </h2>
              <div className="mt-4 h-px w-16 bg-primary" />
            </div>
            <div className="md:w-2/3">
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
                <Image
                  src="/images/neuengamme-barracks.jpg"
                  alt="Baraquements de Neuengamme"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-background/20" />
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Les baraquements du camp de Neuengamme
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Travail force meurtrier",
                desc: "Le travail dans les marais et a la briqueterie est particulierement eprouvant. Les detenus portent des charges enormes dans la boue, sans protection contre le froid et l'humidite. Les journees de travail durent 12 heures ou plus.",
              },
              {
                title: "Le climat hostile",
                desc: "La region marecageuse au bord de l'Elbe est balayee par les vents du nord. L'humidite permanente, le froid hivernal et les conditions sanitaires deplorables favorisent les maladies : typhus, dysenterie, tuberculose.",
              },
              {
                title: "Famine organisee",
                desc: "Les rations sont volontairement insuffisantes : soupe claire, ersatz de pain. Les detenus souffrent de malnutrition severe. Beaucoup meurent de faim ou d'epuisement apres quelques semaines.",
              },
              {
                title: "Violence quotidienne",
                desc: "Les SS et les Kapos exercent une violence constante : bastonnades, pendaisons, executions arbitraires. Les experiences medicales sont pratiquees sur des detenus, notamment sur la tuberculose.",
              },
              {
                title: "Surpopulation",
                desc: "Le camp, concu pour quelques milliers de personnes, en contient parfois plus de 12 000. Les baraquements sont surpeuples, l'hygiene impossible, les epidemies frequentes.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-border bg-card p-8 transition-colors hover:border-primary"
              >
                <h3 className="font-serif text-xl font-bold text-foreground">
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
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Bilan
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              L{"'"}ampleur du crime
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-primary" />
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-primary md:text-5xl">
                106 000
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                Detenus au total
              </p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-primary md:text-5xl">
                42 900
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                Victimes documentees
              </p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-primary md:text-5xl">
                85+
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                Kommandos exterieurs
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            <div className="border border-border bg-card p-6 text-center">
              <p className="font-serif text-2xl font-bold text-foreground">13 500</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                Femmes deportees
              </p>
            </div>
            <div className="border border-border bg-card p-6 text-center">
              <p className="font-serif text-2xl font-bold text-foreground">7 000+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                Morts baie de Lubeck
              </p>
            </div>
            <div className="border border-border bg-card p-6 text-center">
              <p className="font-serif text-2xl font-bold text-foreground">28</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                Nationalites
              </p>
            </div>
            <div className="border border-border bg-card p-6 text-center">
              <p className="font-serif text-2xl font-bold text-foreground">11 500</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                Deportes francais
              </p>
            </div>
          </div>

          <div className="mt-12 border-l-2 border-primary py-4 pl-6">
            <p className="font-serif text-lg italic leading-relaxed text-foreground">
              {'"'}Plus de 42 900 deces sont documentes, mais le nombre reel de
              victimes est certainement superieur. Des milliers de detenus sont
              morts lors des evacuations et dans la tragedie de la baie de
              Lubeck.{'"'}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              &mdash; Memorial de Neuengamme
            </p>
          </div>
        </div>
      </section>

      {/* ══════ TRAGEDIE DE LA BAIE DE LUBECK ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              3 mai 1945
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              La tragedie de la baie de Lubeck
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-primary" />
          </div>

          <div className="mt-12 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              A partir de mars 1945, l{"'"}avance des Allies contraint les SS a
              evacuer les camps de concentration. Les Kommandos exterieurs, puis
              le camp central de Neuengamme sont evacues au cours de {'"'}marches
              de la mort{'"'} et de transports meurtriers.
            </p>
            <p>
              Des milliers de detenus sont entasses sur des navires ancres dans
              la baie de Lubeck : le Cap Arcona, le Thielbek et l{"'"}Athen. Le
              3 mai 1945, deux jours avant la fin de la guerre, la Royal Air
              Force bombarde ces navires, ignorant qu{"'"}ils transportent des
              prisonniers des camps.
            </p>
            <p>
              Plus de 7 000 detenus perissent dans cette catastrophe, l{"'"}une
              des plus grandes pertes de vies en mer de l{"'"}histoire. Les
              survivants qui tentent de nager vers le rivage sont parfois
              abattus par les SS restes a terre.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="border border-border bg-card p-6 text-center">
              <p className="font-serif text-2xl font-bold text-primary">Cap Arcona</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Paquebot de luxe reconverti. Plus de 4 500 detenus a bord.
                Coule apres le bombardement.
              </p>
            </div>
            <div className="border border-border bg-card p-6 text-center">
              <p className="font-serif text-2xl font-bold text-primary">Thielbek</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Cargo de 2 800 detenus. Coule en quelques minutes.
                Presque aucun survivant.
              </p>
            </div>
            <div className="border border-border bg-card p-6 text-center">
              <p className="font-serif text-2xl font-bold text-primary">Athen</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Seul navire a avoir pu debarquer ses prisonniers avant
                l{"'"}attaque. Survivants sauves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ DEPORTES ══════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Temoignages
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Des destins brises
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-primary" />
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              Parmi les 106 000 detenus de Neuengamme, chaque histoire est unique.
              Voici le parcours de quelques-uns de ces hommes et femmes.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="border border-border bg-card p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Seguy
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Deporte a Neuengamme
                  </p>
                </div>
                <span className="rounded-sm bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Deporte
                </span>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">
                    Date de deportation : inconnue
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">
                    Deporte au KL Neuengamme
                  </span>
                </div>
              </div>
            </div>

            <div className="border border-border bg-card p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Lestage
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Deporte a Neuengamme
                  </p>
                </div>
                <span className="rounded-sm bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Deporte
                </span>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">
                    Date de deportation : inconnue
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">
                    Deporte au KL Neuengamme
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ LIBERATION ET MEMOIRE ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col gap-8 md:flex-row md:gap-16">
            <div className="md:w-1/3">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
                4 mai 1945
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
                Liberation et memoire
              </h2>
              <div className="mt-4 h-px w-16 bg-primary" />
            </div>
            <div className="space-y-6 md:w-2/3">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Le 4 mai 1945, les troupes britanniques atteignent le camp de
                Neuengamme. Mais ils le trouvent vide : les SS ont evacue tous
                les prisonniers dans les jours precedents, les envoyant vers
                les navires de la baie de Lubeck ou les abandonnant lors des
                marches de la mort.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Apres la guerre, le site est utilise comme prison, d{"'"}abord
                par les Britanniques, puis par les autorites allemandes jusqu{"'"}en
                1948. Une seconde prison y fonctionne de 1948 a 2006.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Depuis 2005, le Memorial de Neuengamme occupe l{"'"}ensemble du
                site historique. C{"'"}est aujourd{"'"}hui l{"'"}un des plus grands
                memoriaux d{"'"}Allemagne, avec des expositions permanentes et
                un centre de documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ DEVOIR DE MEMOIRE ══════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Ne jamais oublier
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Devoir de memoire
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary" />

          <div className="mt-12 border-l-2 border-primary py-4 pl-6 text-left">
            <p className="font-serif text-xl italic leading-relaxed text-foreground">
              {'"'}Neuengamme rappelle que les crimes nazis n{"'"}ont pas eu lieu
              uniquement dans les camps d{"'"}extermination de l{"'"}Est, mais
              aussi au coeur meme de l{"'"}Allemagne, pres des grandes villes,
              au vu et au su de la population.{'"'}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              &mdash; Memorial de Neuengamme
            </p>
          </div>

          <p className="mt-12 text-lg leading-relaxed text-muted-foreground">
            Neuengamme est aujourd{"'"}hui un lieu de memoire essentiel. Il
            rappelle la cruaute du systeme concentrationnaire nazi et
            l{"'"}importance de defendre les droits humains pour empecher que
            de tels crimes se reproduisent.
          </p>

          <div className="mx-auto mt-8 h-px w-24 bg-primary" />

          <p className="mt-8 font-serif text-lg italic text-muted-foreground">
            En memoire des 42 900 victimes documentees du KL Neuengamme
            et de ses Kommandos exterieurs.
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
                Le plus grand camp de concentration et d{"'"}extermination nazi.
                Plus de 1,1 million de victimes.
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
                Pres de Weimar. Plus de 56 000 victimes. Connu pour l{"'"}auto-liberation
                des detenus.
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
                Camp de categorie III. Pres de 90 000 victimes. L{"'"}escalier
                de la mort.
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

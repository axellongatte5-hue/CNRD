// Image import removed - using standard img tags

export default function RoyallieuPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ══════ HERO ══════ */}
      <section className="relative flex min-h-[85vh] items-end">
        <Image
          src="/images/royallieu-camp.jpg"
          alt="Camp de Royallieu, Compiegne"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-16 md:pb-24">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
            France &middot; 1941-1944
          </p>
          <h1 className="mt-4 font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Royallieu
          </h1>
          <p className="mt-2 font-serif text-2xl text-muted-foreground md:text-3xl">
            Camp de Compiegne
          </p>
          <div className="mt-6 h-px w-24 bg-primary" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Principal camp d{"'"}internement et de transit en France occupee.
            Antichambre de la deportation vers les camps nazis.
          </p>
        </div>
      </section>

      {/* ══════ INTRODUCTION ══════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col gap-12 md:flex-row md:gap-16">
            <div className="md:w-1/3">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
                Presentation
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
                Un camp sur le sol francais
              </h2>
              <div className="mt-4 h-px w-16 bg-primary" />
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:w-2/3">
              <p>
                Le camp de Compiegne, officiellement denomme <strong className="text-foreground">Frontstalag 122</strong>,
                est situe dans le quartier de Royallieu, dans l{"'"}Oise. Requisitionne par l{"'"}armee
                allemande des juin 1940, il devient a partir de 1941 le principal camp d{"'"}internement
                et de transit du nord de la France.
              </p>
              <p>
                Contrairement aux camps de concentration situes en Allemagne ou en Pologne, Royallieu
                se trouve sur le territoire francais. Il represente pour des dizaines de milliers
                de personnes la derniere etape avant la deportation vers l{"'"}enfer des camps nazis.
              </p>
              <p>
                De nombreux resistants, opposants politiques, otages et Juifs y sont enfermes dans
                l{"'"}attente de leur transfert. Le camp joue un role central dans la machine de
                repression et de deportation mise en place par l{"'"}occupant nazi avec la collaboration
                du regime de Vichy.
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
              { year: "Juin 1940", text: "L'armee allemande requisitionne les casernes de Royallieu apres l'armistice." },
                            { year: "Juin 1941", text: "Le camp devient officiellement le Frontstalag 122, camp d'internement pour les «ennemis du Reich»." },
              { year: "Decembre 1941", text: "Creation d'un camp special pour les Juifs, separe du reste du camp." },
              { year: "27 mars 1942", text: "Depart du premier convoi de deportation de Juifs de France vers Auschwitz (convoi 1)." },
              { year: "6 juillet 1942", text: "Départ du convoi des «45 000» : 1 175 résistants communistes vers Auschwitz." },
              { year: "1943", text: "Intensification des deportations. Des convois partent regulierement vers Buchenwald, Mauthausen, Ravensbrueck." },
              { year: "22 mars 1944", text: "Deportation de nombreux resistants, dont des membres de reseaux de l'Oise." },
              { year: "31 juillet 1944", text: "Depart du convoi 77, l'un des derniers grands convois de Juifs vers Auschwitz (1 300 personnes)." },
              { year: "17 aout 1944", text: "Depart du dernier convoi de deportation. Le camp est evacue avant l'arrivee des Allies." },
              { year: "1 septembre 1944", text: "Liberation de Compiegne par les troupes americaines." },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div
                    className={`border border-border bg-card p-6 transition-colors hover:border-primary ${index % 2 === 0 ? "md:ml-auto md:mr-0" : "md:ml-0 md:mr-auto"} md:max-w-md`}
                  >
                    <p className="text-sm font-semibold text-primary">{item.year}</p>
                    <p className="mt-2 text-muted-foreground">{item.text}</p>
                  </div>
                </div>
                <div className="absolute left-4 top-6 flex h-3 w-3 items-center justify-center md:left-1/2 md:-translate-x-1/2">
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
          <div className="flex flex-col gap-12 md:flex-row md:gap-16">
            <div className="md:w-1/3">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
                Organisation
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
                Structure du camp
              </h2>
              <div className="mt-4 h-px w-16 bg-primary" />
            </div>
            <div className="space-y-8 md:w-2/3">
              <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Le camp des politiques (Camp A)
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Reserve aux resistants, communistes, gaullistes et autres opposants politiques.
                  C{"'"}est le plus peuple du camp. Les detenus y organisent une vie clandestine :
                  cours, conferences, activites culturelles pour maintenir le moral et la dignite.
                </p>
              </div>

              <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Le camp des Juifs (Camp C)
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  A partir de decembre 1941, un camp separe est cree pour les Juifs, isoles du reste
                  des internes. C{"'"}est de ce camp que partent les premiers convois de deportation
                  de Juifs de France vers Auschwitz-Birkenau, dans le cadre de la « Solution finale ».
                </p>
              </div>

              <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Le camp des otages
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Des notables, elus et personnalites sont internes comme otages. Ils servent
                  de monnaie d{"'"}echange ou sont fusilles en represailles d{"'"}actes de resistance.
                  La politique des otages est une arme de terreur utilisee par l{"'"}occupant.
                </p>
              </div>

              <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Les casernes et baraquements
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Le camp occupe d{"'"}anciennes casernes militaires francaises. Les batiments en
                  dur sont completes par des baraquements en bois. La capacite d{"'"}accueil est
                  largement depassee, entrainant une promiscuite extreme et des conditions sanitaires
                  deplorables.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-sm">
              <Image
                src="/images/royallieu-barracks.jpg"
                alt="Interieur des baraquements du camp de Royallieu"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-background/20" />
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Interieur des baraquements - Conditions de detention precaires
            </p>
          </div>
        </div>
      </section>

      {/* ══════ DEPORTATIONS ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Antichambre de la mort
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Les deportations
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-primary" />
          </div>

          <div className="mt-12 space-y-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Royallieu est le principal point de depart des convois de deportation depuis la France
              occupee. Entre 1942 et 1944, <strong className="text-foreground">plus de 50 000 personnes</strong> transitent
              par ce camp avant d{"'"}etre deportees vers les camps de concentration et d{"'"}extermination nazis.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="border border-border bg-card p-8 transition-colors hover:border-primary">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Le convoi du 27 mars 1942
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Premier convoi de deportation de Juifs de France vers Auschwitz. 1 112 hommes juifs,
                  pour la plupart etrangers, sont deportes. Seuls 19 survivront. Ce convoi marque le
                  debut de la « Solution finale » en France.
                </p>
              </div>

              <div className="border border-border bg-card p-8 transition-colors hover:border-primary">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Le convoi des "45 000"
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Le 6 juillet 1942, 1 175 resistants communistes sont deportes vers Auschwitz.
                  Leurs matricules commencant par 45 000 leur donnent ce nom. Moins de 120 survivront.
                  Charlotte Delbo, ecrivaine, fait partie de ce convoi.
                </p>
              </div>

              <div className="border border-border bg-card p-8 transition-colors hover:border-primary">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Le convoi 77 - 31 juillet 1944
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  L{"'"}un des derniers grands convois de deportation de Juifs. Plus de 1 300 personnes,
                  dont de nombreux enfants, sont deportees vers Auschwitz-Birkenau. La plupart sont
                  gazees des leur arrivee. C{"'"}est le convoi le plus heterogene et le plus documente.
                </p>
              </div>

              <div className="border border-border bg-card p-8 transition-colors hover:border-primary">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Les convois de resistants
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  De nombreux convois de resistants partent vers Buchenwald, Mauthausen, Dachau ou
                  Neuengamme. Des reseaux entiers sont deportes : Combat, Liberation, Franc-Tireur,
                  reseaux de renseignement britanniques...
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
              La detention
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Conditions de vie
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-primary" />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="border border-border bg-card p-8 transition-colors hover:border-primary">
              <h3 className="font-serif text-lg font-bold text-foreground">Surpopulation</h3>
              <p className="mt-3 text-muted-foreground">
                Le camp, prevu pour quelques milliers de personnes, en accueille parfois plus
                de 10 000 simultanement. La promiscuite est extreme, les detenus dorment a
                meme le sol ou sur des paillasses infestees de vermine.
              </p>
            </div>

            <div className="border border-border bg-card p-8 transition-colors hover:border-primary">
              <h3 className="font-serif text-lg font-bold text-foreground">Faim et privations</h3>
              <p className="mt-3 text-muted-foreground">
                La nourriture est insuffisante : soupe claire, pain noir en quantite derisoire.
                Les colis familiaux, quand ils arrivent, sont souvent pilles. La faim est une
                torture permanente qui affaiblit les corps et les esprits.
              </p>
            </div>

            <div className="border border-border bg-card p-8 transition-colors hover:border-primary">
              <h3 className="font-serif text-lg font-bold text-foreground">Violence et arbitraire</h3>
              <p className="mt-3 text-muted-foreground">
                Les gardes allemands exercent une violence quotidienne : coups, humiliations,
                punitions collectives. Les appels interminables par tous les temps epuisent
                les detenus. Certains sont fusilles comme otages en represailles.
              </p>
            </div>

            <div className="border border-border bg-card p-8 transition-colors hover:border-primary">
              <h3 className="font-serif text-lg font-bold text-foreground">L{"'"}attente angoissante</h3>
              <p className="mt-3 text-muted-foreground">
                Le pire est peut-etre l{"'"}incertitude. Les internes ne savent pas combien de
                temps durera leur detention ni quelle sera leur destination. L{"'"}annonce d{"'"}un
                depart en convoi repand la terreur : tous connaissent la reputation des camps nazis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ STATISTIQUES ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Bilan
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Les chiffres de l{"'"}horreur
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-primary" />
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-primary md:text-5xl">54 000</p>
              <p className="mt-2 text-muted-foreground">personnes deportees depuis Royallieu</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-primary md:text-5xl">50+</p>
              <p className="mt-2 text-muted-foreground">convois de deportation</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-primary md:text-5xl">1941-1944</p>
              <p className="mt-2 text-muted-foreground">annees de fonctionnement</p>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-4">
            <div className="border border-border bg-card p-6 text-center">
              <p className="font-serif text-2xl font-bold text-foreground">~40 000</p>
              <p className="mt-1 text-sm text-muted-foreground">Resistants et politiques deportes</p>
            </div>
            <div className="border border-border bg-card p-6 text-center">
              <p className="font-serif text-2xl font-bold text-foreground">~14 000</p>
              <p className="mt-1 text-sm text-muted-foreground">Juifs deportes</p>
            </div>
            <div className="border border-border bg-card p-6 text-center">
              <p className="font-serif text-2xl font-bold text-foreground">Auschwitz</p>
              <p className="mt-1 text-sm text-muted-foreground">Destination principale des Juifs</p>
            </div>
            <div className="border border-border bg-card p-6 text-center">
              <p className="font-serif text-2xl font-bold text-foreground">Buchenwald</p>
              <p className="mt-1 text-sm text-muted-foreground">Destination principale des resistants</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ RESISTANCE AU CAMP ══════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col gap-12 md:flex-row md:gap-16">
            <div className="md:w-1/3">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
                Ne pas ceder
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
                Resister a Royallieu
              </h2>
              <div className="mt-4 h-px w-16 bg-primary" />
            </div>
            <div className="space-y-8 md:w-2/3">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Malgre les conditions terribles, les internes organisent des formes de resistance
                quotidienne pour preserver leur humanite et leur dignite face a l{"'"}oppresseur.
              </p>

              <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  L{"'"}universite clandestine
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Les internes organisent des cours et des conferences. Professeurs, intellectuels
                  et etudiants partagent leurs connaissances. Cette "universite du camp" permet
                  de maintenir une vie intellectuelle et de resister a l{"'"}abrutissement voulu par
                  les nazis.
                </p>
              </div>

              <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Solidarite et entraide
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Les detenus partagent le peu qu{"'"}ils ont : nourriture, vetements, medicaments.
                  Les plus forts aident les plus faibles. Cette solidarite est une forme de
                  resistance morale face au systeme nazi qui cherche a deshumaniser les victimes.
                </p>
              </div>

              <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Tentatives d{"'"}evasion
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Malgre la surveillance, quelques detenus parviennent a s{"'"}evader. Certains
                  rejoignent la Resistance a l{"'"}exterieur. Ces evasions sont rares mais
                  temoignent de la volonte de ne jamais abandonner l{"'"}espoir de liberte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ DEPORTES ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Temoignages
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Des destins brises
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-primary" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Derriere les chiffres, des hommes et des femmes dont nous honorons la memoire.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Seguy */}
            <div className="border border-border bg-card p-8 transition-colors hover:border-primary">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">Seguy</h3>
                </div>
                <span className="rounded-sm bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Deporte
                </span>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">
                    Deporte le <strong className="text-foreground">22 mars 1944</strong>
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Interne a Royallieu avant sa deportation</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Deporte vers Mauthausen</span>
                </div>
              </div>
            </div>

            {/* Feigelson */}
            <div className="border border-border bg-card p-8 transition-colors hover:border-primary">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">Feigelson</h3>
                </div>
                <span className="rounded-sm bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  Evade
                </span>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">
                    Deporte par le <strong className="text-foreground">convoi 77</strong>
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">
                    Arrive a Auschwitz le <strong className="text-foreground">31 juillet 1944</strong>
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">
                    Evade d{"'"}Auschwitz le <strong className="text-foreground">22 janvier 1945</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Rolland */}
            <div className="border border-border bg-card p-8 transition-colors hover:border-primary">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">Rolland</h3>
                </div>
                <span className="rounded-sm bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Deporte
                </span>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Interne au camp de Royallieu</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Date de deportation inconnue</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Recherches en cours pour retrouver sa trace</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ MEMORIAL ══════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col gap-12 md:flex-row md:gap-16">
            <div className="md:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                <Image
                  src="/images/royallieu-memorial.jpg"
                  alt="Memorial de l'internement et de la deportation de Royallieu"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-background/20" />
              </div>
            </div>
            <div className="flex flex-col justify-center md:w-1/2">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
                Aujourd{"'"}hui
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
                Le Memorial de Royallieu
              </h2>
              <div className="mt-4 h-px w-16 bg-primary" />
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Inaugure en 2008, le Memorial de l{"'"}internement et de import CampPageLayout from '../components/CampPageLayout';

const compiegneData = {
  dates: "1941 — 1944",
  title: "Compiègne",
  subtitle: "Camp de Royallieu. Principal camp de transit en France pour les résistants et les prisonniers politiques.",
  
  introTitle: "L'antichambre de la déportation",
  introText: [
    "Le camp de Royallieu, à Compiègne, fut le principal centre de transit pour les résistants, prisonniers politiques et otages destinés à la déportation vers les camps nazis.",
    "Contrairement à Drancy réservé aux Juifs, Compiègne était le point de départ des convois de déportés politiques vers Buchenwald, Mauthausen, Dachau et d'autres camps de concentration.",
  ],
  
  timeline: [
    {
      date: "Juin 1941",
      title: "Ouverture du camp",
      description: "L'ancienne caserne de Royallieu devient le Frontstalag 122, camp d'internement allemand.",
    },
    {
      date: "Décembre 1941",
      title: "Premiers otages fusillés",
      description: "95 otages internés à Compiègne sont fusillés au Mont-Valérien en représailles à des attentats.",
    },
    {
      date: "Juillet 1942",
      title: "Premier convoi vers Auschwitz",
      description: "Le convoi du 6 juillet emporte 1 175 détenus vers Auschwitz. Seuls 119 survivront.",
    },
    {
      date: "Août 1944",
      title: "Dernier convoi",
      description: "Le 17 août, le dernier convoi quitte Compiègne. Le camp est libéré quelques jours plus tard.",
    },
  ],
  
  structureTitle: "Le camp de Royallieu",
  structureSubtitle: "Organisation",
  structureText: [
    "Installé dans une ancienne caserne militaire, le camp était divisé en plusieurs sections selon les catégories de détenus.",
  ],
  structureBlocks: [
    {
      title: "Le camp A",
      text: "Réservé aux prisonniers politiques français, résistants et otages. C'était le plus important des camps.",
    },
    {
      title: "Le camp B",
      text: "Destiné aux ressortissants britanniques et américains, traités selon les conventions de Genève.",
    },
    {
      title: "Le camp C",
      text: "Pour les Juifs avant leur transfert vers Drancy. Des femmes et enfants y furent également internés.",
    },
  ],
  
  processTitle: "Les convois",
  processSubtitle: "Vers les camps nazis",
  processText: [
    "De Compiègne partirent des dizaines de convois vers les camps de concentration allemands. Les détenus ignoraient leur destination.",
  ],
  processList: [
    "Environ 54 000 personnes furent déportées depuis Compiègne.",
    "Les convois partaient généralement de nuit, dans le secret.",
    "Les détenus voyageaient dans des wagons à bestiaux pendant plusieurs jours.",
    "Beaucoup mouraient pendant le transport, de soif, de faim ou d'asphyxie.",
    "Les destinations principales étaient Buchenwald, Mauthausen, Dachau et Auschwitz.",
  ],
  
  conditionsTitle: "L'internement",
  conditionsSubtitle: "La vie au camp",
  conditionsCards: [
    {
      title: "L'attente",
      subtitle: "L'angoisse des listes",
      text: "Les internés vivaient dans l'attente terrifiante de leur nom sur les listes de déportation.",
    },
    {
      title: "Les otages",
      subtitle: "Exécutions de représailles",
      text: "Des centaines d'otages furent fusillés en représailles aux actions de la Résistance.",
    },
    {
      title: "La solidarité",
      subtitle: "Résistance intérieure",
      text: "Les résistants organisèrent des réseaux d'entraide et maintinrent le moral malgré les conditions.",
    },
    {
      title: "Les évasions",
      subtitle: "Tentatives désespérées",
      text: "Quelques évasions réussirent, notamment grâce à des complicités extérieures et des tunnels.",
    },
  ],
  
  stats: [
    { value: "54 000", label: "Déportés", description: "Depuis Compiègne" },
    { value: "50 000", label: "Internés", description: "Passés par le camp" },
    { value: "1 000", label: "Fusillés", description: "Otages exécutés" },
  ],
  statsSecondary: [
    { value: "3", label: "Années" },
    { value: "100+", label: "Convois" },
    { value: "40%", label: "Non-retour" },
    { value: "28", label: "Nationalités" },
  ],
  
  deportes: [
    {
      nom: "Charlotte Delbo",
      date: "Janvier 1943",
      statut: "Survécu",
      details: "Résistante et écrivaine, déportée à Auschwitz puis Ravensbrück. Son œuvre témoigne de l'expérience concentrationnaire.",
    },
    {
      nom: "Robert Desnos",
      date: "Mars 1944",
      statut: "Décédé",
      details: "Poète surréaliste et résistant. Déporté à Buchenwald puis Theresienstadt où il mourut du typhus.",
    },
  ],
  
  liberationTitle: "La libération",
  liberationText: [
    "Le dernier convoi quitta Compiègne le 17 août 1944, emportant 1 250 détenus vers Buchenwald. Le camp fut libéré quelques jours plus tard.",
    "À la libération, le camp était presque vide. Les Allemands avaient accéléré les déportations dans les dernières semaines.",
    "Aujourd'hui, le Mémorial de l'Internement et de la Déportation de Compiègne occupe les lieux et perpétue la mémoire des victimes.",
  ],
  
  memorialQuote: "Nous partons vers l'inconnu. Gardez confiance. Nous reviendrons.",
  memorialAuthor: "Message d'un déporté de Compiègne, 1944",
  memorialStat: "54 000",
  memorialStatLabel: "déportés depuis Compiègne",
  
  otherCamps: [
    { name: "Drancy", country: "France", path: "/camp/drancy" },
    { name: "Auschwitz", country: "Pologne", path: "/camp/auschwitz" },
    { name: "Buchenwald", country: "Allemagne", path: "/camp/buchenwald" },
    { name: "Mauthausen", country: "Autriche", path: "/camp/mauthausen" },
    { name: "Ravensbrück", country: "Allemagne", path: "/camp/ravensbruck" },
    { name: "Neuengamme", country: "Allemagne", path: "/camp/neuengamme" },
  ],
};

export default function Compiegne() {
  return <CampPageLayout {...compiegneData} />;
}

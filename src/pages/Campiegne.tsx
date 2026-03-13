import Image from "next/image"

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
              { year: "Juin 1941", text: "Le camp devient officiellement le Frontstalag 122, camp d'internement pour les \"ennemis du Reich\"." },
              { year: "Decembre 1941", text: "Creation d'un camp special pour les Juifs, separe du reste du camp." },
              { year: "27 mars 1942", text: "Depart du premier convoi de deportation de Juifs de France vers Auschwitz (convoi 1)." },
              { year: "6 juillet 1942", text: "Depart du convoi des \"45 000\" : 1 175 resistants communistes vers Auschwitz." },
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
                  de Juifs de France vers Auschwitz-Birkenau, dans le cadre de la \"Solution finale\".
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
                  debut de la \"Solution finale\" en France.
                </p>
              </div>

              <div className="border border-border bg-card p-8 transition-colors hover:border-primary">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Le convoi des \"45 000\"
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
                  et etudiants partagent leurs connaissances. Cette \"universite du camp\" permet
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
                Inaugure en 2008, le Memorial de l{"'"}internement et de la deportation occupe
                trois batiments preserves de l{"'"}ancien camp. Il retrace l{"'"}histoire du camp
                et rend hommage aux victimes a travers des expositions permanentes, des archives
                et des temoignages.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Le site est un lieu d{"'"}education et de transmission de la memoire, accueillant
                chaque annee des milliers de visiteurs, notamment des scolaires, pour que l{"'"}histoire
                ne soit jamais oubliee.
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
          <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            Devoir de memoire
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary" />

          <blockquote className="mx-auto mt-12 max-w-2xl border-l-2 border-primary py-4 pl-6 text-left">
            <p className="font-serif text-xl italic leading-relaxed text-foreground">
              &ldquo;Nous etions partis pour l{"'"}inconnu. Et cet inconnu, c{"'"}etait la mort.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-muted-foreground">
              &mdash; Charlotte Delbo, deportee de Compiegne vers Auschwitz
            </footer>
          </blockquote>

          <p className="mt-12 text-lg leading-relaxed text-muted-foreground">
            Royallieu est un temoignage de la complicite du regime de Vichy dans la persecution
            et la deportation. Ce camp situe sur le sol francais rappelle que la barbarie nazie
            a ete rendue possible par des collaborations locales. Le devoir de memoire implique
            aussi de regarder en face cette part sombre de l{"'"}histoire de France.
          </p>
        </div>
      </section>

      {/* ══════ NAVIGATION VERS AUTRES CAMPS ══════ */}
      <section className="border-t border-border bg-background py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Autres lieux de memoire
            </p>
            <h2 className="mt-4 font-serif text-2xl font-bold text-foreground md:text-3xl">
              Decouvrir les autres camps
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-primary" />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <a
              href="/"
              className="group border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Pologne &middot; 1940-1945
              </p>
              <h3 className="mt-2 font-serif text-lg font-bold text-foreground">
                Auschwitz-Birkenau
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Plus de 1,1 million de victimes. Symbole de la Shoah.
              </p>
              <p className="mt-3 text-sm font-medium text-primary group-hover:underline">
                Voir &rarr;
              </p>
            </a>

            <a
              href="/buchenwald"
              className="group border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Allemagne &middot; 1937-1945
              </p>
              <h3 className="mt-2 font-serif text-lg font-bold text-foreground">
                Buchenwald
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Pres de Weimar. Auto-liberation des detenus.
              </p>
              <p className="mt-3 text-sm font-medium text-primary group-hover:underline">
                Voir &rarr;
              </p>
            </a>

            <a
              href="/mauthausen"
              className="group border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Autriche &middot; 1938-1945
              </p>
              <h3 className="mt-2 font-serif text-lg font-bold text-foreground">
                Mauthausen
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Camp de categorie III. L{"'"}escalier de la mort.
              </p>
              <p className="mt-3 text-sm font-medium text-primary group-hover:underline">
                Voir &rarr;
              </p>
            </a>

            <a
              href="/neuengamme"
              className="group border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Allemagne &middot; 1938-1945
              </p>
              <h3 className="mt-2 font-serif text-lg font-bold text-foreground">
                Neuengamme
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Pres de Hambourg. Tragedie de la baie de Lubeck.
              </p>
              <p className="mt-3 text-sm font-medium text-primary group-hover:underline">
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
            <p className="mt-2 text-xs text-muted-foreground">
              &copy; Memorial de l{"'"}internement et de la deportation - Camp de Royallieu
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

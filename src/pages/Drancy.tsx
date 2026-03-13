import Image from "next/image"

export default function DrancyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ══════ HERO ══════ */}
      <section className="relative flex min-h-[85vh] items-end">
        <Image
          src="/images/drancy-cite.jpg"
          alt="La Cite de la Muette, camp de Drancy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-16 md:pb-24">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
            France &middot; 1941-1944
          </p>
          <h1 className="mt-4 font-serif text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Drancy
          </h1>
          <div className="mt-6 h-px w-24 bg-primary" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Camp d{"'"}internement et de transit. Antichambre de la mort pour
            pres de 70 000 Juifs de France deportes vers Auschwitz.
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
                La Cite de la Muette
              </h2>
              <div className="mt-4 h-px w-16 bg-primary" />
            </div>
            <div className="mt-8 md:mt-0 md:w-2/3">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Le camp de Drancy etait situe dans un vaste immeuble en forme de U
                de la Cite de la Muette, au nord-est de Paris, en Seine-Saint-Denis.
                Cet ensemble architectural moderniste, initialement concu pour etre
                des logements sociaux dans les annees 1930, fut reconverti en camp
                d{"'"}internement par les autorites d{"'"}occupation allemandes en aout 1941.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Drancy devint rapidement la plaque tournante de la deportation des
                Juifs de France. De ce camp partirent 67 convois vers les camps
                d{"'"}extermination nazis, principalement Auschwitz-Birkenau. Pres
                de <span className="font-semibold text-foreground">70 000 personnes</span> y
                transitèrent avant d{"'"}etre envoyees vers la mort.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Jusqu{"'"}en juillet 1943, le camp fut administre en partie par la
                police francaise sous controle allemand. Il passa ensuite sous la
                direction directe des SS, avec notamment <span className="font-semibold text-foreground">Alois Brunner</span>,
                criminel de guerre notoire, a sa tete.
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
              { year: "Aout 1941", event: "Ouverture du camp de Drancy par les autorites d'occupation allemandes. Premiers internements de Juifs arretes lors des rafles parisiennes." },
              { year: "27 mars 1942", event: "Depart du premier convoi de deportation de Juifs de France vers Auschwitz. 1 112 hommes sont deportes, dont seulement 19 survivront." },
              { year: "16-17 juillet 1942", event: "Rafle du Vel' d'Hiv. Plus de 13 000 Juifs sont arretes a Paris. Des milliers de femmes et d'enfants transitent par Drancy." },
              { year: "Juillet 1942", event: "Pour la premiere fois, des enfants sont deportes depuis Drancy. Certains ont moins de deux ans." },
              { year: "Juillet 1943", event: "Le camp passe sous commandement direct des SS. Alois Brunner prend la direction et intensifie les deportations." },
              { year: "31 juillet 1944", event: "Depart du convoi 77, le plus important en nombre avec 1 300 deportes, dont de nombreux enfants. Dernier grand convoi vers Auschwitz." },
              { year: "17 aout 1944", event: "Les autorites nazies quittent le camp, emmenant un dernier convoi de 51 personnes." },
              { year: "18 aout 1944", event: "Liberation du camp par la Croix-Rouge et le consul de Suede. 1 500 internes sont liberes." },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative mb-12 flex flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div
                    className={`${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                  >
                    <span className="font-serif text-lg font-bold text-primary">
                      {item.year}
                    </span>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {item.event}
                    </p>
                  </div>
                </div>
                <div className="absolute left-4 top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ LA RAFLE DU VEL' D'HIV ══════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="md:flex md:gap-16">
            <div className="md:w-1/3">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
                Juillet 1942
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
                La rafle du Vel{"'"}d{"'"}Hiv
              </h2>
              <div className="mt-4 h-px w-16 bg-primary" />
            </div>
            <div className="mt-8 md:mt-0 md:w-2/3">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Les 16 et 17 juillet 1942, plus de <span className="font-semibold text-foreground">13 000 Juifs</span> furent
                arretes a Paris et en region parisienne par la police francaise
                sur ordre des autorites allemandes. C{"'"}est la plus grande rafle
                de Juifs realisee en France pendant la Seconde Guerre mondiale.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Les familles avec enfants furent d{"'"}abord entassees au Velodrome
                d{"'"}Hiver dans des conditions inhumaines, sans eau ni nourriture,
                avant d{"'"}etre transferees vers les camps de Pithiviers et Beaune-la-Rolande,
                puis vers Drancy.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Les enfants furent brutalement separes de leurs parents. Plus de
                <span className="font-semibold text-foreground"> 4 000 enfants</span>,
                certains ages de seulement deux ans, furent deportes seuls vers
                Auschwitz ou ils perirent dans les chambres a gaz.
              </p>
              <div className="mt-8 border-l-2 border-primary py-4 pl-6">
                <p className="font-serif text-xl italic leading-relaxed text-foreground">
                  {"\""}Ces enfants, arraches a leurs meres, ont ete deportes seuls,
                  sans personne pour les accompagner dans leur dernier voyage.{"\""}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  &mdash; Serge Klarsfeld, historien
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ CONDITIONS DE VIE ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              L{"'"}enfer quotidien
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Conditions de detention
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-primary" />
          </div>

          <div className="relative mt-12 overflow-hidden">
            <Image
              src="/images/drancy-courtyard.jpg"
              alt="La cour interieure du camp de Drancy"
              width={896}
              height={400}
              className="aspect-[21/9] w-full rounded-sm object-cover"
            />
            <div className="absolute inset-0 bg-background/20" />
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            La cour interieure de la Cite de la Muette ou les internes etaient parques
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Surpopulation extreme",
                desc: "Au plus fort des rafles, jusqu'a 7 000 personnes etaient entassees dans un espace prevu pour 700. Les chambrees de 50 m² accueillaient parfois 100 detenus.",
              },
              {
                title: "Faim permanente",
                desc: "Les rations alimentaires etaient tres insuffisantes. La soupe claire et le pain moisi constituaient l'essentiel des repas. Beaucoup souffraient de malnutrition severe.",
              },
              {
                title: "Conditions sanitaires",
                desc: "Les installations sanitaires etaient totalement inadequates pour le nombre de detenus. Les maladies se propageaient rapidement : dysenterie, typhus, tuberculose.",
              },
              {
                title: "Separations familiales",
                desc: "Les familles etaient systematiquement separees. Les enfants etaient arraches a leurs parents avant les deportations, dans des scenes d'une cruaute inouie.",
              },
              {
                title: "Attente angoissante",
                desc: "Les internes vivaient dans l'angoisse permanente des convois. Chaque jour, des listes etaient etablies pour les deportations du lendemain.",
              },
              {
                title: "Spoliations",
                desc: "Tous les biens des internes etaient confisques : argent, bijoux, vetements. Le camp servait aussi de centre de tri pour les biens voles aux Juifs de France.",
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

      {/* ══════ CONVOIS ET DEPORTATIONS ══════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="md:flex md:gap-16">
            <div className="md:w-1/3">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
                67 convois
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
                Les deportations
              </h2>
              <div className="mt-4 h-px w-16 bg-primary" />
            </div>
            <div className="mt-8 md:mt-0 md:w-2/3">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Entre mars 1942 et aout 1944, <span className="font-semibold text-foreground">67 convois</span> partirent
                de Drancy vers les camps d{"'"}extermination nazis. La grande
                majorite des deportes furent envoyes vers Auschwitz-Birkenau,
                ou ils furent assassines des leur arrivee.
              </p>

              <div className="mt-8 space-y-6">
                <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
                  <h4 className="font-serif text-lg font-bold text-foreground">
                    Convoi n°1 - 27 mars 1942
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    Premier convoi de deportation de Juifs de France. 1 112 hommes
                    deportes vers Auschwitz. Seulement 19 survivants.
                  </p>
                </div>

                <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
                  <h4 className="font-serif text-lg font-bold text-foreground">
                    Convois de juillet-aout 1942
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    Suite a la rafle du Vel{"'"}d{"'"}Hiv, des convois quotidiens
                    partirent vers Auschwitz. Pour la premiere fois, des enfants
                    furent deportes.
                  </p>
                </div>

                <div className="border-l-2 border-primary pl-6">
                  <h4 className="font-serif text-lg font-bold text-foreground">
                    Convoi n°77 - 31 juillet 1944
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    Le plus important convoi en nombre : <span className="font-semibold text-foreground">1 300 deportes</span>,
                    dont 300 enfants. Dernier grand convoi vers Auschwitz depuis
                    Drancy. Henri Feigelson faisait partie de ce convoi.
                  </p>
                </div>

                <div className="border-l-2 border-border pl-6 transition-colors hover:border-primary">
                  <h4 className="font-serif text-lg font-bold text-foreground">
                    Dernier convoi - 17 aout 1944
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    51 personnes deportees dans le dernier convoi, alors que Paris
                    etait sur le point d{"'"}etre libere.
                  </p>
                </div>
              </div>
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

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="border border-border bg-card p-8 text-center">
              <p className="font-serif text-4xl font-bold text-primary md:text-5xl">
                ~70 000
              </p>
              <p className="mt-4 text-sm uppercase tracking-wider text-muted-foreground">
                Personnes transitees
              </p>
            </div>
            <div className="border border-border bg-card p-8 text-center">
              <p className="font-serif text-4xl font-bold text-primary md:text-5xl">
                67
              </p>
              <p className="mt-4 text-sm uppercase tracking-wider text-muted-foreground">
                Convois de deportation
              </p>
            </div>
            <div className="border border-border bg-card p-8 text-center">
              <p className="font-serif text-4xl font-bold text-primary md:text-5xl">
                63 000
              </p>
              <p className="mt-4 text-sm uppercase tracking-wider text-muted-foreground">
                Deportes vers Auschwitz
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-4">
            <div className="border border-border bg-secondary p-6 text-center">
              <p className="font-serif text-2xl font-bold text-foreground">
                11 400
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                Enfants deportes
              </p>
            </div>
            <div className="border border-border bg-secondary p-6 text-center">
              <p className="font-serif text-2xl font-bold text-foreground">
                3%
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                Taux de survie
              </p>
            </div>
            <div className="border border-border bg-secondary p-6 text-center">
              <p className="font-serif text-2xl font-bold text-foreground">
                1 500
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                Liberes en aout 1944
              </p>
            </div>
            <div className="border border-border bg-secondary p-6 text-center">
              <p className="font-serif text-2xl font-bold text-foreground">
                3 ans
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                Duree de fonctionnement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ ALOIS BRUNNER ══════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="md:flex md:gap-16">
            <div className="md:w-1/3">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
                Le bourreau
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
                Alois Brunner
              </h2>
              <div className="mt-4 h-px w-16 bg-primary" />
            </div>
            <div className="mt-8 md:mt-0 md:w-2/3">
              <p className="text-lg leading-relaxed text-muted-foreground">
                En juillet 1943, les SS prirent le controle direct du camp de Drancy.
                <span className="font-semibold text-foreground"> Alois Brunner</span>,
                l{"'"}un des principaux collaborateurs d{"'"}Adolf Eichmann, fut nomme
                commandant. Ce criminel de guerre autrichien avait deja supervise
                la deportation des Juifs de Vienne, Berlin et Salonique.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Sous sa direction, les conditions de detention se durcirent encore.
                Brunner intensifia les rafles et accelera le rythme des deportations.
                Il orchestra personnellement l{"'"}arrestation de nombreux Juifs caches,
                utilisant des informateurs et des methodes de torture.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Apres la guerre, Brunner echappa a la justice et se refugia en Syrie
                ou il vecut jusqu{"'"}a sa mort presumee en 2001 ou 2010, sans jamais
                avoir ete juge pour ses crimes. Il est responsable de la deportation
                de plus de 140 000 Juifs europeens.
              </p>
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
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Parmi les dizaines de milliers de personnes qui transitèrent par Drancy,
              voici le parcours de l{"'"}un des deportes dont nous honorons la memoire.
            </p>
          </div>

          <div className="mt-12">
            <div className="border border-border bg-card p-8 transition-colors hover:border-primary">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Henri Feigelson
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Deporte par le convoi 77
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="rounded-sm bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    Evade
                  </span>
                </div>
              </div>
              <div className="mt-6 grid gap-4 text-sm md:grid-cols-3">
                <div>
                  <p className="text-muted-foreground">Date de deportation</p>
                  <p className="font-medium text-foreground">31 juillet 1944</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Convoi</p>
                  <p className="font-medium text-foreground">Convoi n°77</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Destination</p>
                  <p className="font-medium text-foreground">Auschwitz-Birkenau</p>
                </div>
              </div>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Henri Feigelson fut deporte par le convoi 77, le dernier grand
                convoi parti de Drancy vers Auschwitz le 31 juillet 1944. Ce convoi,
                le plus important en nombre avec 1 300 deportes dont 300 enfants,
                partit alors que la Liberation de Paris approchait. Parmi ces deportes,
                tres peu survecurent a leur arrivee a Auschwitz. Henri Feigelson
                reussit l{"'"}extraordinaire exploit de s{"'"}evader du camp d{"'"}Auschwitz
                le 22 janvier 1945, quelques jours avant la liberation du camp par
                l{"'"}Armee rouge.
              </p>
            </div>
          </div>

          <div className="mt-12 border-l-2 border-primary py-4 pl-6">
            <p className="font-serif text-xl italic leading-relaxed text-foreground">
              {"\""}Le convoi 77 represente la derniere tentative desespere des nazis
              d{"'"}aneantir les Juifs de France avant la Liberation. Ces 1 300 personnes
              furent deportees alors meme que les Allies approchaient de Paris.{"\""}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              &mdash; Serge Klarsfeld
            </p>
          </div>
        </div>
      </section>

      {/* ══════ LIBERATION ══════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="md:flex md:gap-16">
            <div className="md:w-1/3">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
                Aout 1944
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
                La liberation
              </h2>
              <div className="mt-4 h-px w-16 bg-primary" />
            </div>
            <div className="mt-8 md:mt-0 md:w-2/3">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Le <span className="font-semibold text-foreground">17 aout 1944</span>,
                alors que les forces alliees approchaient de Paris, les autorites
                nazies quittèrent precipitamment le camp de Drancy. Alois Brunner
                prit la fuite, emmenant avec lui un dernier convoi de 51 detenus.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Le lendemain, le <span className="font-semibold text-foreground">18 aout 1944</span>,
                des representants de la Croix-Rouge et le consul de Suede, Raoul Nordling,
                prirent possession du camp. Environ 1 500 internes furent liberes,
                sauves in extremis de la deportation.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Pour les survivants, la liberation fut un moment de joie immense,
                mais aussi le debut d{"'"}une longue attente. Beaucoup esperaient
                retrouver des proches deportes, ignorant encore le sort qui les
                avait frappes dans les camps d{"'"}extermination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ MEMORIAL ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative overflow-hidden">
            <Image
              src="/images/drancy-memorial.jpg"
              alt="Le Memorial de la Shoah de Drancy"
              width={896}
              height={400}
              className="aspect-[21/9] w-full rounded-sm object-cover"
            />
            <div className="absolute inset-0 bg-background/20" />
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Le Memorial de la Shoah de Drancy, inaugure en 2012
          </p>

          <div className="mt-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Lieu de memoire
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Le Memorial de Drancy
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-primary" />
          </div>

          <div className="mt-8 text-center">
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              En 2012, le <span className="font-semibold text-foreground">Memorial de la Shoah de Drancy</span> a
              ete inaugure face a la Cite de la Muette. Ce musee-memorial, concu
              par l{"'"}architecte Roger Diener, retrace l{"'"}histoire du camp
              et rend hommage aux victimes de la deportation.
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              La Cite de la Muette, classee monument historique, est aujourd{"'"}hui
              habitee mais conserve une partie accessible au public, avec un wagon
              temoin et des plaques commemoratives rappelant les deportations.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ DEVOIR DE MEMOIRE ══════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Ne jamais oublier
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            Devoir de memoire
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary" />

          <div className="mt-12 border-l-2 border-primary py-4 pl-6 text-left">
            <p className="font-serif text-xl italic leading-relaxed text-foreground">
              {"\""}La France, patrie des Lumieres et des Droits de l{"'"}Homme, terre
              d{"'"}accueil et d{"'"}asile, la France, ce jour-la, accomplissait
              l{"'"}irreparable. Manquant a sa parole, elle livrait ses proteges
              a leurs bourreaux.{"\""}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              &mdash; Jacques Chirac, 16 juillet 1995, discours du Vel{"'"}d{"'"}Hiv
            </p>
          </div>

          <div className="mt-12 border-l-2 border-primary py-4 pl-6 text-left">
            <p className="font-serif text-xl italic leading-relaxed text-foreground">
              {"\""}Drancy fut l{"'"}antichambre de la mort pour des dizaines de milliers
              de Juifs de France. Ce lieu nous rappelle que la barbarie peut surgir
              au coeur meme de notre civilisation.{"\""}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              &mdash; Simone Veil
            </p>
          </div>

          <p className="mt-12 text-lg leading-relaxed text-muted-foreground">
            Drancy reste le symbole de la participation de l{"'"}Etat francais
            a la Shoah. Le travail de memoire mene depuis des decennies, notamment
            par Serge et Beate Klarsfeld, permet de ne jamais oublier les noms
            et les visages des 76 000 Juifs deportes de France, dont pres de
            70 000 transitèrent par Drancy.
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
              href="/royallieu"
              className="group border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                France &middot; 1941-1944
              </p>
              <h3 className="mt-2 font-serif text-lg font-bold text-foreground">
                Royallieu
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Camp de Compiegne. Transit vers la deportation.
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

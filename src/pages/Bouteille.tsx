"use client";

import { motion } from "framer-motion";
import {
  FileText,
  User,
  AlertTriangle,
  Shield,
  MapPin,
  Calendar,
  Quote,
  History,
  Scale,
} from "lucide-react";
import React from "react";

const Section = ({
  title,
  icon: Icon,
  children,
  id,
}: {
  title: string;
  icon: any;
  children: React.ReactNode;
  id: string;
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="mb-24 last:mb-0 relative"
  >
    <div className="bg-[#186974]/15 p-8 md:p-10 border border-[#186974]/25">
      <div className="flex items-center gap-4 mb-8 border-b border-[#186974]/30 pb-4">
        <Icon className="w-6 h-6 text-[#186974]" />
        <h2 className="text-2xl font-serif font-bold tracking-tight uppercase text-white italic">
          {title}
        </h2>
        <div className="ml-auto text-xs font-mono text-white/30 uppercase tracking-widest">
          Dossier Ref: {id.toUpperCase()}
        </div>
      </div>
      <div className="prose max-w-none font-sans leading-relaxed text-white/70">
        {children}
      </div>
    </div>
  </motion.section>
);

export default function Home() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-[#0B1A2E] via-[#132B4A] to-[#1A1A3E] text-white/80 font-sans selection:bg-[#F28C1A]/30 selection:text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      <main className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <header className="mb-32 relative !w-full !h-[279px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-4 py-1 mb-6 border border-[#F28C1A] text-[#F28C1A] font-mono text-xs font-bold uppercase tracking-widest rotate-[-2deg]"
          >
            CONFIDENTIEL / DÉPORTÉ
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif font-bold tracking-tighter mb-8 text-white"
          >
            Robert <br />
            <span className="italic font-normal serif">Bouteille</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-8 font-mono text-sm text-white/50 border-t border-[#186974]/30 pt-8"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              1904 – ?
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Auchy-la-Montagne
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Professeur de Philosophie
            </div>
          </motion.div>

          <div className="absolute -right-4 top-0 opacity-[0.06] pointer-events-none hidden lg:block">
            <FileText className="w-64 h-64 rotate-12 text-[#186974]" />
          </div>
        </header>

        <Section id="identite" title="Profil & Origines" icon={User}>
          <p className="text-xl leading-relaxed mb-6">
            Fils de Désiré Bouteille, ancien député, Robert Bouteille appartient
            à un milieu social politisé et cultivé. Toutefois, son parcours est
            profondément structuré par une{" "}
            <span className="underline decoration-[#F28C1A]/40 underline-offset-4 decoration-2">
              instabilité psychique durable
            </span>
            , qui traverse l&apos;ensemble de sa vie et brouille la portée de sa
            parole après la guerre.
          </p>
        </Section>

        <Section
          id="fragilite"
          title="Fragilité Psychique"
          icon={AlertTriangle}
        >
            <div className="bg-[#186974]/30 p-8 border-l-4 border-[#F28C1A] mb-8 italic text-white/50">
            &quot;Un comportement impulsif, conflictuel et désorganisé.&quot;
          </div>
          <p className="mb-6">
            Bien avant la Seconde Guerre mondiale, Bouteille présente des
            troubles mentaux avérés. Interné à plusieurs reprises avant 1939,
            ses archives administratives attestent d&apos;une fragilité
            antérieure à la déportation.
          </p>
          <p>
            Le traumatisme concentrationnaire a pu aggraver ces troubles, mais
            ils s&apos;inscrivent dans une durée qui dépasse largement le cadre
            des camps.
          </p>
        </Section>

        <Section
          id="resistance"
          title="Engagement & Arrestation"
          icon={Shield}
        >
          <p className="mb-6">
            Après la défaite de 1940, il rejoint les réseaux{" "}
            <strong className="text-white font-semibold">Buckmaster</strong>{" "}
            (SOE britannique). Il participe activement à la circulation de faux
            papiers, ce qui conduit à son arrestation par les autorités
            allemandes en novembre 1943.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="border border-[#186974]/30 p-6 bg-[#186974]/20">
                <h3 className="font-mono text-xs uppercase mb-4 text-white/40">
                  Réseau clandestin
                </h3>
                <p className="text-sm text-white/70">
                  Buckmaster / SOE (Special Operations Executive)
                </p>
              </div>
              <div className="border border-[#186974]/30 p-6 bg-[#186974]/20">
                <h3 className="font-mono text-xs uppercase mb-4 text-white/40">
                  Motif d&apos;arrestation
                </h3>
                <p className="text-sm text-white/70">
                Fabrication et circulation de faux documents d&apos;identité
              </p>
            </div>
          </div>
        </Section>

        <Section
          id="buchenwald"
          title="Buchenwald : Bloc des Invalides"
          icon={History}
        >
          <p className="mb-6">
            Déporté en janvier 1944, Bouteille survit quinze mois à Buchenwald.
            Amputé de la jambe droite, il est affecté au{" "}
            <strong className="text-white font-semibold">
              Bloc des Invalides
            </strong>
            , secteur réservé aux détenus inaptes au travail.
          </p>
          <p className="mb-8 text-lg">
            Cette infirmité limite son exposition au travail forcé extrême,
            faisant de lui un survivant marginal au sein des structures de
            résistance interne du camp.
          </p>

            <div className="pl-8 border-l-2 border-[#D4770A] py-4 mb-8 bg-[#186974]/20">
            <h4 className="font-bold text-sm uppercase mb-2 text-white/80">
              Témoignage de l&apos;Horreur
            </h4>
            <p className="text-sm italic text-white/50">
              &quot;Faim permanente, violence quotidienne, disparition des
              compagnons et mort omniprésente... Près de 55 000 détenus ont péri
              dans l&apos;ombre de ce camp.&quot;
            </p>
          </div>
        </Section>

        <Section
          id="mythomanie"
          title="Mythomanie & Après-Guerre"
          icon={Scale}
        >
          <p className="mb-6">
            Dès 1945, son discours s&apos;amplifie. En 1955, la Sûreté
            nationale le qualifie officiellement de{" "}
            <span className="font-bold uppercase tracking-tighter text-sm">
              mythomane
            </span>
            . Il se met en scène sous des identités multiples : héros mutilé,
            philosophe reconnu, détenteur de documents secrets explosifs.
          </p>
        </Section>

        <Section id="conclusion" title="Conclusion" icon={Quote}>
          <p className="text-2xl leading-relaxed italic font-serif text-white/60">
            &quot;Robert Bouteille n&apos;est ni un faux déporté ni un héros
            oublié. Il est un survivant psychiquement fragile, dont la parole
            est brouillée par un besoin de reconnaissance mal maîtrisé.&quot;
          </p>
        </Section>

        <footer className="mt-48 pt-12 border-t border-[#186974]/30 flex flex-col md:flex-row justify-between items-start gap-8 opacity-50 hover:opacity-100 transition-opacity">
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/30">
            <p className="mb-2">Sources Archive :</p>
            <ul className="list-none p-0 m-0">
              <li>Lalieu Olivier &quot;La zone grise&quot;</li>
              <li>Mouvement national contre le racisme (LICA)</li>
            </ul>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-right text-white/30">
            Dossier Classé - Reproduction interdite sans autorisation
          </div>
        </footer>
      </main>

      <div className="fixed top-10 right-10 pointer-events-none opacity-[0.12] hidden xl:block">
        <div className="border-4 border-[#D4770A] text-[#D4770A] px-6 py-2 font-mono font-black text-4xl rotate-12 tracking-tighter">
          ARCHIVE 001
        </div>
      </div>
    </div>
  );
}

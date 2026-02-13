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
  Clock,
  BookOpen,
  Eye,
  ChevronRight,
  Map,
  ArrowRight,
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
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-10 last:mb-0"
  >
    <div className="bg-[#f7f6f3] rounded-lg p-8 md:p-10 border border-[#e2e0da]">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e2e0da]">
        <div className="w-9 h-9 rounded-md bg-[#2c2c2b] flex items-center justify-center">
          <Icon className="w-4 h-4 text-[#F5CB5C]" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-[#2c2c2b]">
          {title}
        </h2>
      </div>
      <div className="leading-relaxed text-[#4a4a47]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
        {children}
      </div>
    </div>
  </motion.section>
);

export default function Home() {
  const timelineEvents = [
    { year: "1904", label: "Naissance", detail: "Auchy-la-Montagne" },
    { year: "1930s", label: "Premiers internements", detail: "Troubles psychiatriques" },
    { year: "1940", label: "Entrée en résistance", detail: "Réseau Buckmaster / SOE" },
    { year: "Nov. 1943", label: "Arrestation", detail: "Faux papiers" },
    { year: "Jan. 1944", label: "Déportation", detail: "Buchenwald" },
    { year: "Avr. 1945", label: "Libération", detail: "Survivant, amputé" },
    { year: "1955", label: "Rapport Sûreté", detail: "Qualifié de mythomane" },
  ];

  const stats = [
    { value: "15", unit: "mois", label: "de détention à Buchenwald" },
    { value: "55 000", unit: "", label: "détenus morts dans le camp" },
    { value: "1955", unit: "", label: "rapport de la Sûreté nationale" },
  ];

  return (
    <div className="min-h-screen bg-[#eceae4] text-[#2c2c2b] overflow-x-hidden selection:bg-[#F5CB5C] selection:text-[#2c2c2b]">

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">

        {/* HEADER - Full width */}
        <header className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-block px-3 py-1 mb-6 rounded-full bg-[#2c2c2b] text-[#F5CB5C] font-medium text-[11px] uppercase tracking-[0.15em]"
              >
                Dossier confidentiel
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-1 text-[#2c2c2b]"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Robert
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-normal italic tracking-tight mb-6 text-[#6b6b66]"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Bouteille
              </motion.h1>

              <div className="h-px w-16 bg-[#F5CB5C] mb-6" />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-6 text-sm text-[#7a7a74]"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#9a9a93]" />
                  1904 – ?
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#9a9a93]" />
                  Auchy-la-Montagne
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#9a9a93]" />
                  Professeur de Philosophie
                </div>
              </motion.div>
            </div>

            {/* Stats cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4 lg:gap-5"
            >
              {stats.map((stat, i) => (
                <div key={i} className="bg-[#f7f6f3] border border-[#e2e0da] rounded-lg px-5 py-4 text-center min-w-[110px]">
                  <div className="text-2xl font-bold text-[#2c2c2b]" style={{ fontFamily: "'Georgia', serif" }}>
                    {stat.value}
                  </div>
                  {stat.unit && <div className="text-xs text-[#F5CB5C] font-semibold uppercase">{stat.unit}</div>}
                  <div className="text-[11px] text-[#9a9a93] mt-1 leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </header>

        {/* NAVIGATION rapide */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-14 bg-[#f7f6f3] border border-[#e2e0da] rounded-lg p-5 flex flex-wrap gap-3"
        >
          {[
            { id: "identite", label: "Profil", icon: User },
            { id: "fragilite", label: "Fragilité", icon: AlertTriangle },
            { id: "resistance", label: "Résistance", icon: Shield },
            { id: "chronologie", label: "Chronologie", icon: Clock },
            { id: "buchenwald", label: "Buchenwald", icon: History },
            { id: "mythomanie", label: "Mythomanie", icon: Scale },
              { id: "conclusion", label: "Conclusion", icon: BookOpen },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-[#5a5a55] hover:bg-[#eceae4] hover:text-[#2c2c2b] transition-colors"
              >
                <item.icon className="w-3.5 h-3.5 text-[#9a9a93]" />
                {item.label}
              </a>
            ))}
            <a
              href="/carte"
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold bg-[#2c2c2b] text-[#F5CB5C] hover:bg-[#3a3a38] transition-colors ml-auto"
            >
              <Map className="w-3.5 h-3.5" />
              Carte interactive
            </a>
          </motion.nav>

        {/* TWO COLUMN LAYOUT for first two sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <Section id="identite" title="Profil & Origines" icon={User}>
            <p className="text-base leading-relaxed mb-4">
              Fils de Désiré Bouteille, ancien député, Robert Bouteille appartient
              à un milieu social politisé et cultivé.
            </p>
            <p className="text-base leading-relaxed">
              Toutefois, son parcours est
              profondément structuré par une{" "}
              <span className="underline decoration-[#F5CB5C] underline-offset-4 decoration-2 font-semibold text-[#2c2c2b]">
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
            <div className="bg-[#eceae4] rounded-md p-4 border-l-3 border-[#F5CB5C] mb-5 italic text-[#5a5a55]" style={{ fontFamily: "'Georgia', serif", borderLeftWidth: '3px' }}>
              <Quote className="w-4 h-4 text-[#F5CB5C] mb-2" />
              &quot;Un comportement impulsif, conflictuel et désorganisé.&quot;
            </div>
            <p className="text-sm">
              Interné à plusieurs reprises avant 1939,
              ses archives administratives attestent d&apos;une fragilité
              antérieure à la déportation. Le traumatisme concentrationnaire a pu aggraver ces troubles.
            </p>
          </Section>
        </div>

        {/* FULL WIDTH - Engagement */}
        <Section
          id="resistance"
          title="Engagement & Arrestation"
          icon={Shield}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <p className="mb-4">
                Après la défaite de 1940, il rejoint les réseaux{" "}
                <strong className="text-[#2c2c2b] font-semibold">Buckmaster</strong>{" "}
                (SOE britannique). Il participe activement à la circulation de faux
                papiers, ce qui conduit à son arrestation par les autorités
                allemandes en novembre 1943.
              </p>
              <p className="text-sm text-[#7a7a74]">
                Le réseau Buckmaster, rattaché au Special Operations Executive britannique,
                coordonnait des opérations clandestines en France occupée. L&apos;implication de
                Bouteille dans la fabrication de faux documents en faisait un maillon essentiel
                de la chaîne de résistance locale.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-md border border-[#e2e0da] p-5 bg-[#eceae4]">
                <div className="w-full h-0.5 bg-[#F5CB5C] rounded-full mb-4" />
                <h3 className="text-xs font-semibold uppercase mb-2 text-[#2c2c2b] tracking-wide">
                  Réseau clandestin
                </h3>
                <p className="text-sm text-[#7a7a74]">
                  Buckmaster / SOE
                </p>
              </div>
              <div className="rounded-md border border-[#e2e0da] p-5 bg-[#eceae4]">
                <div className="w-full h-0.5 bg-[#F5CB5C] rounded-full mb-4" />
                <h3 className="text-xs font-semibold uppercase mb-2 text-[#2c2c2b] tracking-wide">
                  Motif d&apos;arrestation
                </h3>
                <p className="text-sm text-[#7a7a74]">
                  Faux documents d&apos;identité
                </p>
              </div>
              <div className="rounded-md border border-[#e2e0da] p-5 bg-[#eceae4]">
                <div className="w-full h-0.5 bg-[#F5CB5C] rounded-full mb-4" />
                <h3 className="text-xs font-semibold uppercase mb-2 text-[#2c2c2b] tracking-wide">
                  Date d&apos;arrestation
                </h3>
                <p className="text-sm text-[#7a7a74]">
                  Novembre 1943
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* CHRONOLOGIE - Full width timeline */}
        <motion.section
          id="chronologie"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="bg-[#f7f6f3] rounded-lg p-8 md:p-10 border border-[#e2e0da]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e2e0da]">
              <div className="w-9 h-9 rounded-md bg-[#2c2c2b] flex items-center justify-center">
                <Clock className="w-4 h-4 text-[#F5CB5C]" />
              </div>
              <h2 className="text-xl font-semibold tracking-tight text-[#2c2c2b]">
                Chronologie
              </h2>
            </div>
            <div className="relative">
              {/* Ligne verticale */}
              <div className="absolute left-[72px] top-0 bottom-0 w-px bg-[#e2e0da] hidden md:block" />
              <div className="space-y-0">
                {timelineEvents.map((event, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-4 md:gap-6 py-4 group"
                  >
                    <div className="text-sm font-semibold text-[#9a9a93] w-[56px] text-right shrink-0 pt-0.5">
                      {event.year}
                    </div>
                    <div className="relative hidden md:flex items-center justify-center shrink-0">
                      <div className="w-3 h-3 rounded-full bg-[#e2e0da] group-hover:bg-[#F5CB5C] transition-colors border-2 border-[#f7f6f3]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-[#2c2c2b]">{event.label}</div>
                      <div className="text-xs text-[#9a9a93] mt-0.5">{event.detail}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* TWO COLUMN - Buchenwald + Mythomanie */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <Section
            id="buchenwald"
            title="Buchenwald"
            icon={History}
          >
            <p className="mb-4 text-sm">
              Déporté en janvier 1944, Bouteille survit quinze mois à Buchenwald.
              Amputé de la jambe droite, il est affecté au{" "}
              <strong className="text-[#2c2c2b] font-semibold">
                Bloc des Invalides
              </strong>
              , secteur réservé aux détenus inaptes au travail.
            </p>
            <div className="bg-[#eceae4] rounded-md p-4 border-l-3 border-[#F5CB5C]" style={{ borderLeftWidth: '3px' }}>
              <p className="text-sm italic text-[#5a5a55]" style={{ fontFamily: "'Georgia', serif" }}>
                &quot;Faim permanente, violence quotidienne, disparition des
                compagnons et mort omniprésente...&quot;
              </p>
            </div>
          </Section>

          <Section
            id="mythomanie"
            title="Mythomanie & Après-Guerre"
            icon={Scale}
          >
            <p className="mb-4 text-sm">
              Dès 1945, son discours s&apos;amplifie. En 1955, la Sûreté
              nationale le qualifie officiellement de{" "}
              <span className="font-semibold text-[#2c2c2b] bg-[#F5CB5C]/20 px-1.5 py-0.5 rounded text-sm">
                mythomane
              </span>.
            </p>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 text-sm">
                <Eye className="w-4 h-4 text-[#F5CB5C] mt-0.5 shrink-0" />
                <span className="text-[#5a5a55]">Se présente comme héros mutilé de guerre</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Eye className="w-4 h-4 text-[#F5CB5C] mt-0.5 shrink-0" />
                <span className="text-[#5a5a55]">Revendique un statut de philosophe reconnu</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Eye className="w-4 h-4 text-[#F5CB5C] mt-0.5 shrink-0" />
                <span className="text-[#5a5a55]">Prétend détenir des documents secrets explosifs</span>
              </div>
            </div>
          </Section>
        </div>

        {/* CONCLUSION - Full width */}
        <Section id="conclusion" title="Conclusion" icon={BookOpen}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed italic text-[#5a5a55]" style={{ fontFamily: "'Georgia', serif" }}>
                &quot;Robert Bouteille n&apos;est ni un faux déporté ni un héros
                oublié. Il est un survivant psychiquement fragile, dont la parole
                est brouillée par un besoin de reconnaissance mal maîtrisé.&quot;
              </p>
            </div>
            <div className="bg-[#eceae4] rounded-md p-5 border border-[#e2e0da]">
              <div className="text-xs uppercase font-semibold text-[#9a9a93] tracking-wide mb-3">Statut du dossier</div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#F5CB5C]" />
                <span className="text-sm font-semibold text-[#2c2c2b]">Classé</span>
              </div>
              <p className="text-xs text-[#9a9a93]">
                Analyse croisée des sources administratives, médicales et judiciaires.
              </p>
            </div>
          </div>
        </Section>

        <div className="h-px w-full bg-[#d5d3cd] mt-16 mb-10" />

          <footer className="flex flex-col md:flex-row justify-between items-start gap-6 text-xs text-[#9a9a93]">
            <div>
              <p className="font-semibold text-[#7a7a74] mb-2 uppercase tracking-wide">Sources</p>
              <ul className="list-none p-0 m-0 space-y-1">
                <li>Lalieu Olivier — &quot;La zone grise&quot;</li>
                <li>Mouvement national contre le racisme (LICA)</li>
                <li>Archives de la Sûreté nationale — Rapport 1955</li>
              </ul>
            </div>
            <div className="text-right text-[#b0b0a8]">
              Dossier classé — Reproduction interdite
            </div>
          </footer>

          {/* Lien bas de page */}
          <div className="mt-16 mb-4">
            <a
              href="/dossiers"
              className="group flex items-center justify-between bg-[#f7f6f3] border border-[#e2e0da] rounded-lg px-8 py-6 hover:border-[#F5CB5C] transition-colors"
            >
              <div>
                <p className="text-xs uppercase tracking-wide font-semibold text-[#9a9a93] mb-1">Dossier suivant</p>
                <p className="text-lg font-semibold text-[#2c2c2b] group-hover:text-[#F5CB5C] transition-colors" style={{ fontFamily: "'Georgia', serif" }}>
                  Consulter les autres dossiers
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#9a9a93] group-hover:text-[#F5CB5C] group-hover:translate-x-1 transition-all" />
            </a>
          </div>
      </main>
    </div>
  );
}

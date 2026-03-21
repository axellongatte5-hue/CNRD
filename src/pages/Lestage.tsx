import { MapPin, Calendar, Award, AlertTriangle, Users, FileText, Heart, Shield } from 'lucide-react';
import PersonHeader from '../components/PersonHeader';

const lestageSections = [
  { id: 'hero', label: 'Présentation' },
  { id: 'biographie', label: 'Biographie' },
  { id: 'deportation', label: 'Déportation' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'heritage', label: 'Héritage' },
];

export default function SuzanneLestage() {
  return (
    <div className=\"min-h-screen bg-white\">
      <PersonHeader sections={lestageSections} />
      
      {/* Spacer pour le header fixe */}
      <div className=\"h-16\" />

      {/* Hero Section */}
      <div id=\"hero\" className=\"bg-slate-900 text-white py-20 px-8\">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Suzanne Lestage</h1>
            <p className="text-amber-400 text-xl mb-6">1906 - 1995</p>
            <p className="text-gray-300 text-lg mb-6">Déportée Nacht und Nebel, survivante de Ravensbrück et Mauthausen</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Narbonne, Aude, France</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>3 février 1906</span>
              </div>
              <div className="flex items-center gap-2 text-sm">import { MapPin, Calendar, Award, AlertTriangle, Users, FileText, Heart, Shield } from 'lucide-react';
import PersonHeader from '../components/PersonHeader';

const lestageSections = [
  { id: 'hero', label: 'Présentation' },
  { id: 'biographie', label: 'Biographie' },
  { id: 'deportation', label: 'Déportation' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'heritage', label: 'Héritage' },
];

export default function SuzanneLestage() {
  return (
    <div className="min-h-screen bg-white">
      <PersonHeader sections={lestageSections} />
      
      {/* Spacer pour le header fixe */}
      <div className="h-16" />

      {/* Hero Section */}
      <div id="hero" className="bg-slate-900 text-white py-20 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Suzanne Lestage</h1>
            <p className="text-amber-400 text-xl mb-6">1906 - 1995</p>
            <p className="text-gray-300 text-lg mb-6">Déportée Nacht und Nebel, survivante de Ravensbrück et Mauthausen</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Narbonne, Aude, France</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>3 février 1906</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Matricule n°2123</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 p-8 rounded-lg">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center">
                <Users className="w-12 h-12 text-slate-500" />
              </div>
            </div>
            <p className="text-center text-gray-300 italic">
              &quot;Nacht und Nebel&quot; - Disparue dans la nuit et le brouillard, elle a survécu pour témoigner...
            </p>
          </div>
        </div>
      </div>

      {/* Biographie Section */}
      <div id="biographie" className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Qui était Suzanne Lestage ?</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-amber-50 p-8 rounded-lg">
            <h3 className="font-bold text-gray-800 text-xl mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-amber-600" />
              Identité
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Nom complet :</strong> Suzanne Marie Jeanne Gastonne Lestage</li>
              <li><strong>Née le :</strong> 3 février 1906 à Narbonne (Aude)</li>
              <li><strong>Père :</strong> Gaston Lestage</li>
              <li><strong>Profession :</strong> Couturière</li>
              <li><strong>Décès :</strong> 15 janvier 1995 à Rieux-Volvestre (Haute-Garonne)</li>
              <li><strong>Âge au décès :</strong> 88 ans</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-8 rounded-lg">
            <h3 className="font-bold text-gray-800 text-xl mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-600" />
              Statut de Déportation
            </h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>Classification :</strong> Nacht und Nebel (NN)</p>
              <p><strong>Matricule :</strong> 2123</p>
              <p className="text-sm bg-white p-3 rounded border-l-4 border-red-500">
                Le décret &quot;Nacht und Nebel&quot; du 7 décembre 1941, signé par le maréchal Keitel, 
                ordonnait la déportation de tous les ennemis du Troisième Reich (saboteurs, résistants, opposants) 
                afin qu&apos;ils disparaissent dans le secret total et l&apos;anonymat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div id="parcours" className="bg-gray-50 py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Chronologie du Parcours</h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 via-red-500 to-green-500"></div>

            <div className="space-y-12">
              {/* 1906 */}
              <div className="flex items-center gap-8">
                <div className="w-1/2 text-right">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Naissance</h3>
                  <p className="text-sm text-gray-600">3 février 1906 à Narbonne, Aude</p>
                  <p className="text-xs text-amber-600 mt-1">Fille de Gaston Lestage</p>
                </div>
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-amber-400 rounded-full border-4 border-white shadow"></div>
                </div>
                <div className="w-1/2 text-amber-600 font-bold text-xl">1906</div>
              </div>

              {/* Février 1944 - Arrestation */}
              <div className="flex items-center gap-8">
                <div className="w-1/2 text-right text-red-600 font-bold text-xl">17 Fév 1944</div>
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow"></div>
                </div>
                <div className="w-1/2 bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Déportation depuis Fresnes</h3>
                  <p className="text-sm text-red-600">Prison de Fresnes, proche de Paris</p>
                  <p className="text-xs text-red-600 mt-1">Classée &quot;Nacht und Nebel&quot;</p>
                </div>
              </div>

              {/* Lauban */}
              <div className="flex items-center gap-8">
                <div className="w-1/2 text-right bg-orange-50 p-4 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Prison de Lauban</h3>
                  <p className="text-sm text-orange-600">Pologne (près de Breslau)</p>
                  <p className="text-xs text-orange-600 mt-1">Prison de prévention pour les déportés NN</p>
                </div>
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow"></div>
                </div>
                <div className="w-1/2 text-orange-600 font-bold text-xl">Fév 1944</div>
              </div>

              {/* Ravensbrück */}
              <div className="flex items-center gap-8">
                <div className="w-1/2 text-right text-red-600 font-bold text-xl">14 Oct 1944</div>
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow"></div>
                </div>
                <div className="w-1/2 bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Arrivée à Ravensbrück</h3>
                  <p className="text-sm text-red-600">En provenance de Breslau</p>
                  <p className="text-xs text-red-600 mt-1">Camp de concentration pour femmes - 6 mois de détention</p>
                </div>
              </div>

              {/* Mauthausen */}
              <div className="flex items-center gap-8">
                <div className="w-1/2 text-right bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Évacuation vers Mauthausen</h3>
                  <p className="text-sm text-red-600">Départ le 2 mars, arrivée le 7 mars 1945</p>
                  <p className="text-xs text-red-600 mt-1">Une des rares femmes à Mauthausen</p>
                </div>
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow"></div>
                </div>
                <div className="w-1/2 text-red-600 font-bold text-xl">Mars 1945</div>
              </div>

              {/* Libération */}
              <div className="flex items-center gap-8">
                <div className="w-1/2 text-right text-green-600 font-bold text-xl">22 Avr 1945</div>
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow"></div>
                </div>
                <div className="w-1/2 bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Libération</h3>
                  <p className="text-sm text-green-600">Libérée par la Croix-Rouge</p>
                  <p className="text-xs text-green-600 mt-1">Rapatriée à Annecy le 25 avril 1945</p>
                </div>
              </div>

              {/* Décès */}
              <div className="flex items-center gap-8">
                <div className="w-1/2 text-right bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Décès</h3>
                  <p className="text-sm text-gray-600">15 janvier 1995 à Rieux-Volvestre</p>
                  <p className="text-xs text-gray-600 mt-1">Haute-Garonne, à l&apos;âge de 88 ans</p>
                </div>
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-gray-400 rounded-full border-4 border-white shadow"></div>
                </div>
                <div className="w-1/2 text-gray-600 font-bold text-xl">1995</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deportation Details */}
      <div id="deportation" className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Les Lieux de Détention</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900 text-white p-6 rounded-lg">
              <h3 className="text-amber-400 font-bold text-lg mb-3">Fresnes</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Prison située près de Paris. Point de départ de la déportation le 17 février 1944.
              </p>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-lg">
              <h3 className="text-amber-400 font-bold text-lg mb-3">Aachen (Aix-la-Chapelle)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Prison pour hommes et femmes. Premier lieu de déportation des femmes françaises &quot;NN&quot;, 
                en attente du jugement à Cologne.
              </p>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-lg">
              <h3 className="text-amber-400 font-bold text-lg mb-3">Lauban (Luban)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Situé à l&apos;ouest de Breslau en Pologne. Prison de prévention pour les &quot;NN&quot; 
                avant le passage devant le tribunal de Breslau.
              </p>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-lg">
              <h3 className="text-amber-400 font-bold text-lg mb-3">Breslau (Wroclaw)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Capitale de la Silésie où siège le tribunal chargé des affaires &quot;NN&quot;. 
                Comprend deux prisons : Freiburgstrasse et Kletschkaustrasse.
              </p>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-lg">
              <h3 className="text-amber-400 font-bold text-lg mb-3">Ravensbrück</h3>"import { Link } from 'react-router-dom';
import { MapPin, Users } from 'lucide-react';

export default function Lestage() {
  const timelineEvents = [
    { year: '1944', event: 'Arrestation', detail: 'Arrêtée pour faits de résistance' },
    { year: '14 Oct 1944', event: 'Déportation à Ravensbrück', detail: 'Principal camp de concentration pour femmes' },
    { year: '1945', event: 'Transfert à Mauthausen', detail: 'Lors des évacuations de fin de guerre' },
    { year: '22 Avr 1945', event: 'Libération', detail: 'Libérée par la Croix-Rouge' },
  ];

  return (
    <div className=\"min-h-screen bg-slate-900\">
      {/* HERO */}
      <section className=\"pt-8 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-slate-800 to-slate-900\">
        <div className=\"mx-auto max-w-4xl px-6\">
          <Link 
            to=\"/personnages\" 
            className=\"inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors mb-8\"
          >
            <span>←</span>
            <span className=\"text-sm\">Retour aux personnages</span>
          </Link>
          
          <div className=\"text-center\">
            <div className=\"w-32 h-32 mx-auto mb-8 bg-slate-700 rounded-lg flex items-center justify-center border border-slate-600\">
              <Users className=\"w-16 h-16 text-slate-500\" />
            </div>
            <p className=\"text-sm font-medium uppercase tracking-[0.3em] text-amber-400 mb-4\">
              Résistante française
            </p>
            <h1 className=\"font-serif text-5xl font-bold leading-tight tracking-tight md:text-7xl text-white\">
              Suzanne Lestage
            </h1>
            <p className=\"mt-6 text-lg text-slate-300 max-w-2xl mx-auto\">
              Résistante française, déportée à Ravensbrück puis Mauthausen. Son courage témoigne de l'engagement des femmes dans la Résistance.
            </p>
            <div className=\"mt-8 h-px w-24 bg-amber-500 mx-auto\" />
          </div>
        </div>
      </section>

      {/* SÉPARATION VISUELLE */}
      <div className=\"relative\">
        <div className=\"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent\" />
        <div className=\"bg-slate-900 py-8\">
          <div className=\"mx-auto flex justify-center\">
            <div className=\"flex items-center gap-4\">
              <div className=\"h-px w-12 bg-slate-700\" />
              <div className=\"h-2 w-2 rotate-45 border border-amber-500/50\" />
              <div className=\"h-px w-12 bg-slate-700\" />
            </div>
          </div>
        </div>
      </div>

      {/* CHRONOLOGIE */}
      <section className=\"bg-slate-800 py-20\">
        <div className=\"mx-auto max-w-4xl px-6\">
          <p className=\"text-sm font-medium uppercase tracking-[0.3em] text-amber-400\">
            Parcours
          </p>
          <h2 className=\"mt-3 font-serif text-3xl font-bold text-white md:text-4xl\">
            Chronologie
          </h2>
          <div className=\"mt-4 h-px w-16 bg-amber-500\" />

          <div className=\"mt-12 space-y-8\">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className=\"flex gap-6\">
                <div className=\"flex flex-col items-center\">
                  <div className=\"w-3 h-3 bg-amber-500 rounded-full border-2 border-slate-800\"></div>
                  <div className=\"w-px flex-1 bg-slate-600\"></div>
                </div>
                <div className=\"pb-6 flex-1\">
                  <p className=\"text-sm font-semibold uppercase tracking-widest text-amber-400 mb-1\">{event.year}</p>
                  <h3 className=\"font-serif text-xl font-bold text-white mb-2\">{event.event}</h3>
                  <p className=\"text-slate-300 leading-relaxed\">{event.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RAVENSBRÜCK */}
      <section className=\"mx-auto max-w-4xl px-6 py-20\">
        <p className=\"text-sm font-medium uppercase tracking-[0.3em] text-amber-400\">
          Déportation
        </p>
        <h2 className=\"mt-3 font-serif text-3xl font-bold text-white md:text-4xl\">
          Ravensbrück
        </h2>
        <div className=\"mt-4 h-px w-16 bg-amber-500\" />

        <div className=\"mt-12 border-l-2 border-amber-500 pl-6\">
          <p className=\"text-lg leading-relaxed text-slate-300 mb-6\">
            Ravensbrück était le principal camp de concentration nazi réservé aux femmes. Plus de 130 000 femmes y furent internées entre 1939 et 1945.
          </p>
          <p className=\"text-lg leading-relaxed text-slate-300 mb-6\">
            Suzanne Lestage y est déportée le 14 octobre 1944. Elle y subit les conditions terribles du camp : travail forcé, malnutrition, maladies.
          </p>
          <p className=\"text-lg leading-relaxed text-slate-300\">
            Dans les derniers mois de la guerre, elle est transférée à Mauthausen lors des évacuations chaotiques organisées par les SS.
          </p>
        </div>
      </section>

      {/* LIBÉRATION */}
      <section className=\"bg-slate-800 py-20\">
        <div className=\"mx-auto max-w-4xl px-6\">
          <p className=\"text-sm font-medium uppercase tracking-[0.3em] text-amber-400\">
            La fin
          </p>
          <h2 className=\"mt-3 font-serif text-3xl font-bold text-white md:text-4xl\">
            Libération
          </h2>
          <div className=\"mt-4 h-px w-16 bg-amber-500\" />

          <div className=\"mt-12 border-l-2 border-amber-500 pl-6\">
            <p className=\"text-lg leading-relaxed text-slate-300 mb-6\">
              Le 22 avril 1945, Suzanne Lestage est libérée par la Croix-Rouge, quelques jours avant la fin de la guerre.
            </p>
            <p className=\"text-lg leading-relaxed text-slate-300\">
              Son témoignage contribue à la mémoire de la déportation des femmes et de leur résistance face à la barbarie nazie.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className=\"border-t border-slate-700 bg-slate-950\">
        <div className=\"mx-auto max-w-4xl px-6 py-12\">
          <div className=\"flex flex-col items-center gap-4 text-center\">
            <p className=\"font-serif text-lg font-bold text-white\">
              En hommage à Suzanne Lestage
            </p>
            <p className=\"text-sm leading-relaxed text-slate-400\">
              Et à toutes les femmes résistantes et déportées.
            </p>
            <div className=\"mt-4 h-px w-16 bg-amber-500\" />
            <p className=\"text-xs text-slate-500\">
              © 2025 — Devoir de Mémoire
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
"

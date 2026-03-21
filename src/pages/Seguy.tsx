import { MapPin, Calendar, Award, AlertTriangle, Users, BookOpen, Quote, ExternalLink } from 'lucide-react';
import PersonHeader from '../components/PersonHeader';

const seguySections = [
  { id: 'hero', label: 'Présentation' },
  { id: 'biographie', label: 'Biographie' },
  { id: 'resistance', label: 'Résistance' },
  { id: 'deportation', label: 'Déportation' },
  { id: 'temoignage', label: 'Témoignage' },
  { id: 'sources', label: 'Sources' },
];

export default function Seguy() {
  return (
    <div className=\"min-h-screen bg-white\">
      <PersonHeader sections={seguySections} />
      
      {/* Spacer pour le header fixe */}
      <div className=\"h-16\" />

      {/* Hero Section */}
      <div id=\"hero\" className=\"bg-slate-900 text-white py-20 px-8\">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Georges Séguy</h1>
            <p className="text-amber-400 text-xl mb-6">1927 - 1982</p>
            <p className="text-gray-300 text-lg mb-6">Résistant français, déporté à Mauthausen, Secrétaire général de la CGT</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Toulouse, France</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Naissance : 1927</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-amber-400" />
                <span>Secrétaire général CGT (1967-1982)</span>
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
              "Nous n'avons jamais désespéré ; nous avons tous fait dans nos cœurs le serment de venger tous nos morts."
            </p>
          </div>
        </div>
      </div>

      {/* Chronologie */}
      <div id="biographie" className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Chronologie</h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 via-red-500 to-green-500"></div>

          <div className="space-y-12">
            {/* 1927 - Naissance */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Naissance</h3>
                <p className="text-sm text-gray-600">1927 à Toulouse, France</p>
                <p className="text-xs text-blue-600 mt-1">Début d'apprentissage en imprimerie</p>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-amber-400 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 text-amber-600 font-bold text-xl">1927</div>
            </div>

            {/* Engagement */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right text-amber-600 font-bold text-xl">1940s</div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-amber-400 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Engagement dans la Résistance</h3>
                <p className="text-sm text-blue-600">Apprenti chez Henri Lion, imprimeur travaillant pour la Résistance</p>
                <p className="text-xs text-blue-600 mt-1">Adhésion aux Jeunesses communistes et aux FTP</p>
              </div>
            </div>

            {/* Arrestation */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Arrestation</h3>
                <p className="text-sm text-red-600">4 février 1944 - Arrêté par la Gestapo</p>
                <p className="text-xs text-red-600 mt-1">Sur dénonciation, avec tout le personnel de l'imprimerie</p>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 text-red-600 font-bold text-xl">4 Fév 1944</div>
            </div>

            {/* Prison */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right text-red-600 font-bold text-xl">Fév 1944</div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Prison de Toulouse</h3>
                <p className="text-sm text-red-600">3 semaines d'emprisonnement</p>
                <p className="text-xs text-red-600 mt-1">Puis transfert au camp de Royallieu à Compiègne</p>
              </div>
            </div>

            {/* Déportation */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Déportation</h3>
                <p className="text-sm text-red-600">21 mars 1944 : Convoi vers l'Autriche</p>
                <p className="text-xs text-red-600 mt-1">Arrivée le 26 mars au camp de Mauthausen (matricule 60581)</p>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 text-red-600 font-bold text-xl">21 Mars 1944</div>
            </div>

            {/* Gusen II */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right text-red-600 font-bold text-xl">1944</div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Transfert à Gusen II</h3>
                <p className="text-sm text-red-600">Camp annexe de Mauthausen</p>
                <p className="text-xs text-red-600 mt-1">Conditions de détention extrêmes</p>
              </div>
            </div>

            {/* Libération */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Libération</h3>
                <p className="text-sm text-green-600">28 avril 1945 - Libéré par la Croix-Rouge</p>
                <p className="text-xs text-green-600 mt-1">Évacuation vers la Suisse puis Annemasse</p>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 text-green-600 font-bold text-xl">28 Avr 1945</div>
            </div>

            {/* Retour */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right text-green-600 font-bold text-xl">5 Mai 1945</div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Retour à Toulouse</h3>
                <p className="text-sm text-green-600">Pèse 38 kilos, "a du mal à refaire surface"</p>
                <p className="text-xs text-green-600 mt-1">Doit renoncer au métier de typographe (séquelles de pleurésie)</p>
              </div>
            </div>

            {/* CGT */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Secrétaire général de la CGT</h3>
                <p className="text-sm text-blue-600">Figure emblématique du syndicalisme français</p>
                <p className="text-xs text-blue-600 mt-1">Mandat de 1967 à 1982</p>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 text-blue-600 font-bold text-xl">1967-1982</div>
            </div>

            {/* Décès */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right text-gray-600 font-bold text-xl">1982</div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-gray-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Décès</h3>
                <p className="text-sm text-gray-600">Fin d'une vie de résistance et d'engagement</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Résistance */}
      <div id="resistance" className="bg-gray-50 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">L'Engagement dans la Résistance</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                Georges Séguy entre en apprentissage dans l'imprimerie d'un petit patron de Toulouse, <strong>Henri Lion</strong>, qui travaille clandestinement pour la Résistance. Dans ce contexte, il adhère aux <strong>Jeunesses communistes</strong> et devient responsable d'un groupe des <strong>Francs-tireurs et partisans français (FTP)</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Son engagement précoce dans la lutte contre l'occupant nazi fait de lui, malgré son jeune âge, un maillon essentiel du réseau de résistance toulousain.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Le 4 février 1944, sur dénonciation, il est arrêté par la Gestapo avec tout le personnel de l'imprimerie, y compris le patron Henri Lion qui sera torturé lors des interrogatoires. La police ignore alors les activités exactes de Georges Séguy.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-amber-600" />
                  Organisations
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Jeunesses communistes</li>
                  <li>• Francs-tireurs et partisans français (FTP)</li>
                  <li>• Imprimerie clandestine</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Zones d'action
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Toulouse (Base)</li>
                  <li>• Région toulousaine</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Déportation */}
      <div id="deportation" className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Mauthausen - Camp de la Mort</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 text-white p-8 rounded-lg">
              <h3 className="text-amber-400 font-bold text-xl mb-4">L'Enfer de Mauthausen</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Après trois semaines à la prison de Toulouse, Georges Séguy est envoyé au camp de Royallieu à Compiègne, puis déporté le 21 mars 1944 vers l'Autriche.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Il arrive le 26 mars 1944 au camp de <strong className="text-amber-400">Mauthausen</strong> où il reçoit le <strong className="text-amber-400">matricule 60581</strong>, avant d'être transféré au camp annexe de <strong className="text-amber-400">Gusen II</strong>.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Les camps de Gusen et Mauthausen sont finalement libérés fin avril 1945 par les armées américaine et soviétique.
              </p>
            </div>

            <div className="bg-amber-50 p-8 rounded-lg flex flex-col justify-center items-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 text-xl mb-4 text-center">Matricule 60581</h3>
              <p className="text-gray-700 text-center mb-4">
                Déporté à seulement 17 ans, Georges Séguy survit à l'horreur des camps nazis.
              </p>
              <div className="text-sm text-gray-600 text-center">
                <p>Libéré le 28 avril 1945 par la Croix-Rouge</p>
                <p className="mt-1">Poids au retour : 38 kilos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Témoignage */}
      <div id="temoignage" className="bg-slate-900 text-white py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-400">Témoignage (à 18 ans)</h2>
          
          <div className="space-y-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-amber-400 font-bold mb-3">La découverte du camp et l'annonce de la mort</h3>
                  <p className="text-gray-300 italic mb-2">
                    "Nous sommes arrivés à MAUTHAUSEN, camp de la mort […] une immenseimport { MapPin, Calendar, Award, AlertTriangle, Users, BookOpen, Quote, ExternalLink } from 'lucide-react';
import PersonHeader from '../components/PersonHeader';

const seguySections = [
  { id: 'hero', label: 'Présentation' },
  { id: 'biographie', label: 'Biographie' },
  { id: 'resistance', label: 'Résistance' },
  { id: 'deportation', label: 'Déportation' },
  { id: 'temoignage', label: 'Témoignage' },
  { id: 'sources', label: 'Sources' },
];

export default function Seguy() {
  return (
    <div className="min-h-screen bg-white">
      <PersonHeader sections={seguySections} />
      
      {/* Spacer pour le header fixe */}
      <div className="h-16" />

      {/* Hero Section */}
      <div id="hero" className="bg-slate-900 text-white py-20 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Georges Séguy</h1>
            <p className="text-amber-400 text-xl mb-6">1927 - 1982</p>
            <p className="text-gray-300 text-lg mb-6">Résistant français, déporté à Mauthausen, Secrétaire général de la CGT</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Toulouse, France</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Naissance : 1927</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-amber-400" />
                <span>Secrétaire général CGT (1967-1982)</span>
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
              "Nous n'avons jamais désespéré ; nous avons tous fait dans nos cœurs le serment de venger tous nos morts."
            </p>
          </div>
        </div>
      </div>

      {/* Chronologie */}
      <div id="biographie" className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Chronologie</h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 via-red-500 to-green-500"></div>

          <div className="space-y-12">
            {/* 1927 - Naissance */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Naissance</h3>
                <p className="text-sm text-gray-600">1927 à Toulouse, France</p>
                <p className="text-xs text-blue-600 mt-1">Début d'apprentissage en imprimerie</p>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-amber-400 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 text-amber-600 font-bold text-xl">1927</div>
            </div>

            {/* Engagement */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right text-amber-600 font-bold text-xl">1940s</div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-amber-400 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Engagement dans la Résistance</h3>
                <p className="text-sm text-blue-600">Apprenti chez Henri Lion, imprimeur travaillant pour la Résistance</p>
                <p className="text-xs text-blue-600 mt-1">Adhésion aux Jeunesses communistes et aux FTP</p>
              </div>
            </div>

            {/* Arrestation */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Arrestation</h3>
                <p className="text-sm text-red-600">4 février 1944 - Arrêté par la Gestapo</p>
                <p className="text-xs text-red-600 mt-1">Sur dénonciation, avec tout le personnel de l'imprimerie</p>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 text-red-600 font-bold text-xl">4 Fév 1944</div>
            </div>

            {/* Prison */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right text-red-600 font-bold text-xl">Fév 1944</div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Prison de Toulouse</h3>
                <p className="text-sm text-red-600">3 semaines d'emprisonnement</p>
                <p className="text-xs text-red-600 mt-1">Puis transfert au camp de Royallieu à Compiègne</p>
              </div>
            </div>

            {/* Déportation */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Déportation</h3>
                <p className="text-sm text-red-600">21 mars 1944 : Convoi vers l'Autriche</p>
                <p className="text-xs text-red-600 mt-1">Arrivée le 26 mars au camp de Mauthausen (matricule 60581)</p>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 text-red-600 font-bold text-xl">21 Mars 1944</div>
            </div>

            {/* Gusen II */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right text-red-600 font-bold text-xl">1944</div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Transfert à Gusen II</h3>
                <p className="text-sm text-red-600">Camp annexe de Mauthausen</p>
                <p className="text-xs text-red-600 mt-1">Conditions de détention extrêmes</p>
              </div>
            </div>

            {/* Libération */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Libération</h3>
                <p className="text-sm text-green-600">28 avril 1945 - Libéré par la Croix-Rouge</p>
                <p className="text-xs text-green-600 mt-1">Évacuation vers la Suisse puis Annemasse</p>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 text-green-600 font-bold text-xl">28 Avr 1945</div>
            </div>

            {/* Retour */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right text-green-600 font-bold text-xl">5 Mai 1945</div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Retour à Toulouse</h3>
                <p className="text-sm text-green-600">Pèse 38 kilos, "a du mal à refaire surface"</p>
                <p className="text-xs text-green-600 mt-1">Doit renoncer au métier de typographe (séquelles de pleurésie)</p>
              </div>
            </div>

            {/* CGT */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Secrétaire général de la CGT</h3>
                <p className="text-sm text-blue-600">Figure emblématique du syndicalisme français</p>
                <p className="text-xs text-blue-600 mt-1">Mandat de 1967 à 1982</p>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 text-blue-600 font-bold text-xl">1967-1982</div>
            </div>

            {/* Décès */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right text-gray-600 font-bold text-xl">1982</div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-gray-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Décès</h3>
                <p className="text-sm text-gray-600">Fin d'une vie de résistance et d'engagement</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Résistance */}
      <div id="resistance" className="bg-gray-50 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">L'Engagement dans la Résistance</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                Georges Séguy entre en apprentissage dans l'imprimerie d'un petit patron de Toulouse, <strong>Henri Lion</strong>, qui travaille clandestinement pour la Résistance. Dans ce contexte, il adhère aux <strong>Jeunesses communistes</strong> et devient responsable d'un groupe des <strong>Francs-tireurs et partisans français (FTP)</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Son engagement précoce dans la lutte contre l'occupant nazi fait de lui, malgré son jeune âge, un maillon essentiel du réseau de résistance toulousain.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Le 4 février 1944, sur dénonciation, il est arrêté par la Gestapo avec tout le personnel de l'imprimerie, y compris le patron Henri Lion qui sera torturé lors des interrogatoires. La police ignore alors les activités exactes de Georges Séguy.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-amber-600" />
                  Organisations
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Jeunesses communistes</li>
                  <li>• Francs-tireurs et partisans français (FTP)</li>
                  <li>• Imprimerie clandestine</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Zones d'action
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Toulouse (Base)</li>
                  <li>• Région toulousaine</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Déportation */}
      <div id="deportation" className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Mauthausen - Camp de la Mort</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 text-white p-8 rounded-lg">
              <h3 className="text-amber-400 font-bold text-xl mb-4">L'Enfer de Mauthausen</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Après trois semaines à la prison de Toulouse, Georges Séguy est envoyé au camp de Royallieu à Compiègne, puis déporté le 21 mars 1944 vers l'Autriche.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Il arrive le 26 mars 1944 au camp de <strong className="text-amber-400">Mauthausen</strong> où il reçoit le <strong className="text-amber-400">matricule 60581</strong>, avant d'être transféré au camp annexe de <strong className="text-amber-400">Gusen II</strong>.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Les camps de Gusen et Mauthausen sont finalement libérés fin avril 1945 par les armées américaine et soviétique.
              </p>
            </div>

            <div className="bg-amber-50 p-8 rounded-lg flex flex-col justify-center items-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 text-xl mb-4 text-center">Matricule 60581</h3>
              <p className="text-gray-700 text-center mb-4">
                Déporté à seulement 17 ans, Georges Séguy survit à l'horreur des camps nazis.
              </p>
              <div className="text-sm text-gray-600 text-center">
                <p>Libéré le 28 avril 1945 par la Croix-Rouge</p>
                <p className="mt-1">Poids au retour : 38 kilos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Témoignage */}
      <div id="temoignage" className="bg-slate-900 text-white py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-400">Témoignage (à 18 ans)</h2>
          
          <div className="space-y-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-amber-400 font-bold mb-3">La découverte du camp et l'annonce de la mort</h3>
                  <p className="text-gray-300 italic mb-2">
                    "Nous sommes arrivés à MAUTHAUSEN, camp de la mort […] une immense tête de mort […] où l'on lisait au-dessous : camp d'extermination."
                  </p>
                  <p className="text-gray-300 italic">
                    "Vous entrez ici pour ne plus jamais en sortir."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-red-400 font-bold mb-3">La description directe de la barbarie nazie</h3>
                  <p className="text-gray-300 italic mb-2">"Cinq façons de mettre à mort à Mauthausen."</p>
                  <p className="text-gray-300 italic mb-2">"Les chambres à gaz, la piqûre au pétrole […] la balle dans la nuque…"</p>
                  <p className="text-gray-300 italic mb-2">"Le transport de colis de 70 kilos suivi de coups de matraque jusqu'à ce que la mort s'ensuive."</p>
                  <p className="text-gray-300 italic">"Des hommes vi"import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users, AlertTriangle } from 'lucide-react';

export default function Seguy() {
  const timelineEvents = [
    { year: '1927', event: 'Naissance à Toulouse', detail: 'Début d'apprentissage en imprimerie' },
    { year: '1940s', event: 'Engagement dans la Résistance', detail: 'Apprenti chez Henri Lion, imprimeur travaillant pour la Résistance. Adhésion aux Jeunesses communistes et aux FTP' },
    { year: '4 Fév 1944', event: 'Arrestation', detail: 'Arrêté par la Gestapo sur dénonciation, avec tout le personnel de l'imprimerie' },
    { year: '1944', event: 'Déportation à Mauthausen', detail: 'Camp de catégorie III, le plus dur du système nazi' },
    { year: '5 Mai 1945', event: 'Libération', detail: 'Libération du camp par les troupes américaines' },
    { year: '1967-1982', event: 'Secrétaire général de la CGT', detail: 'Carrière syndicale au service des travailleurs' },
  ];

  const keyNumbers = [
    { number: '16', label: 'ans lors de son arrestation' },
    { number: '1944', label: 'année de déportation' },
    { number: '15', label: 'ans de secrétariat à la CGT' },
    { number: '55', label: 'ans au moment de son décès' },
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
          
          <div className=\"grid md:grid-cols-2 gap-12 items-center\">
            <div>
              <p className=\"text-sm font-medium uppercase tracking-[0.3em] text-amber-400 mb-4\">
                1927 — 1982
              </p>
              <h1 className=\"font-serif text-5xl font-bold leading-tight tracking-tight md:text-6xl text-white\">
                Georges Séguy
              </h1>
              <p className=\"mt-4 text-lg text-slate-300\">Résistant français, déporté à Mauthausen, Secrétaire général de la CGT</p>
              <div className=\"mt-6 flex flex-col gap-3\">
                <div className=\"flex items-center gap-2 text-sm text-slate-400\">
                  <MapPin className=\"w-4 h-4 text-amber-400\" />
                  <span>Toulouse, France</span>
                </div>
                <div className=\"flex items-center gap-2 text-sm text-slate-400\">
                  <Calendar className=\"w-4 h-4 text-amber-400\" />
                  <span>Naissance : 1927</span>
                </div>
                <div className=\"flex items-center gap-2 text-sm text-slate-400\">
                  <Users className=\"w-4 h-4 text-amber-400\" />
                  <span>Secrétaire général CGT (1967-1982)</span>
                </div>
              </div>
              <div className=\"mt-8 h-px w-24 bg-amber-500\" />
            </div>
            <div className=\"bg-slate-800 p-8 border border-slate-700\">
              <div className=\"flex justify-center mb-6\">
                <div className=\"w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center border border-slate-600\">
                  <Users className=\"w-12 h-12 text-slate-500\" />
                </div>
              </div>
              <blockquote className=\"border-l-2 border-amber-500 pl-4\">
                <p className=\"text-slate-300 italic\">
                  \"Nous n'avons jamais désespéré ; nous avons tous fait dans nos cœurs le serment de venger tous nos morts.\"
                </p>
              </blockquote>
            </div>
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

          <div className=\"mt-12 relative\">
            <div className=\"absolute left-4 top-0 bottom-0 w-px bg-slate-600 md:left-1/2 md:-translate-x-px\" />
            
            <div className=\"flex flex-col gap-12\">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 ${
                    index % 2 === 0
                      ? \"md:pr-12 md:text-right md:self-start\"
                      : \"md:pl-12 md:self-end\"
                  }`}
                >
                  <div
                    className={`absolute top-1 left-2.5 h-3 w-3 rounded-full border-2 border-amber-500 bg-slate-900 md:top-1 ${
                      index % 2 === 0
                        ? \"md:left-auto md:-right-1.5\"
                        : \"md:-left-1.5\"
                    }`}
                  />
                  <p className=\"text-sm font-semibold uppercase tracking-widest text-amber-400\">
                    {event.year}
                  </p>
                  <h3 className=\"font-serif text-xl font-bold text-white\">
                    {event.event}
                  </h3>
                  <p className=\"leading-relaxed text-slate-300\">
                    {event.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RÉSISTANCE */}
      <section className=\"mx-auto max-w-4xl px-6 py-20\">
        <p className=\"text-sm font-medium uppercase tracking-[0.3em] text-amber-400\">
          Engagement
        </p>
        <h2 className=\"mt-3 font-serif text-3xl font-bold text-white md:text-4xl\">
          Un jeune résistant
        </h2>
        <div className=\"mt-4 h-px w-16 bg-amber-500\" />

        <div className=\"mt-12 border-l-2 border-amber-500 pl-6\">
          <p className=\"text-lg leading-relaxed text-slate-300 mb-6\">
            Georges Séguy entre très jeune dans la Résistance. Apprenti imprimeur chez Henri Lion, il participe à l'impression de tracts et de journaux clandestins pour la Résistance.
          </p>
          <p className=\"text-lg leading-relaxed text-slate-300 mb-6\">
            Il adhère aux Jeunesses communistes et rejoint les Francs-tireurs et partisans (FTP). À seulement 16 ans, il est arrêté par la Gestapo le 4 février 1944.
          </p>
          <p className=\"text-lg leading-relaxed text-slate-300\">
            Cette arrestation fait suite à une dénonciation qui touche tout le personnel de l'imprimerie clandestine.
          </p>
        </div>
      </section>

      {/* DÉPORTATION */}
      <section className=\"bg-slate-800 py-20\">
        <div className=\"mx-auto max-w-4xl px-6\">
          <p className=\"text-sm font-medium uppercase tracking-[0.3em] text-amber-400\">
            L'épreuve
          </p>
          <h2 className=\"mt-3 font-serif text-3xl font-bold text-white md:text-4xl\">
            Mauthausen
          </h2>
          <div className=\"mt-4 h-px w-16 bg-amber-500\" />

          <div className=\"mt-12 grid md:grid-cols-2 gap-8\">
            <div className=\"border border-slate-700 bg-slate-900 p-8\">
              <h3 className=\"text-amber-400 font-serif font-bold text-xl mb-6\">Camp de catégorie III</h3>
              <p className=\"text-slate-300 leading-relaxed mb-4\">
                Mauthausen était classé par les nazis comme camp de catégorie III, réservé aux détenus considérés comme « irrécupérables ». C'était le camp le plus dur du système concentrationnaire nazi.
              </p>
              <p className=\"text-slate-300 leading-relaxed\">
                Georges Séguy y survit grâce à la solidarité entre détenus et à sa détermination.
              </p>
            </div>

            <div className=\"border border-slate-700 bg-slate-900 p-8\">
              <h3 className=\"font-serif text-xl font-bold text-white mb-6 flex items-center gap-3\">
                <AlertTriangle className=\"w-6 h-6 text-amber-500\" />
                Témoignage
              </h3>
              <blockquote className=\"border-l-2 border-amber-500 pl-4\">
                <p className=\"text-slate-300 italic leading-relaxed\">
                  \"Nous n'avons jamais désespéré ; nous avons tous fait dans nos cœurs le serment de venger tous nos morts.\"
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CHIFFRES */}
      <section className=\"mx-auto max-w-4xl px-6 py-20\">
        <div className=\"text-center\">
          <p className=\"text-sm font-medium uppercase tracking-[0.3em] text-amber-400\">
            En chiffres
          </p>
          <h2 className=\"mt-3 font-serif text-3xl font-bold text-white md:text-4xl\">
            Repères
          </h2>
          <div className=\"mx-auto mt-4 h-px w-16 bg-amber-500\" />
        </div>

        <div className=\"mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6\">
          {keyNumbers.map((item, idx) => (
            <div key={idx} className=\"border border-slate-700 bg-slate-800 p-6 text-center\">
              <p className=\"font-serif text-4xl font-bold text-amber-400 mb-2\">{item.number}</p>
              <p className=\"text-slate-300\">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* APRÈS-GUERRE */}
      <section className=\"bg-slate-800 py-20\">
        <div className=\"mx-auto max-w-4xl px-6\">
          <p className=\"text-sm font-medium uppercase tracking-[0.3em] text-amber-400\">
            L'héritage
          </p>
          <h2 className=\"mt-3 font-serif text-3xl font-bold text-white md:text-4xl\">
            Après la guerre
          </h2>
          <div className=\"mt-4 h-px w-16 bg-amber-500\" />

          <div className=\"mt-12 border-l-2 border-amber-500 pl-6\">
            <p className=\"text-lg leading-relaxed text-slate-300 mb-6\">
              Après la libération du camp le 5 mai 1945, Georges Séguy rentre en France et s'engage dans le mouvement syndical. Il gravit les échelons de la CGT.
            </p>
            <p className=\"text-lg leading-relaxed text-slate-300 mb-6\">
              De 1967 à 1982, il est secrétaire général de la Confédération générale du travail (CGT), l'un des syndicats les plus importants de France.
            </p>
            <p className=\"text-lg leading-relaxed text-slate-300\">
              Son expérience de la déportation a profondément marqué son engagement pour la défense des droits des travailleurs et contre toutes les formes d'oppression.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className=\"border-t border-slate-700 bg-slate-950\">
        <div className=\"mx-auto max-w-4xl px-6 py-12\">
          <div className=\"flex flex-col items-center gap-4 text-center\">
            <p className=\"font-serif text-lg font-bold text-white\">
              En hommage à Georges Séguy
            </p>
            <p className=\"text-sm leading-relaxed text-slate-400\">
              Résistant, déporté et défenseur des droits des travailleurs.
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

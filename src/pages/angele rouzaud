import { MapPin, Calendar, Award, AlertTriangle, Users, Heart, Flame } from 'lucide-react';

export default function AngeleRouzaud() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-rose-600" />
            <span className="font-semibold text-gray-800">Mémoire de la Déportation</span>
          </div>
          <div className="flex gap-8 items-center">
            <a href="#biographie" className="text-gray-600 hover:text-gray-900 text-sm">Biographie</a>
            <a href="#resistance" className="text-gray-600 hover:text-gray-900 text-sm">Résistance</a>
            <a href="#deportation" className="text-gray-600 hover:text-gray-900 text-sm">Déportation</a>
            <a href="#heritage" className="text-gray-600 hover:text-gray-900 text-sm">Héritage</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4 text-balance">Angèle Rouzaud</h1>
            <p className="text-rose-400 text-xl mb-6">Résistante française</p>
            <p className="text-gray-300 text-lg mb-6">Déportée à Ravensbrück</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>France</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Flame className="w-4 h-4 text-rose-400" />
                <span>Camp de Ravensbrück, Allemagne</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 p-8 rounded-lg">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center">
                <Heart className="w-12 h-12 text-rose-500" />
              </div>
            </div>
            <p className="text-center text-gray-300 italic">
              {'"Une femme courageuse parmi les milliers de résistantes déportées à Ravensbrück, le plus grand camp de concentration pour femmes du régime nazi."'}
            </p>
          </div>
        </div>
      </div>

      {/* Chronologie */}
      <div className="max-w-5xl mx-auto px-8 py-16">
        <h2 id="biographie" className="text-3xl font-bold text-center mb-16 text-gray-800">Chronologie</h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-rose-400 via-red-500 to-green-500"></div>

          <div className="space-y-12">
            {/* Engagement dans la Résistance */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Engagement dans la Résistance</h3>
                <p className="text-sm text-gray-600">Participation active à la Résistance française</p>
                <p className="text-xs text-rose-600 mt-1">Lutte contre l&apos;occupation nazie</p>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-rose-400 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 text-rose-600 font-bold text-xl">1940-1943</div>
            </div>

            {/* Arrestation */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right text-red-600 font-bold text-xl">1943-1944</div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Arrestation</h3>
                <p className="text-sm text-red-600">Arrêtée pour faits de résistance</p>
                <p className="text-xs text-red-600 mt-1">Internement avant déportation</p>
              </div>
            </div>

            {/* Déportation */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Déportation à Ravensbrück</h3>
                <p className="text-sm text-red-600">Transfert vers le camp de concentration</p>
                <p className="text-xs text-red-600 mt-1">Camp réservé aux femmes - nord de Berlin</p>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 text-red-600 font-bold text-xl">1944</div>
            </div>

            {/* Libération */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right text-green-600 font-bold text-xl">1945</div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Libération</h3>
                <p className="text-sm text-green-600">Libération du camp par l&apos;Armée Rouge</p>
                <p className="text-xs text-green-600 mt-1">30 avril 1945</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Résistance */}
      <div id="resistance" className="bg-gray-50 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">L&apos;Engagement dans la Résistance</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                Angèle Rouzaud fait partie des nombreuses femmes françaises qui se sont engagées dans la Résistance pendant l&apos;Occupation. Ces femmes ont joué un rôle crucial, souvent méconnu, dans la lutte contre le régime nazi.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les résistantes accomplissaient des missions variées : transmission de messages, hébergement de réfugiés et de résistants recherchés, fabrication et distribution de tracts, collecte de renseignements, et parfois actions armées.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Leur engagement les exposait aux mêmes dangers que les hommes : arrestation, torture, déportation et mort. Pourtant, leur contribution est restée longtemps dans l&apos;ombre de l&apos;Histoire.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-rose-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-rose-600" />
                  Rôle des femmes
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Agents de liaison</li>
                  <li>• Hébergement clandestin</li>
                  <li>• Fabrication de faux papiers</li>
                  <li>• Transmission de renseignements</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Contexte
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• France occupée (1940-1944)</li>
                  <li>• Régime de Vichy</li>
                  <li>• Répression nazie</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Ravensbrück */}
      <div id="deportation" className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Ravensbrück - L&apos;Enfer des Femmes</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 text-white p-8 rounded-lg">
              <h3 className="text-rose-400 font-bold text-xl mb-4">Le Camp de Ravensbrück</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ravensbrück, situé à 80 km au nord de Berlin, fut le plus grand camp de concentration nazi réservé aux femmes. Ouvert en mai 1939, il a vu passer plus de 130 000 femmes et enfants.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Les détenues y subissaient le travail forcé, les expériences médicales, la faim, le froid et les violences. On estime que 30 000 à 90 000 femmes y ont péri.
              </p>
            </div>

            <div className="bg-rose-50 p-8 rounded-lg flex flex-col justify-center items-center">
              <div className="w-20 h-20 bg-rose-600 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 text-xl mb-4 text-center">Solidarité féminine</h3>
              <p className="text-gray-700 text-center">
                Malgré les conditions inhumaines, les détenues ont développé des réseaux de solidarité et d&apos;entraide qui ont permis à beaucoup de survivre.
              </p>
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-slate-100 p-6 rounded-lg text-center">
              <p className="text-3xl font-bold text-slate-800">130 000+</p>
              <p className="text-sm text-gray-600 mt-2">Femmes déportées</p>
            </div>
            <div className="bg-slate-100 p-6 rounded-lg text-center">
              <p className="text-3xl font-bold text-slate-800">1939-1945</p>
              <p className="text-sm text-gray-600 mt-2">Période d&apos;activité</p>
            </div>
            <div className="bg-slate-100 p-6 rounded-lg text-center">
              <p className="text-3xl font-bold text-slate-800">40+</p>
              <p className="text-sm text-gray-600 mt-2">Nationalités</p>
            </div>
            <div className="bg-slate-100 p-6 rounded-lg text-center">
              <p className="text-3xl font-bold text-slate-800">8 000</p>
              <p className="text-sm text-gray-600 mt-2">Françaises déportées</p>
            </div>
          </div>
        </div>
      </div>

      {/* Citation */}
      <div className="bg-slate-900 text-white py-12 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl italic mb-4">
            {'"Les femmes de Ravensbrück ont montré un courage et une dignité extraordinaires face à l\'horreur. Leur mémoire doit être préservée pour que jamais ces atrocités ne se reproduisent."'}
          </p>
          <p className="text-sm text-rose-400">
            - En mémoire des déportées de Ravensbrück
          </p>
        </div>
      </div>

      {/* Section Héritage */}
      <div id="heritage" className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Devoir de Mémoire</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-6 h-6 text-rose-600" />
                <h3 className="font-bold text-gray-800">Reconnaissance</h3>
              </div>
              <p className="text-sm text-gray-700">
                Les résistantes déportées ont été tardivement reconnues pour leur engagement et leur sacrifice pendant la Seconde Guerre mondiale.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-6 h-6 text-purple-600" />
                <h3 className="font-bold text-gray-800">Commémoration</h3>
              </div>
              <p className="text-sm text-gray-700">
                Chaque année, des cérémonies commémoratives honorent la mémoire des victimes de Ravensbrück et de tous les camps de concentration.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-blue-600" />
                <h3 className="font-bold text-gray-800">Transmission</h3>
              </div>
              <p className="text-sm text-gray-700">
                Transmettre cette histoire aux nouvelles générations est essentiel pour lutter contre l&apos;oubli et prévenir la répétition de telles horreurs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Award className="w-5 h-5 text-rose-400" />
            <span className="font-semibold">Mémoire de la Déportation</span>
          </div>
          <p className="text-gray-400 text-sm mb-1">
            En mémoire d&apos;Angèle Rouzaud et de toutes les femmes déportées à Ravensbrück.
          </p>
          <p className="text-gray-500 text-xs">Que leur courage et leur sacrifice ne soient jamais oubliés</p>
        </div>
      </footer>
    </div>
  );
}

import { MapPin, Calendar, Award, AlertTriangle, Users, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-600" />
            <span className="font-semibold text-gray-800">Mémoire de la Déportation</span>
          </div>
          <div className="flex gap-8 items-center">
            <a href="#biographie" className="text-gray-600 hover:text-gray-900 text-sm">Jeanne Verdier</a>
            <a href="#cassou" className="text-gray-600 hover:text-gray-900 text-sm">Jean Cassou</a>
            <a href="#timeline" className="text-gray-600 hover:text-gray-900 text-sm">Chronologie</a>
          </div>
        </div>
      </nav>

      <div className="bg-slate-900 text-white py-20 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Jeanne & Jean</h1>
            <p className="text-amber-400 text-xl mb-6">Résistants, Déportés, Survivants</p>
            <p className="text-gray-300 text-lg mb-6">Deux destins entrelacés dans la lutte contre l'oppression</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Saint-Orens-de-Gameville, Gers & Paris</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>1893-1945 & 1897-1986</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 p-8 rounded-lg">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center">
                <Heart className="w-12 h-12 text-slate-500" />
              </div>
            </div>
            <p className="text-center text-gray-300 italic">
              "La Résistance n'était pas un acte isolé, mais un engagement collectif pour la liberté et la dignité humaine."
            </p>
          </div>
        </div>
      </div>

      <div id="biographie" className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Jeanne Verdier</h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 via-red-500 to-green-500"></div>

          <div className="space-y-12">
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Naissance</h3>
                <p className="text-sm text-gray-600">24 mars 1893</p>
                <p className="text-xs text-gray-600 mt-1">France</p>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-amber-400 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 text-amber-600 font-bold text-xl">1893</div>
            </div>

            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right text-amber-600 font-bold text-xl">1920s</div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-amber-400 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Mariage</h3>
                <p className="text-sm text-gray-600">Épouse de François Verdier</p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Engagement Résistant</h3>
                <p className="text-sm text-blue-600">Membre du réseau Gallia</p>
                <p className="text-xs text-blue-600 mt-1">Agent de renseignement</p>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-amber-400 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 text-amber-600 font-bold text-xl">1940-43</div>
            </div>

            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right text-red-600 font-bold text-xl">18 décembre 1943</div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Arrestation</h3>
                <p className="text-sm text-red-600">Capture par l'occupant</p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Déportation</h3>
                <p className="text-sm text-red-600">Camp de Ravensbrück</p>
                <p className="text-xs text-red-600 mt-1">Prison politique pour femmes résistantes</p>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 text-red-600 font-bold text-xl">1943-45</div>
            </div>

            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right text-green-600 font-bold text-xl">9 avril 1945</div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Libération</h3>
                <p className="text-sm text-green-600">Libérée par la Croix-Rouge</p>
                <p className="text-xs text-green-600 mt-1">État de santé gravement affaibli</p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Engagement Civique</h3>
                <p className="text-sm text-blue-600">Élue Maire de Saint-Orens</p>
                <p className="text-xs text-blue-600 mt-1">Dans le Gers, après la libération</p>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 text-green-600 font-bold text-xl">Après 1945</div>
            </div>
          </div>
        </div>
      </div>

      <div id="cassou" className="bg-gray-50 py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Jean Cassou (1897-1986)</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Carrière Artistique & Intellectuelle</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span>Écrivain, conservateur de musée et critique d'art</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span>Traducteur de renommée</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span>Directeur-fondateur du Musée national d'Art moderne de Paris</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span>Premier président de l'Institut d'études occitanes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Engagement dans la Résistance</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-gray-800">Révocation (1940)</p>
                  <p className="text-sm text-gray-600">Révoqué de son poste de conservateur du Musée d'art moderne par Vichy</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-gray-800">Entrée en Résistance</p>
                  <p className="text-sm text-gray-600">Septembre 1940 - Rédige ses premiers tracts</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-gray-800">Arrestation</p>
                  <p className="text-sm text-gray-600">Décembre 1941 - Arrêté par la Gestapo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-8 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              Jean Cassou incarne l'intellectuel engagé qui, malgré sa position privilégiée, a choisi de rejoindre la lutte clandestine contre l'occupation. Son parcours montre comment le régime de Vichy a systématiquement frappé ceux qui refusaient de se soumettre, même les plus respectés des institutions culturelles françaises.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white py-12 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl italic mb-4">
            "Le devoir de mémoire envers ceux qui ont résisté est de préserver leurs noms de l'oubli et de transmettre l'exemple de leur courage aux générations futures."
          </p>
          <p className="text-sm text-amber-400">
            - Mémoire de la Déportation
          </p>
        </div>
      </div>

      <div id="timeline" className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contexte Historique</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-6 h-6 text-blue-600" />
                <h3 className="font-bold text-gray-800">Régime de Vichy</h3>
              </div>
              <p className="text-sm text-gray-700">
                Collaboration avec l'Allemagne nazie et persécution systématique des résistants et des minorités.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h3 className="font-bold text-gray-800">Camps de Déportation</h3>
              </div>
              <p className="text-sm text-gray-700">
                Ravensbrück pour les femmes résistantes était l'un des camps les plus terribles du Reich nazi.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-6 h-6 text-green-600" />
                <h3 className="font-bold text-gray-800">Libération 1945</h3>
              </div>
              <p className="text-sm text-gray-700">
                Retour à la vie civile et reconstruction pour les survivants, beaucoup gravement marqués.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-slate-900 text-white py-8 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="font-semibold">Mémoire de la Déportation</span>
          </div>
          <p className="text-gray-400 text-sm mb-1">
            En mémoire de Jeanne Verdier et Jean Cassou, et de tous les résistants oubliés.
          </p>
          <p className="text-gray-500 text-xs">Que leur sacrifice et leur courage ne soient jamais oubliés</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

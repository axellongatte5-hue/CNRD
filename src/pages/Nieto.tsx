import { MapPin, Calendar, Award, AlertTriangle, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Nieto() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Award className="w-5 h-5 text-amber-600" />
            <span className="font-semibold text-gray-800">Mémoire de la Déportation</span>
          </Link>
          <div className="flex gap-8 items-center">
            <a href="#biographie" className="text-gray-600 hover:text-gray-900 text-sm">Biographie</a>
            <a href="#resistance" className="text-gray-600 hover:text-gray-900 text-sm">Résistance</a>
            <a href="#deportation" className="text-gray-600 hover:text-gray-900 text-sm">Déportation</a>
            <a href="#heritage" className="text-gray-600 hover:text-gray-900 text-sm">Héritage</a>
            <Link to="/" className="flex items-center gap-1 text-amber-600 hover:text-amber-700 text-sm font-semibold">
              <ArrowLeft className="w-4 h-4" />
              Retour
            </Link>
          </div>
        </div>
      </nav>

      <div className="bg-slate-900 text-white py-20 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Jaime Nieto López</h1>
            <p className="text-amber-400 text-xl mb-6">1913 - 1951</p>
            <p className="text-gray-300 text-lg mb-6">Résistant espagnol, déporté à Buchenwald</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Albacete, Espagne</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>14 août 1913</span>
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
              "Ils résistent partiellement remarquable semble tomber dans les oubliettes de l'Histoire..."
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Chronologie</h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 via-red-500 to-green-500"></div>

          <div className="space-y-12">
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Naissance</h3>
                <p className="text-sm text-gray-600">14 août 1913 à Albacete, Espagne</p>
                <p className="text-xs text-red-600 mt-1">Membre du Partido Comunista de España (PCE)</p>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-amber-400 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 text-amber-600 font-bold text-xl">1913</div>
            </div>

            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right text-amber-600 font-bold text-xl">1933</div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-amber-400 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Arrivée en France</h3>
                <p className="text-sm text-blue-600">Après la défaite, identifié carté Franco</p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Résistance</h3>
                <p className="text-sm text-blue-600">Engagement dans l'Union Nacional Española (UNE)</p>
                <p className="text-xs text-blue-600 mt-1">Organisation de transis dans le Sud-Ouest</p>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-amber-400 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 text-amber-600 font-bold text-xl">1941-42</div>
            </div>

            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right text-amber-600 font-bold text-xl">1942</div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Arrestation</h3>
                <p className="text-sm text-red-600">Tôt septembre à Toulouse</p>
                <p className="text-xs text-red-600 mt-1">Sous le faux nom de José Matéos Martinez</p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Déportation</h3>
                <p className="text-sm text-red-600">31 juillet vers Buchenwald</p>
                <p className="text-xs text-red-600 mt-1">Matricule n°69237</p>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 text-red-600 font-bold text-xl">1944</div>
            </div>

            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right text-green-600 font-bold text-xl">1945</div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Libération</h3>
                <p className="text-sm text-green-600">Retour à Toulouse pour Manosque</p>
                <p className="text-xs text-green-600 mt-1">Serment de Buchenwald et en devenir</p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Nouvelle arrestation</h3>
                <p className="text-sm text-red-600">Opération Bolero-Paprika</p>
                <p className="text-xs text-red-600 mt-1">Déportation en Crête puis en Pologne</p>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2 text-red-600 font-bold text-xl">1950-51</div>
            </div>
          </div>
        </div>
      </div>

      <div id="resistance" className="bg-gray-50 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">L'Engagement dans la Résistance</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                García Tortosa, à travers une liaison avec certaines compagnies de travailleurs étrangers (CTE), notamment en région toulousaine (Gourdon, Rocebellion...) et certains camps de concentration (Argelès, Gurs, Le Vernet, Noé, Septfonds...).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Plusieurs sources soulignent que lors de la tenue d'une réunion des camps de PCE en juin-même de camp d'Argelès en octobre 1940, et plus tard lors de la création des premiers réseaux de guérilleros dans l'Aude, la Haute-Garonne, l'Ariège et le Cantal.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dès octobre 1941, une filière clandestine se met en place pour aider les réfugiés. Il s'occupe un rôle très actif au sein de cette organisation clandestine, aidant et soutenant de nombreux réfugiés, les réfugiés et les organisations clandestines.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-amber-600" />
                  Organisations
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Partido Comunista de España (PCE)</li>
                  <li>• Unión Nacional Española (UNE)</li>
                  <li>• Agrupación de Guerrilleros Españoles (AGE)</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Zones d'action
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Toulouse (Base)</li>
                  <li>• Aude</li>
                  <li>• Haute-Garonne</li>
                  <li>• Ariège</li>
                  <li>• Cantal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="deportation" className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Buchenwald et le Serment</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 text-white p-8 rounded-lg">
              <h3 className="text-amber-400 font-bold text-xl mb-4">Le Serment de Buchenwald</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Déporté à Buchenwald le 31 juillet sous la matricule n°69237, Jaime Nieto devient rapidement l'une des figures importantes de la résistance clandestine au sein du camp.
              </p>
              <p className="text-gray-300 leading-relaxed">
                D'après des témoins, « avant sa pincerne agent en est désigné le "Serment de Buchenwald" à la libération du camp. Il deviait à 000 survivants le 19 avril 1945.
              </p>
            </div>

            <div className="bg-amber-50 p-8 rounded-lg flex flex-col justify-center items-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 text-xl mb-4">Délégué des Espagnols</h3>
              <p className="text-gray-700 text-center">
                Au sein du comité international de Buchenwald, il co-dirige le tombe du témoin survivant avec plusieurs langues.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white py-12 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl italic mb-4">
            "Ce résistant déporté partiellement remarquable semble tomber dans les oubliettes de l'Histoire... D'autant plus étement peut-être, qu'il fut à nouveau maltraité puis après la libération de l'Europe."
          </p>
          <p className="text-sm text-amber-400">
            - Extrait récapitulation de Espagne, important épisode méconnu de la résistance européenne dans le sud-ouest
          </p>
        </div>
      </div>

      <div id="heritage" className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Un Destin Tragique</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h3 className="font-bold text-gray-800">Opération Bolero-Paprika</h3>
              </div>
              <p className="text-sm text-gray-700">
                Le 7 novembre 1950, nouvelle arrestation à Toulouse sans pouvoir déposer avant jugé.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-6 h-6 text-orange-600" />
                <h3 className="font-bold text-gray-800">Déportation en Corse</h3>
              </div>
              <p className="text-sm text-gray-700">
                Assigné à la résidence dans l'île de Beauté avec 177 autres Espagnols.
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-500 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-gray-600" />
                <h3 className="font-bold text-gray-800">Disparition</h3>
              </div>
              <p className="text-sm text-gray-700">
                Le 30 juin 1951, on perd sa trace sur le bateau "Castel", vers la Pologne, qui sort reste inconnu.
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
            En mémoire de Jaime Nieto López et de tous les résistants oubliés.
          </p>
          <p className="text-gray-500 text-xs">1913 - 1951 • Que leur sacrifice ne soit jamais oublié</p>
        </div>
      </footer>
    </div>
  );
}

export default Nieto;

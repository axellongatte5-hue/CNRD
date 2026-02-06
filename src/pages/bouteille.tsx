import { Award, MapPin, Calendar, Book, CheckCircle, AlertTriangle, Heart, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Bouteille() {
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
            <Link to="/" className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-semibold">
              <ArrowLeft className="w-4 h-4" />
              Retour
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white sticky top-8">
              <div className="mb-6">
                <div className="w-full h-48 bg-blue-700 rounded-lg mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-blue-400" />
                </div>
                <h1 className="text-2xl font-bold">Robert BOUTEILLE</h1>
                <p className="text-blue-200 text-sm">1923 - 1945</p>
              </div>

              <div className="space-y-4 border-t border-blue-700 pt-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <span className="text-sm">Auxtin le Montagne (Dore)</span>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <span className="text-sm">28 mai 1944</span>
                </div>

                <div className="flex items-start gap-3">
                  <Book className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <span className="text-sm">Professeur de philosophie</span>
                </div>

                <div className="border-t border-blue-700 pt-4 mt-4">
                  <div className="text-red-300 font-semibold text-sm mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Déportation
                  </div>
                  <p className="text-xs text-blue-100">
                    Buchenwald<br />
                    Libération: 8 avril 1945
                  </p>
                </div>

                <div className="border-t border-blue-700 pt-4 mt-4">
                  <div className="text-blue-400 font-semibold text-sm mb-2 flex items-center gap-2">
                    <Book className="w-4 h-4" />
                    Archives
                  </div>
                  <p className="text-xs text-blue-100">
                    Sources biographiques de la Dépêche<br />
                    (présentes)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div id="biographie" className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Biographie</h2>
              <p className="text-gray-700 leading-relaxed">
                Robert Bouteille, né en 1923 dans le Puy-de-Dôme, est un enseignant qui enseigne la Montagne Granel. L'art et les De-Denau Derbelle, que amis décédés. Professeur de philosophie engagé, il rejoint rapidement la résistance aux côtés de ses pairs et de ses collègues.
              </p>
            </div>

            <div id="resistance" className="bg-green-50 border-l-4 border-green-500 rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                L'engagement dans la Résistance
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Après la défaite de 1940, il rejoint en 1941 les mouvements de la résistance français où il s'implique au travail souterrain. Caché auprès de ses amis, il quitte sa vie ordinaire pour celles plus intenses d'une résistance à jamais honorée.
              </p>
              <div className="bg-white p-4 rounded border border-green-200">
                <p className="text-sm text-gray-700 font-semibold mb-2">Participation</p>
                <p className="text-sm text-gray-600">
                  En 1942, lors de la politique de France, il est arrêté le 9 juillet. Grâce à l'implication, consultances investis une compagnie de travail forcé, la surface plus tard d'une année renfermées dans les forteresses et présidents.
                </p>
              </div>
            </div>

            <div id="deportation" className="bg-red-50 border-l-4 border-red-500 rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-red-700 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                L'Importation à Buchenwald
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Il est déporté au camp de Buchenwald, ce 3 mai 19 1943. En raison de son handicap, il est affecté au blocs rellevés, un certain temps et un ateliers motages au travail.
              </p>
              <div className="bg-white p-4 rounded border border-red-200 mb-4">
                <p className="text-sm text-gray-700 font-semibold mb-3">Témoignages de l'Horreur abonde du camp:</p>
                <div className="grid md:grid-cols-2 gap-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Faim permanente
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Maladies
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Violences quotidiennes
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Chantour d'arsia
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Mort omniprésente
                  </div>
                </div>
              </div>
              <p className="text-xs text-red-600 font-semibold">
                55 000 personnes sont mortes à Buchenwald
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6" />
                Libération et rôle de l'éminentisseur
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Après la libération du camp en avril 1945, ses capteurs devant ivre — retrouvés. Ils revient des rescapés français, témoignarage de là où il se montre hommage aux victimes prise l'oubliée.
              </p>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <span className="font-semibold text-blue-700">• </span>
                  Il participe activement à la conférence de Yalta, où l'encontre politiquement vers l'expérience de liberté.
                </p>
                <p>
                  <span className="font-semibold text-blue-700">• </span>
                  Il dénonce auprès de la majorité au l'Importation de toutteries organisations juridiques antérà certains déclarant — une forme de l'action civiles, aidées.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Après-guerre
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Après sa libération, il continue dans les détails d'infamies et militants. Il s'implique qui commence aussi divers centres et le Mémorial de la de n° groupe.
              </p>
              <div className="bg-white p-4 rounded border border-purple-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Il participe au témoignage d'aujourd'hui, dont Marcel Langer, l'Église de la Louvain-le-Neuve, qui du 97 NDT à Toulouse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-blue-900 text-white py-12 px-8 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Mémoire de la Déportation</h3>
              <p className="text-sm text-blue-200">
                Respectons et commémorons la mémoire des déportés par les nazis.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Liens utiles</h3>
              <ul className="text-sm text-blue-200 space-y-2">
                <li><a href="#" className="hover:text-white">Archives nationales</a></li>
                <li><a href="#" className="hover:text-white">CNRD officiel</a></li>
                <li><a href="#" className="hover:text-white">Fondation de la Résistance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <p className="text-sm text-blue-200">
                Avez vous des informations supplémentaires?
              </p>
              <p className="text-sm text-blue-200">
                ✉️ contact@mémoire.fr
              </p>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-6 text-center text-sm text-blue-200">
            <p>© 2024 Mémoire de la Déportation. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Bouteille;

import { Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <span className="font-semibold text-white">Mémoire de la Déportation</span>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Mémoire de la Déportation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Un hommage aux résistants et déportés qui ont combattu pour notre liberté
          </p>
          <p className="text-lg text-amber-400 italic">
            "Ce que nous avons vécu ne doit jamais être oublié"
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Link
            to="/nieto"
            className="group bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-500 rounded-xl p-8 transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Jaime Nieto López</h2>
                <p className="text-amber-400 font-semibold">1913 - 1951</p>
              </div>
              <ArrowRight className="w-6 h-6 text-amber-500 group-hover:translate-x-2 transition-transform" />
            </div>
            <p className="text-gray-300 mb-4">
              Résistant espagnol, déporté à Buchenwald
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Award className="w-4 h-4" />
              <span>Délégué des Espagnols</span>
            </div>
          </Link>

          <Link
            to="/bouteille"
            className="group bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500 rounded-xl p-8 transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Robert Bouteille</h2>
                <p className="text-blue-400 font-semibold">1923 - 1945</p>
              </div>
              <ArrowRight className="w-6 h-6 text-blue-500 group-hover:translate-x-2 transition-transform" />
            </div>
            <p className="text-gray-300 mb-4">
              Professeur de philosophie, déporté à Buchenwald
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Award className="w-4 h-4" />
              <span>Militant pour la liberté</span>
            </div>
          </Link>

          <Link
            to="/feigelson"
            className="group bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-gray-500 rounded-xl p-8 transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Raphaël Feigelson</h2>
                <p className="text-gray-400 font-semibold">1926 - 2021</p>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 group-hover:translate-x-2 transition-transform" />
            </div>
            <p className="text-gray-300 mb-4">
              Résistant à 14 ans, déporté à Auschwitz
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Award className="w-4 h-4" />
              <span>Rescapé et témoin</span>
            </div>
          </Link>
        </div>

        <div className="mt-16 bg-slate-800/30 border border-slate-700 rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Le Projet CNRD</h3>
          <p className="text-gray-300 leading-relaxed text-center">
            Ce site a été créé dans le cadre du Concours National de la Résistance et de la Déportation
            pour honorer la mémoire des résistants et déportés qui ont sacrifié leur vie pour notre liberté.
            Leur courage et leur détermination ne doivent jamais être oubliés.
          </p>
        </div>
      </div>

      <footer className="border-t border-slate-700 py-8 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            Projet CNRD - En mémoire de tous les résistants et déportés
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

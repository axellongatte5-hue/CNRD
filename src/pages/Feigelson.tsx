import { Award, ArrowLeft, Users, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

function Feigelson() {
  const timelineEvents = [
    { year: '1926', event: 'Naissance à Paris (6ᵉ arrondissement)' },
    { year: '1940', event: 'Entrée en Résistance à 14 ans' },
    { year: '1944', event: 'Arrestation à Toulouse (14 mai)' },
    { year: '1944', event: 'Déportation à Auschwitz (convoi 77, 31 juillet)' },
    { year: '1945', event: 'Évasion et libération (22 janvier)' },
    { year: '1948-1950', event: 'Fondateur des Cahiers du cinéma et de l\'AGIR' },
    { year: '2021', event: 'Décès à Paris, à 95 ans' },
  ];

  const deportationStages = [
    {
      title: 'Arrestation et torture',
      content: 'Arrêté à Toulouse le 14 mai 1944. Torturé par la Milice et la Gestapo : coups, électrocution, brûlures.',
    },
    {
      title: 'Camps de transit',
      content: 'Internés à Compiègne, puis Drancy. Conditions inhumaines. Attente de la déportation.',
    },
    {
      title: 'Transport vers Auschwitz',
      content: 'Wagon à bestiaux, 60 personnes par wagon, 4 jours, sans eau ni nourriture. Mort et folie pendant le trajet.',
    },
    {
      title: 'Sélection et arrivée',
      content: '80 % des déportés envoyés directement aux chambres à gaz. Raphaël devient matricule B-3747.',
    },
    {
      title: 'Déshumanisation',
      content: 'Rasé, tatoué. Vêtements ôtés. Perte d\'identité systématique. Travail forcé à l\'extérieur du camp.',
    },
    {
      title: 'Vie au camp',
      content: 'Cruauté permanente des SS. Violences arbitraires. Témoignage de l\'extermination de 20 000 hongrois en une journée.',
    },
  ];

  const keyNumbers = [
    { number: '14', label: 'ans à l\'entrée en Résistance' },
    { number: '1944', label: 'année d\'arrestation et déportation' },
    { number: '80%', label: 'des déportés exterminés à l\'arrivée' },
    { number: '19', label: 'ans à la libération du camp' },
  ];

  const postWarWork = [
    {
      year: '1948',
      title: 'Co-fondateur des Cahiers du cinéma',
      desc: 'Engagé dans la transmission culturelle',
      color: 'from-orange-50 to-orange-100',
    },
    {
      year: '1949',
      title: 'Président du Club du 27 janvier 1945',
      desc: 'Mémoire et transmission',
      color: 'from-red-50 to-red-100',
    },
    {
      year: '1950',
      title: 'Fondateur de l\'AGIR',
      desc: 'Association générale des Israélites de la Résistance',
      color: 'from-blue-50 to-blue-100',
    },
    {
      year: '1950+',
      title: 'Écrivain et militant',
      desc: 'Lutte contre toutes les formes de discrimination',
      color: 'from-green-50 to-green-100',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Award className="w-5 h-5 text-amber-600" />
            <span className="font-semibold text-gray-800">Mémoire de la Déportation</span>
          </Link>
          <Link to="/" className="flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Link>
        </div>
      </nav>

      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-8 bg-gray-700 rounded-lg flex items-center justify-center">
            <Users className="w-16 h-16 text-gray-500" />
          </div>
          <h1 className="text-5xl font-bold mb-4">Raphaël Feigelson</h1>
          <p className="text-xl text-gray-300 mb-6">1926 – 2021</p>
          <p className="text-lg italic text-gray-200 max-w-2xl mx-auto border-l-4 border-amber-500 pl-6">
            « Vous êtes ici pour travailler comme des chiens ou pour mourir. Ici, il n'y a qu'une seule porte de sortie : la cheminée. »
          </p>
          <p className="text-gray-400 mt-6">Résistant à 14 ans • Déporté à Auschwitz • Rescapé et témoin</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Parcours</h2>
          <div className="space-y-8">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-amber-600 rounded-full"></div>
                  <div className="w-1 flex-1 bg-gray-200"></div>
                </div>
                <div className="pb-8 flex-1">
                  <p className="text-sm font-bold text-amber-600 mb-1">{event.year}</p>
                  <p className="text-gray-700 font-semibold">{event.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Une entrée précoce dans la Résistance</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-6">
            <p className="text-gray-800 leading-relaxed">
              Raphaël Feigelson naît le 17 février 1926 à Paris dans une famille juive française. À seulement 14 ans, il refuse la défaite de 1940 et s'engage immédiatement dans la Résistance aux côtés de ses parents. Il devient rapidement chef militaire régional des Forces Unies de la Jeunesse Patriotique (F.U.J.P.), puis officier des Forces Françaises de l'Intérieur (F.F.I.).
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Les étapes de la déportation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {deportationStages.map((stage, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-red-600">■</span>
                  {stage.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{stage.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-red-50 border-l-4 border-red-600 p-8 rounded">
            <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              Témoignage direct
            </h3>
            <p className="text-lg italic text-gray-800 mb-4">
              « On peut dire que c'était une exécution lente que cette torture perpétuelle. »
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sur l'arrivée à Auschwitz : « Environ 80 % des déportés étaient aussitôt exterminés. »
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sur la vie au camp : « On se croyait à l'époque féodale. » Il est témoin de l'extermination massive de déportés hongrois à l'été 1944, où 20 000 personnes sont assassinées en une seule journée.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Chiffres clés</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {keyNumbers.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg border border-gray-200 text-center">
                <p className="text-4xl font-bold text-amber-600 mb-2">{item.number}</p>
                <p className="text-gray-700 font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Évasion et libération</h2>
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
            <p className="text-gray-800 leading-relaxed mb-4">
              Le 22 janvier 1945, Raphaël Feigelson parvient à s'évader d'Auschwitz. Il rejoint l'Armée soviétique, avec laquelle il participe à la libération du camp et empêche sa destruction totale par les SS en fuite.
            </p>
            <p className="text-lg italic text-gray-800">
              « Sans son offensive victorieuse, je ne sais pas si un seul de nous serait revenu vivant de cet enfer. »
            </p>
            <p className="text-gray-700 mt-4">
              Rescapé en avril 1945 à seulement 19 ans, il rentre à Paris.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Après la guerre : une vie de transmission</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {postWarWork.map((work, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${work.color} border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1`}
                style={{
                  animation: `float ${3 + idx * 0.5}s ease-in-out infinite`,
                }}
              >
                <p className="text-sm text-amber-600 font-bold mb-2">{work.year}</p>
                <h3 className="font-bold text-gray-900 mb-2">{work.title}</h3>
                <p className="text-sm text-gray-600">{work.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
            <p className="text-gray-800 leading-relaxed">
              Après la guerre, Raphaël Feigelson consacre sa vie à la mémoire, à la culture et à la lutte contre toutes les formes de discrimination. Il est également écrivain et membre de la Société des gens de lettres. Raphaël Feigelson s'éteint en 2021 à Paris, à l'âge de 95 ans. Son témoignage constitue une source essentielle pour comprendre la Résistance, la déportation et l'horreur des camps nazis.
            </p>
          </div>
        </section>

      </div>

      <footer className="bg-gray-900 text-white py-12 px-8 mt-12">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-400">
          <p>© 2024 Mémoire de la Déportation. En hommage à Raphaël Feigelson et à tous les résistants et déportés.</p>
        </div>
      </footer>
    </div>
  );
}

export default Feigelson;

"import \"./index.css\";
import { BrowserRouter, Routes, Route } from \"react-router-dom\";
import Layout from \"./components/Layout\";
import HomePage from \"./pages/HomePage\";
import PersonnagesPage from \"./pages/PersonnagesPage\";
import CampsPage from \"./pages/CampsPage\";
import CartePage from \"./pages/CartePage\";

// Pages originales des personnages
import Feigelson from \"./pages/Feigelson\";
import Nieto from \"./pages/Nieto\";
import Bouteille from \"./pages/Bouteille\";
import Seguy from \"./pages/Seguy\";
import Lestage from \"./pages/Lestage\";
import Rolland from \"./pages/Rolland\";

// Pages originales des camps
import Drancy from \"./pages/Drancy\";
import Buchenwald from \"./pages/Buchenwald\";
import Mauthausen from \"./pages/Mauthausen\";
import Ravensbruck from \"./pages/Ravensbruck\";
import Neuengamme from \"./pages/Neuengamme\";
import Compiegne from \"./pages/Compiegne\";
import Auschwitz from \"./pages/Auschwitz\";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages avec Layout unifié */}
        <Route path=\"/\" element={<Layout><HomePage /></Layout>} />
        <Route path=\"/personnages\" element={<Layout><PersonnagesPage /></Layout>} />
        <Route path=\"/camps\" element={<Layout><CampsPage /></Layout>} />
        <Route path=\"/carte\" element={<Layout><CartePage /></Layout>} />
        
        {/* Pages de personnages avec leur UI originale */}
        <Route path=\"/personnage/feigelson\" element={<Feigelson />} />
        <Route path=\"/personnage/nieto\" element={<Nieto />} />
        <Route path=\"/personnage/bouteille\" element={<Bouteille />} />
        <Route path=\"/personnage/seguy\" element={<Seguy />} />
        <Route path=\"/personnage/lestage\" element={<Lestage />} />
        <Route path=\"/personnage/rolland\" element={<Rolland />} />
        
        {/* Pages de camps avec leur UI originale */}
        <Route path=\"/camp/drancy\" element={<Drancy />} />
        <Route path=\"/camp/buchenwald\" element={<Buchenwald />} />
        <Route path=\"/camp/mauthausen\" element={<Mauthausen />} />
        <Route path=\"/camp/ravensbruck\" element={<Ravensbruck />} />
        <Route path=\"/camp/neuengamme\" element={<Neuengamme />} />
        <Route path=\"/camp/compiegne\" element={<Compiegne />} />
        <Route path=\"/camp/auschwitz\" element={<Auschwitz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
"

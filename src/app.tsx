"import \"@/index.css\";
import { BrowserRouter, Routes, Route } from \"react-router-dom\";
import Layout from \"@/components/Layout\";
import HomePage from \"@/pages/HomePage\";
import PersonnagesPage from \"@/pages/PersonnagesPage\";
import PersonnageDetail from \"@/pages/PersonnageDetail\";
import CampsPage from \"@/pages/CampsPage\";
import CampDetail from \"@/pages/CampDetail\";
import CartePage from \"@/pages/CartePage\";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path=\"/\" element={<HomePage />} />
          <Route path=\"/personnages\" element={<PersonnagesPage />} />
          <Route path=\"/personnage/:id\" element={<PersonnageDetail />} />
          <Route path=\"/camps\" element={<CampsPage />} />
          <Route path=\"/camp/:id\" element={<CampDetail />} />
          <Route path=\"/carte\" element={<CartePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
"

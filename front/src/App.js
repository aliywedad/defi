
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
import Login from './pages/login';
// import Register from './pages/register';
// import EtuduentPage from './pages/EtudiantPage';
// import Appp from './components/test';
import AdminPage from './pages/AdminPage';
// import CreeEquipePage from './pages/CreeEquipePage'
// import RenderTravailPage from './pages/RenderTravailPage'
// import ListeDefisPage from './pages/ListeDefisPage'
// import CreeDefiPage from './pages/CreeDefiPage'
// import NoterPage from './pages/NoterPage'
// import ListeEquipesPage from './pages/ListeEquipesPage'
import EtudiantPage from './pages/EtudiantPage';
import JuryPage from './pages/JuryPage ';

function App() {
  return (
<>
{/* <Appp/> */}
    {/* <NavBar/> */}
    {/* <SidebarExample/> */}
    {/* <Login/> */}
    {/* <Register/> */}
    {/* <SidebarExample prop={<Etuduent/>}/> */}
    <BrowserRouter>
    <Routes>
      {/* admin */}
    <Route path="/" element={<Login/>} /> 
    <Route path="/Etudiant" element={<EtudiantPage />} /> 
    <Route path="/Jery/:id_jury" element={<JuryPage />} /> 
    <Route path="/Admin" element={<AdminPage />} /> 


{/* etudiant */}
    {/* <Route path="/CreeEquipe" element={<CreeEquipePage />} /> 
    <Route path="/RenderTravail" element={<RenderTravailPage />} />  */}

{/*  */}
    {/* <Route path="/ListeDefis" element={<ListeDefisPage />} /> 
    <Route path="/CreeDefi" element={<CreeDefiPage />} /> 
    // <Route path="/Noter" element={<NoterPage />} /> 
    <Route path="/ListeEquipes" element={<ListeEquipesPage />} />  */}
    </Routes>
    </BrowserRouter>

</>

  );
}

export default App;


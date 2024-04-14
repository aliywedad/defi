
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
import { Button } from 'react-bootstrap';
import EtuduentPage from './pages/EtudiantPage';
import Appp from './components/test';
import JeryPage from './pages/JeryPage';
import AdminPage from './pages/AdminPage';


function App() {
  return (
<>
{/* <Appp/> */}
    {/* <NavBar/> */}
    {/* <SidebarExample prop={<Etuduent/>}/> */}
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<EtuduentPage />} /> 
    <Route path="/Jery" element={<JeryPage />} /> 
    <Route path="/Admin" element={<AdminPage />} /> 

       </Routes>
    </BrowserRouter>

</>

  );
}

export default App;



import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
import { Button } from 'react-bootstrap';
<<<<<<< HEAD
import Login from './pages/login';
import Register from './pages/register';
=======
import EtuduentPage from './pages/EtudiantPage';
import Appp from './components/test';
import JeryPage from './pages/JeryPage';
import AdminPage from './pages/AdminPage';
>>>>>>> 6108a34c7fdb38f39e77dae646a537a7035a3b12


function App() {
  return (
<>
{/* <Appp/> */}
    {/* <NavBar/> */}
<<<<<<< HEAD
    {/* <SidebarExample/> */}
    {/* <Login/> */}
    <Register/>
=======
    {/* <SidebarExample prop={<Etuduent/>}/> */}
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<EtuduentPage />} /> 
    <Route path="/Jery" element={<JeryPage />} /> 
    <Route path="/Admin" element={<AdminPage />} /> 

       </Routes>
    </BrowserRouter>

>>>>>>> 6108a34c7fdb38f39e77dae646a537a7035a3b12
</>

  );
}

export default App;


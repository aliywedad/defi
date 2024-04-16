import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function SoumissionParJury({id}) {
  const [donnerr, setDonnerr] = useState([]);
  const [render, setRender] = useState('list');
 console.log("id = ",id)
  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/list_soumissionid/', { id });

      console.log(response.data); // Log the response data

      if (response.status === 200) {
        console.log('Soumissions récupérées avec succès');
        setRender('list');
        setDonnerr(response.data);
      } else {
        console.error('Erreur lors de la récupération des soumissions');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des soumissions', error);
    }
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="py-3 mb-4"><span className="text-muted fw-light">Liste des soumissions</span></h4>

      <div className="card">
        <div className="table-responsive text-nowrap">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Equipe</th>
                <th>Défi</th>
                <th>Lien git</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {donnerr.map(item => (
                <tr key={item.id}>
                  <td className='p-4'>{item.equipe}</td>
                  <td className='p-4'>{item.titre}</td>
                  <td className='p-4'>{item.lienGit}</td>
                  <td className='p-4'>
                    <button   className="btn btn-primary m-2">Affecter</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


// function Add({ setrender ,id_sou}) {
//   const [formData, setFormData] = useState({
//     idSou: id_sou,
//     id_jery: '',
//   });
//   const[donner,setDonner]=useState([])  
//   useEffect(() => {
//     fetchDataa()
//     }, []);
    
 
//   const fetchDataa = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/list_Jury/');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setDonner(data);
//       console.log(data)
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
//   const handleChangeIdCritere = (event) => {
//     const newValue = event.target.value;
//     setFormData({
//         ...formData,
//         id_jery: newValue,
//     });
// };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/add_affectation/', formData);

//       console.log(response.data); // Log the response data

//       if (response.status === 200) {
//         console.log('Etudiant ajouté avec succès',"data is ",formData);
//          setrender('list')
//         // Handle success (e.g., show a success message, navigate to another page)
//       } else {
//         console.error('Erreur lors de l\'ajout de l\'étudiant');
//         // Handle error response from the server
//       }
//     } catch (error) {
//       console.error('Erreur lors de la soumission du formulaire', error);
//       // Handle network errors or Axios-related errors
//     }
//   };

//   return (
//     <div className="content-wrapper">
//       <div className="container-xxl flex-grow-1 container-p-y">
//         <h4 className="py-3 mb-4"><span className="text-muted fw-light">Ajouter un étudiant</span></h4>

//         <div className="row">
//           <div className="col-md-12">
//             <div className="card mb-4">
//               <h5 className="card-header">Ajouter un étudiant</h5>
//               <hr className="my-0" />
//               <div className="card-body">
//                 <form onSubmit={handleSubmit}>
//                   <div className="row">
 
//                     <div className="mb-3 col-md-6">
//                          <label htmlFor="email" className="form-label">criter :</label>
//                         <select
//                         className="form-control"
//                         value={formData.id_jery}
//                         onChange={handleChangeIdCritere} // Use handleChangeIdCritere for this select input
//                         required
//                     >
//                  <option  value={1}>select criter</option>

//                 {donner.map(item => (
//                     <option key={`${item.id}`} value={item.id}>{item.name} {item.prénom}</option>
//                 ))}
//             </select>
//                       </div>

//                     <div className="mt-2">
//                       <button type="submit" className="btn btn-primary me-2">Enregistrer</button>
//                       <button type="button" className="btn btn-outline-secondary" onClick={() => { setrender("list") }}>Annuler</button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="content-backdrop fade"></div>
//     </div>
//   );
// }


 
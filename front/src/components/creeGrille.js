import React, { useState,useEffect } from 'react';
import axios from "axios";




export default function CreeGrille({ setrender ,name,id_defi}) {
    const [formData, setFormData] = useState({
        id_defi: id_defi,
        id_critere: '',
     });
  

     const[criter,setcriter]=useState([])
    //  const[item,setitem]=useState("")
     
     useEffect(() => {
       fetchData2()
       }, []);
       
     
       const fetchData2 = async () => {
       try {
         const response = await fetch('http://127.0.0.1:8000/list_Critere/');
         if (!response.ok) {
           throw new Error('Network response was not ok');
         }
         const data = await response.json();
         setcriter(data);
         console.log(data)
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     };




     const handleChangeIdCritere = (event) => {
        const newValue = event.target.value;
        setFormData({
            ...formData,
            id_critere: newValue,
        });
    };
  
    
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://127.0.0.1:8000/add_grille/', formData);
  
        console.log(response.data); // Log the response data
  
        if (response.status === 200) {
          console.log('Etudiant ajouté avec succès');
           setrender('list')
          // Handle success (e.g., show a success message, navigate to another page)
        } else {
          console.error('Erreur lors de l\'ajout de l\'étudiant');
          // Handle error response from the server
        }
      } catch (error) {
        console.error('Erreur lors de la soumission du formulaire', error);
        console.log(formData)
        // Handle network errors or Axios-related errors
      }
    };
    return (
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="py-3 mb-4"><span className="text-muted fw-light">Ajouter un Jury</span></h4>
  
          <div className="row">
            <div className="col-md-12">
              <div className="card mb-4">
                <h5 className="card-header">Ajouter un Jury</h5>
                <hr className="my-0" />
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
 
 
                      <div className="mb-3 col-md-6">
                        defi : {name}  <br/>
                        <label htmlFor="email" className="form-label">criter :</label>
                        <select
                className="form-control"
                value={formData.id_critere}
                onChange={handleChangeIdCritere} // Use handleChangeIdCritere for this select input
                required
            >
                 <option  value={1}>select criter</option>

                {criter.map(item => (
                    <option key={`${item.id}`} value={item.id}>{item.name}</option>
                ))}
            </select>
                      </div>
                      
                      
                       
                      <div className="mt-2">
                        <button type="submit" className="btn btn-primary me-2">Enregistrer</button>
                        <button type="button" className="btn btn-outline-secondary" onClick={() => { setrender("list") }}>Annuler</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-backdrop fade"></div>
      </div>
    );
  }
  
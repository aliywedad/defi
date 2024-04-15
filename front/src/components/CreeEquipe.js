
import React, { useState,useEffect } from 'react';
import axios from "axios";


export default function CreeEquipe(){

  const[donner,setDonner]=useState([])


  useEffect(() => {
    fetchData()
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/list_Utilisateur/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDonner(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };



  
      const [formData, setFormData] = useState({
        nomEquipe: '',
        leadID: '',
        adjointID: '',
        nombreMembres:''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://127.0.0.1:8000/add_Equipe/', formData);
    
          console.log(response.data); // Log the response data
    
          if (response.status === 200) {
            console.log('Etudiant ajouté avec succès');
            fetchData()
            // Handle success (e.g., show a success message, navigate to another page)
          } else {
            console.error('Erreur lors de l\'ajout de l\'étudiant');
            // Handle error response from the server
          }
        } catch (error) {
          console.error('Erreur lors de la soumission du formulaire', error);
          // Handle network errors or Axios-related errors
        }
      };
    
return(

<div class="content-wrapper">   
  <div class="container-xxl flex-grow-1 container-p-y">
      <h4 class="py-3 mb-4"><span class="text-muted fw-light">Créer une equipe </span></h4>

      <div class="row">
          <div class="col-md-12">

              <div class="card mb-4">
                  <h5 class="card-header">Créer une equipe </h5>

                  <hr class="my-0" />
                  <div class="card-body">



                  <form onSubmit={handleSubmit}>
                      <div class="row">
                        <div class="mb-3 col-md-6">
                            <label for="firstName" class="form-label">Nom :</label>
                            <input class="form-control" type="text" id="firstName" name="nom_equipe" value={formData.nomEquipe} onChange={handleChange} required/>

                        </div>
                        <div class="mb-3 col-md-6">
                            <label for="lead_id" class="form-label">Lead:</label>
                            <select id="lead_id" name="lead_id" class="form-control"  value={formData.leadID} onChange={handleChange} required>
                                
                                {donner.map(item=>(

                                  <option value="{item.id}">
                                    {item.email}
                                  </option>

                                ))}
                                
                            </select>
                        </div>
                        <div class="mb-3 col-md-6">
                            <label for="adjoint_id" class="form-label">Adjoint:</label>
                            <select id="adjoint_id" name="adjoint_id" class="form-control"  value={formData.adjointID} onChange={handleChange} required>
                            {donner.map(item=>(

                              <option value="{item.id}">
                                {item.email}
                              </option>

                            ))}
                            </select>
                        </div>
                        <div class="mb-3 col-md-6">
                          <label class="form-label">Membres:</label>
                          
                              <input  type="Number" name="membres_ids" class="form-control" value={formData.nombreMembres} onChange={handleChange} required />
                        </div>
                      </div>
                      <div class="mt-2">
                        <button type="submit" class="btn btn-primary me-2">Créer Équipe </button>
                        <button type="reset" class="btn btn-outline-secondary">Annuler</button>
                      </div>
                    </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
)


}
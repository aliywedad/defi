
import React, { useState,useEffect } from 'react';
import axios from "axios";


export default function CreeEquipe(){

  const[donner,setDonner]=useState([])
const [membresIds, setMembresIds] = useState([]);

  useEffect(() => {
    fetchData()
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/list_Etudiant/');
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
        leadID_id: '',
        adjointID_id: '',
        listmembre:[],
      });
      const handleChangeCheckbox = (e) => {
        const { value, checked } = e.target;
        if (checked) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            listmembre: [...prevFormData.listmembre, value],
          }));
        } else {
          setFormData((prevFormData) => ({
            ...prevFormData,
            listmembre: prevFormData.listmembre.filter((id) => id !== value),
          }));
        }
      };
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      };
      
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://127.0.0.1:8000/add_Equipe/', {
            ...formData,
            membres_ids: membresIds
          }); 
          console.log(membresIds)   
          console.log(response.data); // Log the response data
          console.log("data is ",formData); // Log the response data
    
          if (response.status === 200) {
            console.log('equipe ajouté avec succès');
            fetchData()
            // Handle success (e.g., show a success message, navigate to another page)
          } else {
            console.error('Erreur lors de l\'ajout de l\'étudiant');
            console.log(formData)
            // Handle error response from the server
          }
        } catch (error) {
          console.error('Erreur lors de la soumission du formulaire');
          console.log("les donnees",formData)
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
                            <input class="form-control" type="text"  name="nomEquipe" value={formData.nomEquipe}   onChange={handleChange} required/>

                        </div>
                        <div class="mb-3 col-md-6">
                            <label for="lead_id" class="form-label">Lead:</label>
                            <select id="lead_id" className="form-control" name="leadID_id" value={formData.leadID_id} onChange={handleChange} required>
                            <option value="">Select Lead</option>
                            {donner.map(item => (
                              <option key={item.id} value={item.id}>
                                {item.nom}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div class="mb-3 col-md-6">
                            <label for="adjoint_id" class="form-label">Adjoint:</label>
                            <select id="adjoint_id" className="form-control" name="adjointID_id" value={formData.adjointID_id} onChange={handleChange} required>
                            <option value="">Select Adjoint</option>
                            {donner.map(item => (
                              <option key={item.id} value={item.id}>
                                {item.nom}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="mb-3 col-md-6">
                      <label className="form-label">Membres :</label><br />
                      {donner.map(item => (
                        <div key={item.id} className="form-check">
                          <input className="form-check-input" type="checkbox" id={`membre_${item.id}`} name="membres_ids" value={item.id} onChange={handleChangeCheckbox} />
                          <label className="form-check-label" htmlFor={`membre_${item.id}`}>{item.nom}</label>
                        </div>
                      ))}
                    </div>
                      <div class="mt-2">
                        <button type="submit" class="btn btn-primary me-2">Créer Équipe </button>
                        <button type="reset" class="btn btn-outline-secondary">Annuler</button>
                      </div>
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
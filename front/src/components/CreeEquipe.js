import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function CreeEquipe() {
  const [donner, setDonner] = useState([]);
  const [membresIds, setMembresIds] = useState([]);
  const [leadValue, setLeadValue] = useState('');
  const [AdjValue, setAdjValue] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/list_Etudiant/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setDonner(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [formData, setFormData] = useState({
    nomEquipe: '',
    leadID_id: '',
    adjointID_id: '',
    listmembre: [],
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

  const handleChangeLead = (e) => {
    const { value } = e.target;
    setLeadValue(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      leadID_id: value,
    }));
  };

  const handleChangeAdjoint = (e) => {
    const { value } = e.target;
    setAdjValue(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      adjointID_id: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/add_Equipe/', {
        ...formData,
        membres_ids: membresIds
      });
      if (response.status === 200) {
        console.log('Equipe ajoutée avec succès');
        fetchData();
      } else {
        console.error('Erreur lors de l\'ajout de l\'équipe');
      }
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire');
    }
  };

  return (
    <div class="content-wrapper">
      <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="py-3 mb-4"><span class="text-muted fw-light">Créer une équipe</span></h4>
        <div class="row">
          <div class="col-md-12">
            <div class="card mb-4">
              <h5 class="card-header">Créer une équipe</h5>
              <hr class="my-0" />
              <div class="card-body">
                <form onSubmit={handleSubmit}>
                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="firstName" class="form-label">Nom :</label>
                      <input class="form-control" type="text" name="nomEquipe" value={formData.nomEquipe} onChange={(e) => setFormData((prevFormData) => ({...prevFormData, nomEquipe: e.target.value}))} required />
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="lead_id" class="form-label">Lead:</label>
                      <select id="lead_id" className="form-control" name="leadID_id" value={formData.leadID_id} onChange={handleChangeLead} required>
                      <option hidden>Sélectionnez un leader</option>
                        {donner.map(item => (
                          (item.id == AdjValue) ? null :
                          <option key={item.id} value={item.id}>
                            {item.nom}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="adjoint_id" class="form-label">Adjoint:</label>
                      <select id="adjoint_id" className="form-control" name="adjointID_id" value={formData.adjointID_id} onChange={handleChangeAdjoint} required>
                      <option hidden>Sélectionnez un adjoint</option>
                        {donner.map(item => (
                          (item.id == leadValue) ? null :
                            <option key={item.id} value={item.id}>
                              {item.nom}
                            </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-3 col-md-6" style={{ maxHeight: "105px", overflowY: "auto" }}>
                    <label className="form-label">Membres :</label><br />
                    {donner.map(item => (
                      <div key={item.id} className="form-check">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id={`membre_${item.id}`} 
                          name="membres_ids" 
                          value={item.id} 
                          onChange={handleChangeCheckbox}   
                          checked={formData.listmembre.includes(item.id.toString()) || item.id == leadValue || item.id == AdjValue }  
                        />
                        <label className="form-check-label" htmlFor={`membre_${item.id}`}>{item.nom}</label>
                      </div>
                    ))}
                  </div>


                    <div class="mt-2">
                      <button type="submit" class="btn btn-primary me-2">Créer Équipe</button>
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
  );
}

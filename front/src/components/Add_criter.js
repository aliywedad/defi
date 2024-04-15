

import React, { useState,useEffect } from 'react';
import axios from "axios";

export default function List_criter(){

const[donner,setDonner]=useState([])
const[item,setitem]=useState("")

useEffect(() => {
  fetchData()
  }, []);
  

  const fetchData = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/list_Critere/');
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
const[render,setrender]=useState('list')



if(render==='add')return <Add setrender={setrender} fetchData={fetchData}/>
else
return(
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="py-3 mb-4"><span className="text-muted fw-light">List des criteres</span></h4>

              <div className="card">
              <h5 className="card-header">  <span class="btn btn-outline-secondary" onClick={()=>{setrender("add")}}>Ajouter </span></h5>
                <div className="table-responsive text-nowrap">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Nom</th>
                        <th>score</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                       {donner.map(item=>(
                        <tr>
                            <td className='p-4'>{item.name}</td>
                            <td className='p-4'>{item.score}</td>
                        </tr>
                       ))}
                    </tbody>
                  </table>
                </div>
              </div>

              </div>
)


}


function Add({ setrender ,fetchData}) {
  const [formData, setFormData] = useState({
    score: '',
    name: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/add_critere/', formData);

      console.log(response.data); // Log the response data

      if (response.status === 200) {
        console.log('Etudiant ajouté avec succès');
        fetchData()
        setrender('list')
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
  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="py-3 mb-4"><span className="text-muted fw-light">Ajouter un Critere</span></h4>

        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <h5 className="card-header">Ajouter un Critere</h5>
              <hr className="my-0" />
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label htmlFor="nom" className="form-label">Nom :</label>
                      <input className="form-control" type="text" name="name" value={formData.name} onChange={handleChange} autoFocus required />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="prenom" className="form-label">score :</label>
                      <input className="form-control" type="text" name="score" value={formData.score} onChange={handleChange} required />
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






































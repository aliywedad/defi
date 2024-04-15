
import React, { useState,useEffect } from 'react';
import axios from "axios";

export default function Etuduent(){

  const[donner,setDonner]=useState([])
  const[item,setitem]=useState("")


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
  const[render,setrender]=useState('list')


const update=async(id)=>{
    console.log(id)
}
const delet = async (id) => {
  const confirmed = window.confirm('Are you sure you want to delete this item?');
  // Check if user confirmed
  if (confirmed) {
    // User confirmed, proceed with deletion logic
    // Put your deletion logic here
    try {
      const response = await axios.post('http://127.0.0.1:8000/delet_Etudiant/',{"id":id});
      console.log(response.data,"id = ",id)
      if(response.data==='200'){
        fetchData()
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    // console.log('Item deleted');
  } else {
    // User canceled, do nothing or show another message
    console.log('Deletion canceled');
  }}



if(render==='add')return <Add setrender={setrender} fetchData={fetchData}/>
else if(item!="")return <Update setitem={setitem} fetchData={fetchData} item={item}/>
else
return(    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="py-3 mb-4"><span className="text-muted fw-light" > List des Etudiants</span></h4>


              <div className="card">
              <h5 className="card-header">  <span class="btn btn-outline-secondary" onClick={()=>{setrender("add")}}>Ajouter </span></h5>
                <div className="table-responsive text-nowrap">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>email</th>
                        <th>spécialité</th>
                        <th>niveau</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                       {donner.map(item=>(
                        <tr>
                            <td className='p-4'>{item.nom}</td>
                            <td className='p-4'>{item.prénom}</td>
                            <td className='p-4'>{item.email}</td>
                            <td className='p-4'>{item.spécialité}</td>
                            <td className='p-4'>{item.niveau}</td>
                            <td className='p-4'> 
                            <a className='m-2' onClick={()=>{setitem(item)}} > modifier </a>
                            <a className='m-2'onClick={()=>{delet(item.id)}} >  suprimer</a>
                            </td>
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
    nom: '',
    prenom: '',
    email: '',
    specialite: 'DSI', // Default value
    niveau: 'L1' // Default value
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/add_etudiant/', formData);

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
        <h4 className="py-3 mb-4"><span className="text-muted fw-light">Ajouter un étudiant</span></h4>

        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <h5 className="card-header">Ajouter un étudiant</h5>
              <hr className="my-0" />
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label htmlFor="nom" className="form-label">Nom :</label>
                      <input className="form-control" type="text" name="nom" value={formData.nom} onChange={handleChange} autoFocus required />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="prenom" className="form-label">Prénom :</label>
                      <input className="form-control" type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="email" className="form-label">Email :</label>
                      <input className="form-control" type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="specialite" className="form-label">Spécialité :</label>
                      <select className="form-control" name="specialite" value={formData.specialite} onChange={handleChange}>
                        <option value="DSI">DSI</option>
                        <option value="CNM">CNM</option>
                        <option value="RSS">RSS</option>
                      </select>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="niveau" className="form-label">Niveau :</label>
                      <select className="form-control" name="niveau" value={formData.niveau} onChange={handleChange}>
                        <option value="L1">L1</option>
                        <option value="L2">L2</option>
                        <option value="L3">L3</option>
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



function Update({ setitem ,fetchData,item}) {
  const [formData, setFormData] = useState({
    id: item.id,
    nom: item.nom,
    prenom: item.prénom,
    email: item.email,
    specialite: item.spécialité, // Default value
    niveau: item.niveau // Default value
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/update_etudiant/', formData);

      console.log(response.data); // Log the response data

      if (response.status === 200) {
        console.log('Etudiant ajouté avec succès',"id : ",formData);
        fetchData()
        setitem("")
        // setrender('list')
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
        <h4 className="py-3 mb-4"><span className="text-muted fw-light">Ajouter un étudiant</span></h4>

        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <h5 className="card-header">Ajouter un étudiant</h5>
              <hr className="my-0" />
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label htmlFor="nom" className="form-label">Nom :</label>
                      <input className="form-control" type="text" name="nom" value={formData.nom} onChange={handleChange} autoFocus required />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="prenom" className="form-label">Prénom :</label>
                      <input className="form-control" type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="email" className="form-label">Email :</label>
                      <input className="form-control" type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="specialite" className="form-label">Spécialité :</label>
                      <select className="form-control" name="specialite" value={formData.specialite} onChange={handleChange}>
                        <option value="DSI">DSI</option>
                        <option value="CNM">CNM</option>
                        <option value="RSS">RSS</option>
                      </select>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="niveau" className="form-label">Niveau :</label>
                      <select className="form-control" name="niveau" value={formData.niveau} onChange={handleChange}>
                        <option value="L1">L1</option>
                        <option value="L2">L2</option>
                        <option value="L3">L3</option>
                      </select>
                    </div>

                    <div className="mt-2">
                      <button type="submit" className="btn btn-primary me-2">Enregistrer</button>
                      <button type="button" className="btn btn-outline-secondary" onClick={() => { setitem("") }}>Annuler</button>
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
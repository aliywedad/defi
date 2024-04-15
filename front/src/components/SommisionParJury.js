import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function SoumissionParJury({id}) {
  const [donnerr, setDonnerr] = useState([]);
  const [render, setRender] = useState('list');
  const [id_defi, setid_defi] = useState('list');
  const [id_soumission, setid_soumission] = useState('list');
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
  if(render==='add')return <Add setrender={setRender} id_soumission={id_soumission} id_defi={id_defi} idjery={id} />
  else
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
                    <button   className="btn btn-primary m-2" onClick={()=>{setRender("add"); setid_defi(item.défi);setid_soumission(item.id)}}>Noter</button>
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


function Add({ setrender ,id_soumission ,id_defi,id_jery}) {
  const [formData, setFormData] = useState({
    idSou: id_soumission,
    jery: id_jery,
    not: '',
  });
  const[donner,setDonner]=useState([])  
  useEffect(() => {
    fetchDataa()
    }, []);
    
  const fetchDataa = async () => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/list_criterGrille/', {id_defi:id_defi});
  
        console.log(response.data); // Log the response data
  
        if (response.status === 200) {
          console.log('Soumissions récupérées avec succès the data is : ',response.data);
        //   setrender('list');
          setDonner(response.data);
        } else {
          console.error('Erreur lors de la récupération des soumissions');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des soumissions', error);
      }
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/add_affectation/', formData);

      console.log(response.data); // Log the response data

      if (response.status === 200) {
        console.log('Etudiant ajouté avec succès',"data is ",formData);
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
 
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <h5 className="card-header">Grille d'evaluation</h5>
              <hr className="my-0" />
              <div className="card-body">
                   <div className="row">
 
                  <div className="table-responsive text-nowrap">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>criter</th>
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

                    <div className="mt-2">
                    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="note">Note:</label>
        <input
          type="text"
          id="note"
          name="not"
          className="form-control w-50 m-4" 

          value={formData.not}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary me-2">Enregistrer</button>
                      <button type="button" className="btn btn-outline-secondary" onClick={() => { setrender("list") }}>Annuler</button>    </form>


                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-backdrop fade"></div>
    </div>
  );
}


 
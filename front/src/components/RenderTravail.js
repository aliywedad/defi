
import React from 'react';
import axios from 'axios';

export default function RenderTravail(){
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Get form data
        const formData = new FormData(e.target);
    
        try {
          const response = await axios.post('http://127.0.0.1:8000/rander/', formData);
    
          console.log(response.data); // Log the response data
    
          if (response.status === 200) {
            console.log('Data sent successfully');
            // setrender('ListeDefis')
            // Handle success (e.g., show a success message)
          } else {
            console.error('Error sending data');
            // Handle error response from the server
          }
        } catch (error) {
          console.error('Error submitting the form', error);
          // Handle network errors or Axios-related errors
        }
      };
    
      return (
        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="py-3 mb-4"><span className="text-muted fw-light">Rander</span></h4>
    
          <div className="row">
            <div className="col-md-12">
              <div className="card mb-4">
                <h5 className="card-header"> </h5>
    
                <hr className="my-0" />
                <div className="card-body">
                  <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="row">
                      <div className="mb-3 col-md-12">
                        <label htmlFor="titre" className="form-label">Equipe</label>
                        <input
                          className="form-control"
                          type="text"
                          id="titre"
                          name="Equipe"
                          autoFocus
                          required
                        />
                      </div>
                      <div className="mb-3 col-md-12">
                        <label  className="form-label">DEFI</label>
                        <input className="form-control" type="text" name="DEFI" id="date_debut" required />
                      </div>

                      <div className="mb-3 col-md-12">
                        <label htmlFor="date_debut" className="form-label">Lien GIT</label>
                        <input className="form-control" type="git" name="GIT" id="date_debut" required />
                      </div>

                      <div className="mb-3 col-md-12">
                        <label htmlFor="date_fin" className="form-label">Date du sommision </label>
                        <input className="form-control" type="date" name="date" id="date_fin" required />
                      </div>
                      <div className="mb-3 col-md-12">
                        <label htmlFor="desc" className="form-label">Sélectionnez un ou plusieurs fichier(s)</label>
                        <input className="form-control" type="file" name="file" id="file" required />
                      </div>
                      
                    </div>
                    <div className="mt-2">
                      <button type="submit" className="btn btn-primary me-2">Enregistrer</button>
                      <button type="reset" className="btn btn-outline-secondary">Annuler</button>
                    </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
        </div>
      );


}
import React from 'react';
import axios from 'axios';

export default function CreeDefi({setrender}) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);

    try {
      const response = await axios.post('http://127.0.0.1:8000/create_defi/', formData);

      console.log(response.data); // Log the response data

      if (response.status === 200) {
        console.log('Data sent successfully');
        setrender('ListeDefis')
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
      <h4 className="py-3 mb-4"><span className="text-muted fw-light">Création du Défi</span></h4>

      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <h5 className="card-header">Détails du Défi</h5>

            <hr className="my-0" />
            <div className="card-body">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="row">
                  <div className="mb-3 col-md-12">
                    <label htmlFor="titre" className="form-label">Libellé</label>
                    <input
                      className="form-control"
                      type="text"
                      id="titre"
                      name="titre"
                      autoFocus
                      required
                    />
                  </div>
                  <div className="mb-3 col-md-12">
                    <label htmlFor="date_debut" className="form-label">Date de début</label>
                    <input className="form-control" type="date" name="date_debut" id="date_debut" required />
                  </div>
                  <div className="mb-3 col-md-12">
                    <label htmlFor="date_fin" className="form-label">Date de fin</label>
                    <input className="form-control" type="date" name="date_fin" id="date_fin" required />
                  </div>
                  <div className="mb-3 col-md-12">
                    <label htmlFor="desc" className="form-label">Sélectionnez un ou plusieurs fichier(s)</label>
                    <input className="form-control" type="file" name="file" id="file" required />
                  </div>
                  <div className="mb-3 col-md-12">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <textarea className="form-control" name="desc" id="desc" cols="20" rows="5" required></textarea>
                  </div>
                  <div className="mb-3 col-md-12">
                    <input type="checkbox" id="notification" name="notification" /> envoi le notification
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

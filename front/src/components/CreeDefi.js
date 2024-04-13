
import React from 'react';

export default function CreeDefi(){

return(

    <div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="py-3 mb-4"><span class="text-muted fw-light">cree du Défi</span></h4>

    <div class="row">
      <div class="col-md-12">
        <div class="card mb-4">
          <h5 class="card-header">Détails du Défi</h5>
    
          <hr class="my-0" />
          <div class="card-body">
            <form id="formAccountSettings" method="post" action="{% url 'create_defi' %}" enctype="multipart/form-data">
              <div class="row">
                <div class="mb-3 col-md-12">
                  <label for="titre" class="form-label">Libellé</label>
                  <input
                    class="form-control"
                    type="text"
                    id="titre"
                    name="titre"
                    autofocus required/>
                </div>
                <div class="mb-3 col-md-12">
                  <label for="date_debut" class="form-label">Date de début</label>
                  <input class="form-control" type="date" name="date_debut" id="date_debut"  required/>
                </div>
                <div class="mb-3 col-md-12">
                  <label for="date_fin" class="form-label">Date de fin</label>
                  <input class="form-control" type="date" name="date_fin" id="date_fin"  required/>
                </div>
                <div class="mb-3 col-md-12">
                  <label for="desc" class="form-label">Sélectionnez un ou plusieurs fichier(s)</label>
                  <input class="form-control" type="file" name="file" id="file" required />
                </div>
    
                <div class="mb-3 col-md-12">
                  <label for="desc" class="form-label">Description</label>
                  <textarea class="form-control" name="desc" id="desc" cols="20" rows="5" required></textarea>
                </div>
                <div class="mb-3 col-md-12">
                    <input type="checkbox" id="notification" name="notification" /> envoi le notification
                  </div>
              </div>
              <div class="mt-2">
                <button type="submit" class="btn btn-primary me-2">Enregistrer</button>
                <button type="reset" class="btn btn-outline-secondary">Annuler</button>


              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  </div>

)


}
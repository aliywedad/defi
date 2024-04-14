
import React from 'react';

export default function CreeEquipe(){

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



                    <form id="formAccountSettings" method="POST" action="" >
                      <div class="row">
                        <div class="mb-3 col-md-6">
                            <label for="firstName" class="form-label">Nom :</label>
                            <input class="form-control" type="text" id="firstName" name="nom_equipe"  autofocus  required/>
                        </div>
                        <div class="mb-3 col-md-6">
                            <label for="lead_id" class="form-label">Lead:</label>
                            <select id="lead_id" name="lead_id" class="form-control" required>
                                <option value=""></option>
                            </select>
                        </div>
                        <div class="mb-3 col-md-6">
                            <label for="adjoint_id" class="form-label">Adjoint:</label>
                            <select id="adjoint_id" name="adjoint_id" class="form-control" required>
                                <option value=""></option>
                            </select>
                        </div>
                        <div class="mb-3 col-md-6">
                          <label class="form-label">Membres:</label>
                            <div class="form-check">
                              {/* <input class="form-check-input" type="checkbox"  name="membres_ids" value="" required> */}
                              <label class="form-check-label" for="">
                              </label>
                            </div>
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

import React from 'react';

export default function RenderTravail(){

return(

<div class="content-wrapper">
  <div class="container-xxl flex-grow-1 container-p-y">
      <h4 class="py-3 mb-4"><span class="text-muted fw-light">render le travail </span></h4>

      <div class="row">
          <div class="col-md-12">

              <div class="card mb-4">
                  <h5 class="card-header">render le travail </h5>

                  <hr class="my-0" />
                  <div class="card-body">
                    <form id="formAccountSettings" method="POST" action="" enctype="multipart/form-data">
                          <div class="row">
                              <div class="mb-3 col-md-12">
                                  <label for="firstName" class="form-label">Equipe :</label>
                                  <select id="équipe" name="équipe" class="form-control" required>
                                        <option value=""></option>
                                </select>
                              </div>
                              <div class="mb-3 col-md-12" >
                                <label for="firstName" class="form-label">Defi :</label>
                                <select id="défi" name="défi" class="form-control" required>
                                      <option value=""></option>
                              </select>                            
                            </div>
                            <div class="mb-3 col-md-12">
                              <label for="firstName" class="form-label">Lien Git: :</label>
                              <input class="form-control" type="text"  name="lienGit"  autofocus required/>
                          </div>
                              <div class="mb-3 col-md-12">
                                  <label for="firstName" class="form-label">Date de Soumission:</label>
                                  <input class="form-control" type="date" id="firstName" name="dateSoumission"  autofocus required />
                              </div>
                              <div class="mb-3 col-md-12">
                                <label for="file" class="form-label">Sélectionnez un ou plusieurs fichier(s)</label>
                                <input class="form-control" type="file" id="file" name="file"  autofocus required />
                            </div>
                          </div>

                          <div class="mt-2">
                              <button type="submit" class="btn btn-primary me-2">Enregistrer </button>
                              <button type="reset" class="btn btn-outline-secondary">Annuler</button>
                          </div>
                      </form>
                  </div>
              </div>

          </div>
      </div>
  </div>



  <div class="content-backdrop fade"></div>
</div>
)


}

import React from 'react';

export default function RenderTravail(){

return(

    <div class="content-wrapper">

    <div class="container-xxl flex-grow-1 container-p-y">
      <h4 class="py-3 mb-4"><span class="text-muted fw-light">defis</span>  </h4>
          
              <div class="card">
                <h5 class="card-header"><a href="/create_defi">Liste des défis</a></h5>
                <div class="table-responsive text-nowrap">
                  <h5 class="card-header"> <a  href="{% url 'create_defi' %}">Ajouter</a></h5>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>Titre</th>
                        <th>Date de début</th>
                        <th>Date de fin</th>
                        <th>Description</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                      <tr>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td>
                            <a href="{% url 'delete_defi' id=defi.id %}" id="supprimer">Supprimer</a> | 

                            <a href="{% url 'download_or_view_file' file_id=defi.id %}"> </a> 
                                <a href="{% url 'download_or_view_file' file_id=defi.id %}"></a> 
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              </div>
              </div>
)


}
import React from 'react';

export default function ListeEquipes(){

return(
<div class="content-wrapper">
    <div class="container-xxl flex-grow-1 container-p-y">
      <h4 class="py-3 mb-4"><span class="text-muted fw-light">Equipes</span></h4>

    <div class="card">
    <h5 class="card-header"> Equipes</h5>
    <div class="table-responsive text-nowrap">
        <table class="table table-hover">
        <thead>
            <tr>
            <th>Nom de l'Équipe</th>
            <th>Leader</th>
            <th>Adjoint</th>
            <th>Détails</th>
            </tr>
        </thead>
        <tbody class="table-border-bottom-0">
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td><a href="">Voir Détails</a></td> 
            </tr>
        </tbody>
        </table>
    </div>
    </div>

    </div>
</div>
)


}
import React ,{ useState,useEffect } from 'react';

export default function ListeEquipes(){

    const[donner,setDonner]=useState([])


    useEffect(() => {
      fetchData()
      }, []);
    
      const fetchData = async () => {
        try {
          const response = await fetch('http://127.0.0.1:8000/list_Equipe/');
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
        {donner.map(item=>(
        <tr>
            <td className='p-4'>{item.nomEquipe}</td>
            <td className='p-4'>{item.leadID}</td>
            <td className='p-4'>{item.adjointID}</td>
            <td className='p-4'>{item.nombreMembres}</td>
        </tr>
        ))}
        </tbody>
        </table>
    </div>
    </div>

    </div>
</div>
)


}
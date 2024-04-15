import React ,{ useState,useEffect } from 'react';
import axios from "axios";

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

      const delet = async (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this item?');
        // Check if user confirmed
        if (confirmed) {
          // User confirmed, proceed with deletion logic
          // Put your deletion logic here
          try {
            const response = await axios.post('http://127.0.0.1:8000/delet_Equipe/',{"id":id});
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
        }
      }

      const valider = async (id) => {
        const confirmed = window.confirm('Are you sure you want to validate this item?');
        // Check if user confirmed
        if (confirmed) {

          try {
            const response = await axios.post('http://127.0.0.1:8000/valider_Equipe/',{"id":id});
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
        }
      }
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
            <th colSpan={2}>Actions</th>
            </tr>
        </thead>
        <tbody className="table-border-bottom-0">
{donner.map(item => (
  <tr style={{ background: item.valider === false ? "#D41B46" : "inherit" }}>
    <td className='p-4' style={{ color: item.valider === false ? "#fff" : "inherit" }}>{item.nomEquipe}</td>
    <td className='p-4' style={{ color: item.valider === false ? "#fff" : "inherit" }}>{item.leadID}</td>
    <td className='p-4' style={{ color: item.valider === false ? "#fff" : "inherit" }}>{item.adjointID}</td>
    <td className='p-4' style={{ color: item.valider === false ? "#fff" : "inherit" }}>{item.nombreMembres}</td>
    <td>
      <button className='btn btn-primary' onClick={() => {delet(item.id)}} > Supprimer</button>
    </td>
    <td>
      {item.valider === false ? (
        <button className='btn btn-primary' onClick={() => {valider(item.id)}} > Valider</button>
      ) : null}
    </td>
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
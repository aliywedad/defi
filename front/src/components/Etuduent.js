
import React, { useState,useEffect } from 'react';

export default function Etuduent(){

const[donner,setDonner]=useState([])


useEffect(() => {
    const data = [
      {"id":1,"Nom":"aliy","Prenom":"med","email":"22086@supnum.mr","spécialité":"dsi","niveau":"L1"},
      {"id":2,"Nom":"med","Prenom":"med","email":"22086@supnum.mr","spécialité":"dsi","niveau":"L1"},
      {"id":3,"Nom":"solieman","Prenom":"med","email":"22086@supnum.mr","spécialité":"dsi","niveau":"L1"},
      {"id":4,"Nom":"bechir","Prenom":"med","email":"22086@supnum.mr","spécialité":"dsi","niveau":"L1"},
      {"id":5,"Nom":"cherive","Prenom":"med","email":"22086@supnum.mr","spécialité":"cnm","niveau":"L1"},
      {"id":6,"Nom":"khato","Prenom":"med","email":"22086@supnum.mr","spécialité":"cnm","niveau":"L1"},
      {"id":7,"Nom":"cheri","Prenom":"med","email":"22086@supnum.mr","spécialité":"rss","niveau":"L1"}
    ];
    setDonner(data);
  }, []);

const delelt=async(id)=>{
    console.log(id)
}
const update=async(id)=>{
    console.log(id)
}
return(
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="py-3 mb-4"><span className="text-muted fw-light" > List des Etudiants</span></h4>


              <div className="card">
                <h5 className="card-header">  <a href='/#'>Ajouter</a></h5>
                <div className="table-responsive text-nowrap">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>email</th>
                        <th>spécialité</th>
                        <th>niveau</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                       {donner.map(item=>(
                        <tr>
                            <td className='p-4'>{item.Nom}</td>
                            <td className='p-4'>{item.Prenom}</td>
                            <td className='p-4'>{item.email}</td>
                            <td className='p-4'>{item.spécialité}</td>
                            <td className='p-4'>{item.niveau}</td>
                            <td className='p-4'> 
                            <a className='m-2' onClick={()=>{update(item.id)}} > modifier </a>
                            <a className='m-2'onClick={()=>{delelt(item.id)}} >  suprimer</a>
                            </td>
                        </tr>
                       ))}
                    </tbody>
                  </table>
                </div>
              </div>

              </div>
)


}
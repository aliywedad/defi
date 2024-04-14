
import React, { useState,useEffect } from 'react';
import axios from "axios";

export default function Admin(){

  const[donner,setDonner]=useState([])
  const[render,setrender]=useState('list')


useEffect(() => {
    const data = [
      {"id":1,"Nom":"aliy","Prenom":"med","email":"22086@supnum.mr",'defi':[]},
      {"id":2,"Nom":"med","Prenom":"med","email":"22086@supnum.mr"},
      {"id":3,"Nom":"solieman","Prenom":"med","email":"22086@supnum.mr"},
      {"id":4,"Nom":"bechir","Prenom":"med","email":"22086@supnum.mr"},
      {"id":5,"Nom":"cherive","Prenom":"med","email":"22086@supnum.mr"},
      {"id":6,"Nom":"khato","Prenom":"med","email":"22086@supnum.mr"},
      {"id":7,"Nom":"cheri","Prenom":"med","email":"22086@supnum.mr"}
    ];
    setDonner(data);
  }, []);

  const delet = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this item?');
    // Check if user confirmed
    if (confirmed) {
      // User confirmed, proceed with deletion logic
      // Put your deletion logic here
      try {
        const response = await axios.post('http://127.0.0.1:8000/delet_Admin/',{"id":id});
        console.log(response.data,"id = ",id)
        if(response.data==='200'){
          // fetchData()
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      // console.log('Item deleted');
    } else {
      // User canceled, do nothing or show another message
      console.log('Deletion canceled');
    }}
const update=async(id)=>{
    console.log(id)
}
if(render==='add')return <Add setrender={setrender}/>
else
return(
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="py-3 mb-4"><span className="text-muted fw-light">List des Admins</span></h4>


              <div className="card">
                <h5 className="card-header">  <span class="btn btn-outline-secondary" onClick={()=>{setrender("add")}}>Ajouter </span></h5>
                <div className="table-responsive text-nowrap">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>email</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                       {donner.map(item=>(
                        <tr>
                            <td className='p-4'>{item.Nom}</td>
                            <td className='p-4'>{item.Prenom}</td>
                            <td className='p-4'>{item.email}</td>
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
function Add({setrender}){
  return(

    <div class="content-wrapper">
      <div class="container-xxl flex-grow-1 container-p-y">
          <h4 class="py-3 mb-4"><span class="text-muted fw-light">Ajouter un Admin </span></h4>
    
          <div class="row">
              <div class="col-md-12">
    
                  <div class="card mb-4">
                      <h5 class="card-header">Ajouter un Admin </h5>
    
                      <hr class="my-0" />
                      <div class="card-body">
                        <form id="formAccountSettings" method="POST" action="" enctype="multipart/form-data">
                              <div class="row">
                                <div class="mb-3 col-md-12">
                                  <label for="firstName" class="form-label">Nom :</label>
                                  <input class="form-control" type="text"  name="lienGit"  autofocus required/>
                                </div>
                                <div class="mb-3 col-md-12">
                                  <label for="firstName" class="form-label">Prenom :</label>
                                  <input class="form-control" type="text"  name="lienGit"  autofocus required/>
                                </div>                                 
                                <div class="mb-3 col-md-12">
                                  <label for="firstName" class="form-label">email:</label>
                                  <input class="form-control" type="email"  name="lienGit"  autofocus required/>
                                </div>   
                              <div class="mt-2">
                                  <button type="submit" class="btn btn-primary me-2">Enregistrer </button>
                                  <button type="reset" class="btn btn-outline-secondary" onClick={()=>{setrender("list")}}>Annuler</button>
                              </div>
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
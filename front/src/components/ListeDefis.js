
import React, { useState,useEffect } from 'react';
import axios from "axios";
import CreeGrille from './creeGrille'
export default function ListDefi({prop}){

  const[donner,setDonner]=useState([])
  const[render,setrender]=useState("list")
 

  const[id_def,setid_def]=useState(0)
  const[namee,setname]=useState("")

useEffect(() => {
  fetchData()
  }, []);
  
  const delet = async (id) => { console.log("hhhhhh")}
  const fetchData = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/list_defi/');
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
  const onButtonClick = (path,name) => {
      const pdfUrl = path;
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = name; // specify the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };

 
if (render ==="grille"){return <CreeGrille id_defi={id_def} name={namee} setrender={setrender} />}
else
return(
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="py-3 mb-4"><span className="text-muted fw-light">List des defi</span></h4>

              <div className="card">
                 <div className="table-responsive text-nowrap">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>titre</th>
                        <th>desc</th>
                        <th>fichier</th>
                        <th>date du debut</th>
                        <th>date du fin</th>
                        <th colSpan={3}>Action</th>
                      </tr>
                    </thead>
                    {/* {
        "id": 1,
        "titre": "Sample Title",
        "desc": "Sample Description",
        "fileName": "loi2013-025-fr.pdf",
        "filePath": "C:\\Users\\HP_Laptop\\Desktop\\S3C\\defi4\\back\\myapp\\files\\loi2013-025-fr.pdf",
        "date_debut": "2024-04-15",
        "date_fin": "2024-04-30"
    }, */}
                    <tbody className="table-border-bottom-0">
                       {donner.map(item=>(
                        <tr>
                            <td className='p-4'>{item.titre}</td>
                            <td className='p-4'>{item.desc}</td>
                            <td className='p-4'>{item.fileName}</td>
                            <td className='p-4'>{item.date_debut}</td>
                            <td className='p-4'>{item.date_fin}</td>
                            <td className='p-4'> 
                            {/* <a className='m-2' onClick={()=>{update(item.id)}} > modifier </a> | */}
                            {/* <a className='m-2'onClick={()=>{delet(item.id)}} >  suprimer</a> | */}
                            {/* <a className='m-2' href={"C:\Users\HP_Laptop\Downloads\loi2013-025-fr.pdf"} download>{item.fileName}</a> */}
                            <button onClick={() => onButtonClick(item.filePath, item.fileName)} className='btn btn-primary ml-1'>Télécharger</button>
                            {prop ==="admin" && (<button className='btn btn-primary m-2' onClick={()=>{setrender("grille");setid_def(item.id);setname(item.titre)}}>cree criller</button>)}


                            
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
 
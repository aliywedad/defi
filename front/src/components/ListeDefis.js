
import React, { useState,useEffect } from 'react';
import axios from "axios";

export default function RenderTravail(){

const[donner,setDonner]=useState([])

useEffect(() => {
  fetchData()
  }, []);
  
  const delet = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this item?');
    // Check if user confirmed
    if (confirmed) {
      // User confirmed, proceed with deletion logic
      // Put your deletion logic here
      try {
        const response = await axios.post('http://127.0.0.1:8000/delet_Jery/',{"id":id});
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
    }}
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

const update=async(id)=>{
    console.log(id)
}

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
                            <button onClick={() => onButtonClick(item.filePath, item.fileName)}>Télécharger</button>


                            
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
 
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function ShowUser(){
   
    const [data,setData]=useState([])
    function demo(){
        fetch('http://localhost:5000/student').then((result)=>{
            result.json().then((res)=>{
                setData(res)
            })
        })
    }
  useEffect(()=>{
    demo()
  },[])

  function del(id){
    //alert(id)
    fetch(`http://localhost:5000/student/${id}`,{
        method:'DELETE',
    }).then((result)=>{
        result.json().then((res)=>{
            console.log(res)
            
        })

    })
    demo()
  }
  
function edit(id){
    //alert(id)
    window.localStorage.setItem('st',JSON.stringify(id))
}



    return(
        <>
        <table className="table table-hover">
            <tr className="bg-danger">
            <th>id</th>
                <th>NAME</th>
                <th>Email</th>
                <th>NUMBER</th>
                <th>Edit</th>
                <th>DELETE</th>
            </tr>
            {
                data.map((item,index)=>
                <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.number}</td>
                <Link to={'/update'}><td><button className="bg-primary" onClick={()=>edit(index)}>edit</button></td></Link>
                <td><button className="bg-danger" onClick={()=>del(item.id)}>delete</button></td>
                </tr>
                )
            }
        </table>
        </>
    )
}
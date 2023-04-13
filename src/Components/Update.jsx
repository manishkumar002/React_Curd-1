import React, { useEffect, useState } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function Update(){
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[number,setNumber]=useState('');
    const[userId,setUserId]=useState(null);
   
    
    useEffect(()=>{
      var id=JSON.parse(window.localStorage.getItem('st'))
      //alert(id)
      fetch('http://localhost:5000/student').then((res)=>{
        res.json().then((resp)=>{
          //console.log(resp)
          
          setName(resp[id].name)
          setEmail(resp[id].email)
          setNumber(resp[id].number)
          setUserId(resp[id].id)
          

        })
      })
    },[])
    
 function updateData(){
  
    let m={name,email,number}
    fetch(`http://localhost:5000/student/${userId}`,{
       method:'PUT',
       headers:{
        'Content-Type':'application/json'
       },
       body:JSON.stringify(m)
    }).then((result)=>{
        result.json().then((res)=>{
            console.log(res)
        })
        
    })
 }
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <div className="d-flex flex-row align-items-center justify-content-center">

            <p className="lead fw-normal mb-0 me-3">Sign in with</p>

            <MDBBtn floating size='md' tag='a' className='me-2'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'>
              <MDBIcon fab icon='twitter'/>
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>
          <MDBInput wrapperClass='mb-4'  id='formControlLg' type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
          <MDBInput wrapperClass='mb-4'  id='formControlLg' type='email'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4'  id='formControlLg' type='number'  value={number} onChange={(e)=>setNumber(e.target.value)}/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <Link to="/show"><input  onClick={updateData} value="Update" className='bg-primary fs-4'/></Link>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
          </div>

        </MDBCol>

      </MDBRow>

      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>

        <div>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='twitter' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='google' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='linkedin-in' size="md"/>
          </MDBBtn>

        </div>

      </div>

    </MDBContainer>
  );
}

export default Update;
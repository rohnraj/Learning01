import React, { useState } from 'react';
import style from './UserData.module.css';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';


function UserData() {
    const [inpname,setname]=useState('')
    const [inpenll, setenll]=useState('')
    const [age,setage]=useState('')

    const navigate=useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        try{

            axios.post('http://localhost:8080/thankyou',{name:inpname,enrollment_number:inpenll,age})
            console.log('data send to server successfully');
            console.log({inpname,inpenll,age})
        }
        catch(e){
            console.log("data can't send to the server");
        }
        navigate('/thankyou')
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name='name'
            value={inpname}
            onChange={(e)=>setname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Enrollment Number
          </label>
          <input 
            type="text" 
            className="form-control" 
            id="exampleInputPassword1" 
            name='enrollment_number'
            value={inpenll}
            onChange={(e)=>setenll(e.target.value)}
            />
        </div>
        <div className="mb-3 form-check">
          <label className="form-check-label" htmlFor="exampleCheck1">
            Age
          </label>
          <input 
            type="text" 
            className="form-check-input" 
            id="exampleCheck1" 
            name='age'
            value={age}
            onChange={(e)=>setage(e.target.value)}
            />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserData;

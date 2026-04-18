import React, { useState } from 'react'
import './styles/Login.css'
function Login({setAuthendication}) {
    let loginUserName="rohit";
    let loginPassword="rohit";
    const [error, setError] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    function loginWindow(){
        if(name===loginUserName && password===loginPassword){
        setAuthendication(true);
        setError("");
    }
        else{
            setError("Invalid Login");
        }
    }
  return (
    <>
    <div className='Login'>
        <h1>
            Login
        </h1>
        <span>User Name:</span><br/>
        <input type="text" onChange={(e)=>{
            setName(e.target.value);
        }}/><br/>
        <span>
            Password:
        </span><br/>
        <input type="password" onChange={(e)=>{
            setPassword(e.target.value);
        }}/><br/>
        <span className='error'>{error}</span><br/>
        <button onClick={loginWindow}>Login</button>
    </div>
    </>
  )
}

export default Login
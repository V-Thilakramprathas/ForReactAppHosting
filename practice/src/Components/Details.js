import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import UserInput from './UserInput'
import './styles/Details.css'
function Details() {
    const [inputNeed, setInputNeed] = useState(false)
        const [studentDetails, setStudentDetails] = useState([])
    useEffect(() => {
        
    })
    
    if(!inputNeed){
        return (
    <div className='details'>
       { studentDetails.map((value)=>{
            return(<Cards props={value} setStudentDetails={setStudentDetails} studentDetails={studentDetails}/>);
        })}
        <button className='insert' onClick={()=>{
            setInputNeed(true);
        }}>+</button>
    </div>
  )
    }
    else{
        console.log("Working"+inputNeed);
        return(<UserInput setStudentDetails={setStudentDetails} studentDetails={studentDetails} setInputNeed={setInputNeed}/>);
    }
}

export default Details
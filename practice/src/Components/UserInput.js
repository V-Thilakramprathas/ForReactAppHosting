import React, { useState } from 'react'
import './styles/UserInput.css'
function UserInput({setStudentDetails,studentDetails,setInputNeed}) {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [mark, setMark] = useState(0)
    function addDetails(){
        let temp=studentDetails;
        temp.push({
            name:name,
            age:age,
            mark,mark
        })
        setStudentDetails(temp);
        setInputNeed(false);
    }
  return (
    <>
    <div className='UserInput'>
        <br/>
        <span>Name :</span>
        <br/>
        <input type="text" onChange={(e)=>{
            setName(e.target.value);
        }}/>
        <br/>
        <span>Age :</span>
        <br/>
        <input type="number" onChange={(e)=>{
            setAge(e.target.value);
        }}/><br/>
        <span>Mark :</span><br/>
        <input type="number" onChange={(e)=>{
            setMark(e.target.value);
        }}/>
        <br/><br/>
        <button onClick={addDetails}>ADD</button>
    </div>
    </>
  )
}

export default UserInput
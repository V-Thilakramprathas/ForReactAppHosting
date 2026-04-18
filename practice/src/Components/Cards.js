import React from 'react'
import './styles/Cards.css'

function Cards({props,setStudentDetails,studentDetails}) {

function deleteCard(){
let temp=studentDetails.filter((value)=>{
  return !(value.name==props.name && value.age==props.age && value.mark==props.mark)
})
        setStudentDetails(temp);
}
  return (
    <>
        <div className='card' onClick={deleteCard}>
            <p>Name :{props.name}</p>
            <p>Age :{props.age}</p>
            <p>Mark:{props.mark}</p>
        </div>
    </>
  )
}

export default Cards
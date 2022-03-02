import React from 'react'
  
type personNamesProps={
    personNames:{
        name:string
        age:number
        id:number
    }[]
}
 function PersonName({personNames}:personNamesProps) {
    

  return (
    <div>
       {personNames.map((valuesName)=>{
           return(
               <>
               <h1 className="headpersonname">{valuesName.name} {valuesName.age} {valuesName.id}</h1>
               </>
           )
       })}
    </div>
  )
}
export default PersonName

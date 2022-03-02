// import { type } from 'os'
import React from 'react'
type Props={
    name:string;
  
    messageNum:number;
}
// you can use interface here
// interface Props{
//     name:string;
// }
function Greet({name,messageNum}:Props) {
  return (
    <div>

        <h1>Hey Welcome Here {name} You Have {messageNum} unread message</h1>
    </div>
  )
}

export default Greet
import { useState } from 'react'


import './App.css'
function App() {
  const [arr,Setarr]=useState([])
  const [data,Setdata]= useState({   name:"",    grno:"" })
  
  

  
function changename () {
Setdata({...data,[e.target.name]:e.target.value})
}

let {name,grno}=data;
function changename () {
Setarr([...arr,{name,grno}])
// console.log(data);

console.log(arr);
Setdata({name: "", grno: ""})

}
  return (
    
    <div className='Studentslist'>
   <input type="text"  value={data.name}autoComplete='off' name='name' onChange={changename} placeholder='Enter Your Name'/>
   <input type="number"  value={data.grno} autoComplete='off' name='grno'onChange={changename} placeholder='Enter Your Roll Number'/>
   <button onClick={changename}> Add your </button>
    </div>
  
  )
  }

export default App

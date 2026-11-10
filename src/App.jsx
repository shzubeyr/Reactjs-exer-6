import { useState, useEffect } from 'react';

function App(){
  const [title,setTitle] = useState("Hello");
  const [name,setName] = useState("");
  useEffect(()=>{
    document.title=  `${title} ${name}`;
    
  },[title,name])
  return(
    <>
      <h1>Enter Your Name</h1>
      <input 
      type="text" 
      value={name}
      onChange={(e)=> setName(e.target.value)}
      />
      <h1>Choose Greeting</h1>
      <input 
      type="text" 
      value={title}
      onChange={(e)=> setTitle(e.target.value)}
      />
    </>
  )
}
export default App;
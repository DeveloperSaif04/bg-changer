import React, { useState } from 'react'

function App() {
  const [backgroundColor,setBackgroundColor]= useState("pink")
  return (
    <>
    
    <div className="w-screen h-screen relative	" style={{ backgroundColor }}> 
    
    <div className="bg-white text-2xl	w-3/4	h-14	flex	items-center	justify-center	gap-20 absolute bottom-20 left-32 		rounded">
      <button className="outline-none px-8 py-5  rounded text-white"style={{backgroundColor:"yellow"}} onClick={()=> setBackgroundColor("yellow")}  >Yellow</button>
      <button  className="outline-none px-8 py-5  rounded text-white"style={{backgroundColor:"red"}} onClick={()=> setBackgroundColor("red")} >Red</button>
      <button  className="outline-none px-8 py-5  rounded text-white"style={{backgroundColor:"purple"}} onClick={()=> setBackgroundColor("purple")} >Purple</button>
      <button  className="outline-none px-8 py-5  rounded text-white"style={{backgroundColor:"blue"}} onClick={()=> setBackgroundColor("blue")} >Blue</button>
      <button  className="outline-none px-8 py-5  rounded text-white"style={{backgroundColor:"orange"}} onClick={()=> setBackgroundColor("orange")} >Orange</button>
      <button  className="outline-none px-8 py-5  rounded "style={{backgroundColor:"green"}} onClick={()=> setBackgroundColor("green")} >Green</button>
    </div>
    
    </div>

    </>
  )
}

export default App
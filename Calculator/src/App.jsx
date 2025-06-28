

import { useState } from 'react'
import './App.css'
import Buttons from './button'
import Display from './display'

function App() {
  const [displayValue,setDisplayVal]=useState('')
  const buttonvalue= (buttonText)=>{
    if(buttonText==="C"){
      setDisplayVal('');
    }
    else if(buttonText==="="){
      const result= parseFloat(eval(displayValue))
      setDisplayVal(result)
    }
    else {
      const newDisplayVal= displayValue+ buttonText
      setDisplayVal(newDisplayVal)
    }
    
  }
 

  return (
    <>
        <div>
          <h1 className='heading'>Calculator</h1>
          <div className='outerBox'>
            <Display displayVal={displayValue}/>
            <Buttons setDisplayVal={buttonvalue}/>
          </div>
        </div>
    </>
  )
}

export default App

import React, { useState } from 'react';
import './App.css'

const App = () => {

  const [value, setValue] = useState(0)

  const myFun = () =>{
    setValue(value+1)
  }
  const resetFun = () =>{
    setValue(0)
  }

  const myFun1 = () =>{
    setValue(value-1)
  }


  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center display-5">
          {value}
        </div>

        <div className="container">
          <button className='btn btn-danger float-start' onClick={myFun1}>Click me -</button>
          <button className='btn btn-success btn-2' onClick={resetFun}>Reset</button>
          <button className='btn btn-success float-end' onClick={myFun}>Click me +</button>
        </div>
      </div>
    </div>
  )
}

export default App


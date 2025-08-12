import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  const addNum = ()=>{
    count = count + 1;
    setCount(count);
  }

  const minusNum = ()=>{
    count = count - 1;
    setCount(count);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={addNum}>
          + 
        </button>
        {count}
        <button onClick={minusNum}>
          - 
        </button>
      </div>
      <p className="border-4 border-blue-500 p-6 bg-yellow-300 text-black rounded-lg text-green">
        Counter for using useState.
      </p>
    </>
  )
}

export default App

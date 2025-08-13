import { useState } from 'react'

function Count() {
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
      <p className="border-4 border-blue-500 p-1 bg-yellow-300 text-black rounded-lg text-green">
        Counter for using useState.
      </p>
    </>
  )
}

export default Count

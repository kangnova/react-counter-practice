
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleTambah = () => {
    setCount(count + 1)
    }
  
    const handleKurang = () => {
      setCount(count - 1)
    }
  return (
    
      <div>
        <h1>Counter App</h1>
        <p>{count}</p>
        <button onClick={handleTambah}>Tambah (+)</button>
        <button onClick={handleKurang}>Kurang (-)</button>
      </div>
      
  )
}

export default App

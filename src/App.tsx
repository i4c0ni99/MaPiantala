import { useState } from 'react'
import './App.css'

function App() {
  const [count, _] = useState(0)
  return (
    <>
      Hello, World! {count}
    </>
  )
}

export default App

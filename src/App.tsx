import { useState } from 'react'
import Nav from './Components/Nav'
import Bannar from './Components/Bannar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav />
     <Bannar />
    </>
  )
}

export default App

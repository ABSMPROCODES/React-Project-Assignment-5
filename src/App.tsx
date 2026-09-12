import { Suspense, useState } from 'react'
import Nav from './Components/Nav'
import Bannar from './Components/Bannar'
import Technology from './Components/Technology'
import type { Tprops } from './type'

const Technologyfetch = async (): Promise<Tprops[]> => {
const res = await fetch('/public/data.json')
const data = await res.json()
return data 
}
function App() {
const Technologys = Technologyfetch()
  return (
    <>
     <Nav />
     <Bannar />
     <Suspense fallback={<div>Loading...</div>}>
     <Technology Technologies={Technologys} />
     </Suspense>
    </>
  )
}

export default App

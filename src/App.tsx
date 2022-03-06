import { useState } from 'react'
import './App.css'
import VLibras from '@djpfs/react-vlibras'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
       <Card />
       <VLibras />
    </div>

  )
}

export default App

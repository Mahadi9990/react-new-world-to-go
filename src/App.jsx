
import { Suspense } from 'react'
import './App.css'
import Contries from './components/Contries/Contries'

function App() {

  return (
    <>
    <Suspense fallback={<p>loading ....</p>}>
        <Contries/>
    </Suspense>
    </>
  )
}

export default App

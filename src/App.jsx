import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { persons } from './data'
import { Header } from './components/Header'
import { Counter } from './components/Counter'
import { PersList } from './components/PersList'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pers, setPers] = useState(persons)

  return (
    <>
      <div className='fo container-fluid'>
        <div className='fo pt-2'>
          <span style={{ textAlign: 'center' }}><Header /></span>
          <div style={{ textAlign: 'center', paddingBottom: '10px', width: '100%' }}><Counter szam={pers.length} /></div>
          
          {pers.length != 0 && <PersList pers={pers} setPers={setPers} />}
        </div>
      </div>
    </>
  )
}

export default App

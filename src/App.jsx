import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  const [count, setCount] = useState(0)

  
  
  return (
        <>
          <NavBar/>
          
          <ItemListContainer greeting={'Bienvenidos a la nueva tienda de bebidas online!'}/>
        </>  
  )
}

export default App

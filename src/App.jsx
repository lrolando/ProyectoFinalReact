import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
        <>
          <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/ProyectoFinalReact/' element ={<ItemListContainer/>}></Route>
            <Route path='/ProyectoFinalReact/category/:id' element = {<ItemListContainer greeting={'Bienvenidos a la nueva tienda de bebidas online!'}/>}/>
            <Route path='/ProyectoFinalReact/item/:id' element = {<ItemDetailContainer/>}/>
            <Route></Route>
          </Routes>
          </BrowserRouter>
        </>  
  )
}

export default App

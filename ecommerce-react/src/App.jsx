import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const saludo = "Hola Mundo"

  return (
  <>
    <div className="app-container">
          <NavBar />
          <ItemListContainer saludo={ "Bienvenido a mi Ecommerce con React" } />
          <ItemListContainer saludo={ "Aprendiendo a reutilizar componentes usando props" } />
          <div className="card">
            <p>
              Aprendiendo a usar ReactJs
            </p>
          </div>
      </div>
    
  </>
  )
}

export default App

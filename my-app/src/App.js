import logo from './logo.svg';
import './App.css';
import gsap from "gsap"
import { useEffect } from 'react';

function App() {

  const animar = () => {
    let saludo = document.querySelector(".saludo")
    gsap.to(saludo, {x: 20, backgroundColor: 212122})
  }

  const agrandar = () => {
    let saludo = document.querySelector(".saludo")
    gsap.to(saludo, {scale: 3})
  }


  return (
    <div className="App">
      <p className="saludo">hola</p>
      <button onMouseOver={agrandar} onClick={animar}>Animar</button>
    </div>
  );
}

export default App;

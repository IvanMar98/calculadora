import './App.css';
import Boton from './components/Boton';
import Panel from './components/Panel';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs'

function App() {

  const [input, setInput] = useState('');

  const agregarInput = valor =>{
    setInput(input + valor);
  };
  const calcResult = () =>{
    if(input){
      setInput(evaluate(input));
    }else{
      alert('Primero debes escribir valores para realizar los calculos')
    }
  };

  return (
    <div className="App">
     <h1> Calculator</h1>
     <div className ='container-main'>
      <div className='container-panel'>
        <Panel input={input} />
      </div>
      <div className='fila'>
        <Boton manejarClic = {agregarInput}>
          1
        </Boton>
        <Boton manejarClic = {agregarInput}>
          2
        </Boton>
        <Boton manejarClic = {agregarInput}>
          3
        </Boton>
        <Boton manejarClic = {agregarInput}>
          +
        </Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic = {agregarInput}>
          4</Boton>
        <Boton manejarClic = {agregarInput}>
          5</Boton>
        <Boton manejarClic = {agregarInput}>
          6</Boton>
        <Boton manejarClic = {agregarInput}>
          -</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic = {agregarInput}>
          7</Boton>
        <Boton manejarClic = {agregarInput}>
          8
        </Boton>
        <Boton manejarClic = {agregarInput}>
          9
        </Boton>
        <Boton manejarClic = {agregarInput}>
          *
        </Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic = {calcResult}>
          =
        </Boton>
        <Boton manejarClic = {agregarInput}>
          0
        </Boton>
        <Boton manejarClic = {agregarInput}>
          .
        </Boton>
        <Boton manejarClic = {agregarInput}>
          /
        </Boton>
      </div>
      <div className='fila'>
      <BotonClear manejarClic = {() =>setInput('')}>
        Clear
      </BotonClear>
      </div>
     </div>
    </div>
  );
}

export default App;

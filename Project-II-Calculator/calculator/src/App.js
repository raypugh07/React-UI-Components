import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';


const App = () => {
  return (
    <div className='container'>


    <div className='zero'>
     <CalculatorDisplay text='0'/>
     </div>

     <div className='calcrow'>
     <ActionButton buttonStyle='clear' text='clear'/>
     <ActionButton buttonStyle='function' text='/'/>
      </div>

      <div className='calcrow'>
      <NumberButton buttonStyle='number' text='7'/>
      <NumberButton buttonStyle='number' text='8'/>
      <NumberButton buttonStyle='number' text='9'/>
      <ActionButton buttonStyle='function' text='*'/>
      </div>

      
      <div className='calcrow'>
      <NumberButton buttonStyle='number' text='4'/>
      <NumberButton buttonStyle='number' text='5'/>
      <NumberButton buttonStyle='number' text='6'/>
      <ActionButton buttonStyle='function' text='-'/>
      </div>
      
      
      <div className='calcrow'>
      <NumberButton buttonStyle='number' text='1'/>
      <NumberButton buttonStyle='number' text='2'/>
      <NumberButton buttonStyle='number' text='3'/>
      <ActionButton buttonStyle='function' text='+'/>
      </div>

      
      <div className='calcrow'>
      <NumberButton buttonStyle='numbzero' text='0'/>
      <ActionButton buttonStyle='function' text='='/>
      </div>
      
      

      

    </div>//container
  );
};

export default App;

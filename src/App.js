import "./styles.css";
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import VaccineApp1 from './VaccineApp1';
import VaccineApp2 from './VaccineApp2'

export default function App() {

  const [pin1, setPin1] = useState();
  const [pin2, setPin2] = useState();

  const onChangeHandler = (e) => {
    setPin1(e.target.value);
  }

  const onClickHandler = () => {
    setPin2(pin1);
  }
 
  
  return (
    <div className="App" >
      <div class="PinDiv">
        
      <p>Enter Your Area PIN to Check Availibilty</p>
      <input type="text" onChange={ (e) => {onChangeHandler(e)}} />
      <button class="button1" onClick={onClickHandler}>Submit</button>
      </div>
      <VaccineApp1 value={pin2}/>
      <VaccineApp2 value={pin2}/>
    </div>
  );
}

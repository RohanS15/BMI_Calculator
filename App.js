import React, { useState } from 'react'
import './bmi.css'
const App = () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [string, setString] = useState('');
    const [showString, setShowString] = useState(false);
    
  
    const rangeSlide1 = (event) => {    
        setValue1(event.target.value);
    };
    const rangeSlide2 = (event) => {
        setValue2(event.target.value);
    };
    const calculateBmi = ()=>{
        let value = value2/100
        let bmi = value * value
        setValue3(value1/bmi)
        tellString()
        setShowString(true)

    }
     const tellString =()=>{
        if(value3<16){
            setString('Severely Thin')
        }
        if(value3>16 && value3<17){
            setString('Moderately Thin')
        }
        if(value3>17 && value3<18.5){
            setString('Mildly Thin')
        }
        if(value3>18.5 && value3<25){
            setString('Normal')
        }
        if(value3>25 && value3<30){
            setString('Overweight')
        }
        
        if(value3>30 && value3<35){
            setString('Obese - Class 1')
        }
        
        if(value3>35 && value3<40){
            setString('Obese - Class 2')
        }
        
        if(value3>40){
            setString('Obese - Class 3')
        }
       
     }
    

    return (
        <div className='body'>   
        <div className="head"><h1>Body Mass Index Calculator</h1> </div>
        <div className='bg'>
        <h1>  B M I  </h1>
        </div>
        <div className="body2">
        <div className='container'>
            <div className='main'>
            <span id="rangeValue">{value1} </span>
            <input 
                className="range" 
                type="range" 
                name="" 
                value={value1} 
                min="0" 
                max="150" 
                onChange={rangeSlide1} 
                onMouseMove={rangeSlide1} 
            />
            <h1>WEIGHT: {value1} kilograms</h1>
            </div>
            <div className='main'>
            <span id="rangeValue">{value2}  </span>
            <input 
                className="range" 
                type="range" 
                name="" 
                value={value2} 
                min="0" 
                max="350" 
                onChange={rangeSlide2} 
                onMouseMove={rangeSlide2} 
            />
            <h1>HEIGHT: {value2} Centimeters</h1>
            </div>
        </div>
        <div className='value'>
        <span><h1>BMI is {value3.toFixed(2)} kg/m<sup>2</sup></h1></span>
        {showString && <h2>You are {string} </h2>}
        </div>
        <div className="btn"><button onClick={calculateBmi}>Calculate</button></div>
        </div>
        </div>
    );
}

export default App

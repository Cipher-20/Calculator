
import { useState } from 'react';
import * as calcServices from '../../services/calcServices';

function CalcBody() {
    const [number, setNumber] = useState(0);
    const [result, setResult] = useState(0);


    const inputHandler = (e) =>{

        const value = e.target.value;
        
        setNumber(e.target.value);  

    }

    const addHandeler = (e) =>{
        e.preventDefault();

        let expression;

        expression = calcServices.add(result, number);

        setResult(expression);

    }

    const substractHandeler = (e) =>{
        e.preventDefault();

        let expression;

        expression = calcServices.subtraction(result, number);

        setResult(expression);
    }

    const multiplyHandeler = (e) =>{
        e.preventDefault();

        let expression;

        expression = calcServices.multiply(result, number);

        setResult(expression);
    }

    const divisionHandeler = (e) =>{
        e.preventDefault();

        let expression;

        expression = calcServices.division(result, number);

        setResult(expression);
    }

    const percentHandeler = (e) =>{
        e.preventDefault();

        let expression;

        expression = calcServices.percent(result, number);

        setResult(expression);
    }


    const clearHandeler = (e) =>{
        e.preventDefault();

        setResult(0);
    }

    console.log(result);


    return(
        <>
            <div>
            
            <div className="label-input-number">
            <label  className="label-expression">Enter your expression:</label>
            <input  type="text" id="calculator-body" name="calculator-body" onChange={inputHandler} />
            </div>

            <p>{result}</p>

            <button className="btn" onClick={addHandeler} >Add</button>
            <button className="btn" onClick={substractHandeler} >Subtraction</button>
            <button className="btn" onClick={multiplyHandeler} >Multiply</button>
            <button className="btn" onClick={divisionHandeler} >Division</button>
            <button className="btn" onClick={percentHandeler} >Percent</button>
            <button className="btn" onClick={clearHandeler} >Clear</button>


            </div>
        </>
    );
}


export default CalcBody;
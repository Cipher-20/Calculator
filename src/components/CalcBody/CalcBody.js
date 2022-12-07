import * as calcServices from '../../services/calcServices';

function CalcBody() {





    return(
        <>
            <div>
            
            <div className="label-input-number">
            <label  className="label-expression">Enter your expression:</label>
            <input  type="text" id="calculator-body" name="calculator-body" />
            </div>

            <button className="btn" onClick={} >Add</button>
            <button className="btn" onClick={} >Subtraction</button>
            <button className="btn" onClick={} >Multiply</button>
            <button className="btn" onClick={} >Division</button>

            </div>
        </>
    );
}


export default CalcBody;
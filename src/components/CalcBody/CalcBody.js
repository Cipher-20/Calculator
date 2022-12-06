function CalcBody() {
    return(
        <>
            <div>
            
            <div className="label-input-number">
            <label  className="label-expression">Enter your expression:</label>
            <input  type="text" id="calculator-body" name="calculator-body" />
            </div>

            

            <button className="btn" >Add</button>
            <button className="btn" >Subtraction</button>
            <button className="btn" >Multiply</button>
            <button className="btn" >Division</button>





            </div>
        </>
    );
}


export default CalcBody;
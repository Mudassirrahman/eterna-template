import React, { useState } from "react";

const Form = ()=>{
    const [email,setEmail]   = useState({email:""});

    function getFormData (e) {
      e.preventDefault() 
    }
    return(
        <>
            <div className="form-sect">
                <div className="form-decp">
                <h1>Our Newsletter</h1>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>

                </div>
                <div className="inp-butn">
                <form  onSubmit ={getFormData}>
                  <input type="email" name="email" placeholder="" required onChange={(e)=>setEmail(e.target.value)} />
                  <button className="form-b" type="submit" value="submit">subscribe</button>
                  </form>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}
export default Form
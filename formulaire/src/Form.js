import React from 'react';
import './Form.css'

const Form = () => {

    return ( 
 < div className="form">

  <h1 className="titre"> Create Account </h1>
         <p className="input-group mb-3">
         <input type="text"
        className ="form-control"
        placeholder ="Your Name" ></input>
         </p> 
        <p className="input-group mb-3">
        
        <input type="text"
        className="form-control"
        placeholder="Your Mail"></input>
         
        </p> 
        <p className="input-group mb-3">
        <input type="Password"
        className="form-control"
        placeholder="Password" >
         </input> 
        </p> 
        <p className="input-group mb-3">
        
        <input type="Password"
        className="form-control"
        placeholder="Confirm Password"></input> 
        </p> 
        <select class="count selectpicker countrypicker">
        
        <option> Tunis </option> 
        <option> Algerie </option> 
        <option> Lybie </option> 
        <option> Moritaine </option> 
        <option> Marroc </option> 
        </select> 
        <div class="ml-2 col-sm-6">
        
        <div id="msg" > </div> 
        <form method="post"
        id="image-form">
        
        <input type = "file"
        name = "img[]"
        class = "file"
        accept = "image/*"></input> 
        </form> 
        </div>

        
        <label class = "chec">
        
        <input name = "acceptedTerms"
        type = "checkbox"/> 
        { '   ' }
        I accept the terms of service 
        </label>

        
        <button type = "button"
        class = "butt btn btn-primary"> Submit </button> 

        
        </div>

    );
}

export default Form;
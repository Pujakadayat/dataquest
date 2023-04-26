// import Navbar from "./Navbar";
import React from "react";
import "./form.css";

  export function form1(){
    return(
        <>
 
         <div className="container">
        <header class="header">
            <h1 id="title">
                Survey form for 
            </h1>
            <p id="description">
                WEHUB
            </p>
        </header>
        <form action="" id="surveyform">
           
            <div className="formgroup">
                <label for="name">Name</label>
                <input type="text"
                name="name" id="name"
                class="formcontrol"
                placeholder="enter your name" required />
            </div>
            <div className="formgroup">
                <label for="email">Email</label>
                <input type="email"
                name="email" id="email"
                class="formcontrol"
                placeholder="enter your email" required />
            </div>
            <div className="formgroup">
                <label for="number">Phone Number</label>
                <input type="number"
                name="phone" id="phone"
                class="formcontrol"
                placeholder="enter your phone number" 
                 required />
            </div>
            <div className="formgroup">
                <label for="address" >Address</label>
                    <span className="clue" >(optional)</span>
                
                <input type="text"
                name="address" id="address"
                class="formcontrol"
                placeholder="enter your address" required />
            </div>
            <div class="formgroup">
                <p id="quest">Which option best describe your current role?</p>
<select name="role" id="dropdown" class="formcontrol" required >
<option value="" disabled selected>Select current role</option>
<option value="student">Student</option>
<option value="teacher">Teacher</option>
<option value="job">Job</option>
<option value="othert">Other</option>
</select>
            </div>
            <div className="formgroup">
              <p id="quest"How you come to know about WEHUB></p>  
              <label for="">
                <input type="radio"
                name="source"
                value="friends"
                class="inputRadio"
                checked />friends
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="tv-ads"
                class="inputRadio"
                checked />Tv-ads
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="socialmedia"
                class="inputRadio"
                checked />Social media
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="newspapers"
                class="inputRadio"
                checked />Newspapers
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="other"
                class="inputRadio"
                checked />Other
              </label>
            </div>
            <div class="formgroup">
                <p id="quest">Would you like to see improved</p>
                <label for="">
                    <input type="checkbox"
                    name="prefer"
                    value="back-end-dev"
                    class="checkbox"
                    checked />Back-End-Development
                  </label>
                  <label for="">
                    <input type="checkbox"
                    name="prefer"
                    value="front-end-dev"
                    class="checkbox"
                    checked />Front-End-Development
                  </label>
                  <label for="">
                    <input type="checkbox"
                    name="prefer"
                    value="app-dev"
                    class="checkbox"
                    checked />Android-App Developer
                  </label>
                  <label for="">
                    <input type="checkbox"
                    name="prefer"
                    value="software-engineering"
                    class="checkbox"
                    checked />Software Engineering
                  </label>
                  <label for="">
                    <input type="checkbox"
                    name="prefer"
                    value="other"
                    class="checkbox"
                    checked />Other
                  </label>
            </div>
            <div class="formgroup">
                <p id="quest">Give us your feedback</p>
                <textarea name="feedback" id="feedback" cols="30" rows="5" placeholder="enter your feedback here"></textarea>
            </div>
            <div class="formgroup">
                <button type="submit" id="submit" class="btn">Submit</button>

            </div>
        </form>
    </div>
        </>
    );

}
export default form1;
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import cnt from '../assets/images/cnt.webp'
const Contact = () =>{
  useEffect(()=>{

    //javascript here
  },[])

return(
<>
<section id="contact tpm" class="contact-us ">
        <div class="container my-4">
        <div class="row">
        <div class="suport">
        <h4>Support</h4>
         </div>
        <div class="dot-linee"></div>
        <div class="lets-talk">
            <h6>Let's talk</h6>
            <p>Thanks for your interest in our services. Please fill out the email form, submit and we will get back to you soon.</p>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12 contact">
            <form>
                <div class="form-group">
                  <input type="Name" class="form-control" id="exampleInputName" aria-describedby="name" placeholder="Name"/>
                </div>
                <div class="form-group">
                    <input type="Email" class="form-control" id="exampleInputemail" aria-describedby="email" placeholder="Email"/>
                </div>
                <div class="form-group">
                    <input type="Subject" class="form-control" id="exampleInputsubject" aria-describedby="subject" placeholder="Subject"/>
                </div>
                <div class="form-group ">
                    <textarea type="Message" class="form-control" id="exampleInputmessage" aria-describedby="message" placeholder="Message"/>
                  </div>
                <button type="submit" class="btn btn-primary contact_us_submit">Submit</button>
              </form>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 contact-picture my-2">
            <img src={cnt}/>
        </div>
      </div>
      </div>
      </section>

</>

)

}

export default Contact

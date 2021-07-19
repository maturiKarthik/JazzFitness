import React from "react"
import "../styles/contact.css"
import { TextField, Button } from "@material-ui/core"

const Contact = () => {
  return (
    <>
      {" "}
      <section>
        <div className="custom_title" id="contact">
          <p>Contact Us</p>
          <div className="underline">
            <div className="parallelogram"></div>
            <div className="parallelogram"></div>
            <div className="parallelogram"></div>
            <div className="parallelogram"></div>
          </div>
        </div>
        <div className="contact">
          <div className="frm">
            <form
              method="post"
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              hidden
              noValidate
              autoComplete="off"
            >
              <input type="hidden" name="form-name" value="contact" />
              <TextField
                name="fullName"
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
              />
              <TextField
                name="PhoneNumber"
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
              />
              <TextField
                name="Description"
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                placeholder="Leave your Query"
                variant="outlined"
              />
              <Button type="submit" variant="contained">
                SEND
              </Button>
            </form>
          </div>
          <div className="frame">
            <iframe
              loading="lazy"
              allowfullscreen
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCBJ2qCoaBaDYTX9uotWQkyURAk_Wt265w
    &q=BJP SRINIVASS MUDHIRAJ'S VILLA"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

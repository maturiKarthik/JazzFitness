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
              name="contact"
              method="POST"
              data-netlify="true"
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
              />
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                placeholder="Leave your Query"
                variant="outlined"
              />
              <Button type="submit" variant="contained">
                SUBMIT
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

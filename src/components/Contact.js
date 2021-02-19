import React, {useState} from 'react'
import emailjs from "emailjs-com"
import {useForm} from "react-hook-form"

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const {register, handleSubmit, errors}= useForm();

    const serviceID = "service_ID";
    const templateId = "template_ID";
    const userId = "user_xV9qswwtGhNITvXD9WpbY";

    const onSubmit= (data, r ) => {

     
        sendEmail(
            serviceID, 
            templateId, 
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userId
            )
            r.target.reset()
    }

  const sendEmail = (serviceID, templateId, variables , userId) => {
    
        emailjs.send(serviceID, templateId, variables , userId)
          .then(() => {
            setSuccessMessage("form was sent successfully! I will get back to you ASAP")
          }).catch(err => console.error(`something went wrong ${err}`))
      }
      
    return (
        <div id="contact" className="contacts bg-dark" style={{
            padding: "3rem 0"
        }}>
            <div className="text-center">
                <h1 style={{
                    color:"orange",
                    padding:"1.3rem 0",
                    textTransform:"uppercase"
                }}>Contact Me</h1>
                <p style={{ 
                    color:"white",
                    fontSize:"1.2rem"
                }}>Please fill the form and decribe your
                    project needs and I will get back to you ASAP</p>
            </div>
            <div className="container-contact" style={{
                
            }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* name */}
                        <input className="form-control" id="name" type="text" placeholder="Name" name="name" ref={
                            register({
                                required: "Please Enter your name",
                                maxLength: {
                                    value: 20,
                                    message:"Please enter a name with less than 20 charactors "
                                }
                            })
                        }
                        />
                        <p className="error-message" style = {{
                            color:"white"
                        }}>{errors.name && errors.name.message }</p>
                            {/* phone number */}
                        <input className="form-control" id="phone" type="text" placeholder="Phone Number" name="phone" ref={
                            register({
                                required: "Please Enter your phone number",
                                maxLength: {
                                    value: 20,
                                    message:"enter numbers less than 20 "
                                }
                            })
                        }/>
                         <p className="error-message" style = {{
                            color:"white"
                        }}>{errors.phone && errors.phone.message }</p>
                        {/* email */}
                        <input className="form-control" id="email" type="email" placeholder="Email" name="email"  
                        ref={
                            register({
                                required: "Please provide email",
                               pattern: {
                                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                   message: "invalid email"
                               }
                            })
                        }/>
                        <p className="error-message" style = {{
                            color:"white"
                        }}>{errors.email && errors.email.message }</p>
                        {/* subject */}
                        <input className="form-control" id="subject"type="text" placeholder="Title" name="subject"    ref={
                            register({
                                required: "Oops you forgot to add the title "
                            })
                        }/>
                          <p className="error-message" style = {{
                            color:"white"
                        }}>{errors.subject && errors.subject.message }</p>
                    </div>
                    <div className="col-md-6 col-xs-12">
                           {/* short decription*/}
                           <textarea id="decription"type="text" className="form-control" placeholder="Description" name="decription">
                            </textarea>
                            <button className="btn-main-offer contact-btn btn" type="submit" style={{
                                textTransform:"uppercase"

                            }}>Contact Me</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contact

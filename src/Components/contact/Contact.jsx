import React, { useRef, useState } from 'react'
import './Contact.css'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import emailjs from 'emailjs-com';

const Result = () => {
    return(
        <p>Your message has been sent successfully!</p>
    )
}


const Contact = () => {

    const formRef = useRef()

    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm("service_y5hp05d", "template_x1tumy3", formRef.current, "user_RSxQco2AAoPz4GoI1ft4i")
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });           
    }

    setTimeout(() => {
        setDone(false)
    },5000)

    

    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <div className="c-info">
                        <h2 className='info1'>Hello I'm Dasvanth</h2>   
                        <h4 className='info2'>(Java Developer)</h4> 
                        <div className='img'><img className='c-img' src="d1.jpg"/></div>
                                                               
                    </div>
                </div>

                <div className="c-right">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <h1 className="c-title">Contact me</h1>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="user_message" />
                        <button>Send</button>

                        <div className="c-result">
                            {done ? <Result/> : null}
                        </div>
                        
                    </form>

                </div>
            </div>
            
        </div>
    )
}

export default Contact

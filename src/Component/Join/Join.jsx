import { useRef } from 'react';
import "../Join/Join.css";
import emailjs from '@emailjs/browser';

export default function Join() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qfpezxq', 'template_cbgbzdp', form.current, 'eN8YAOP3w90g7hBPM')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='join' id='join-us'>
        <div className="left-j">
            <hr />
        <div>
            <span className='stroke-text'>READY TO</span>
            <span> LEVEL UP</span>
        </div>
        <div>
            <span className='stroke-text'>YOUR BODY</span>
            <span> WITH US?</span>
        </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Enter your Email adresee here'/>
                <button className='btn btn-join'> Join now </button>
            </form>
        </div>
      
    </div>
  )
}

import "./contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    const handleOnClick = () => {
        const email = 'krishnan.ki@northeastern.edu';
        window.location.href = `mailto:${email}`;
      };
    return (
        
        <div className="contact">
            

        <div className="contact-bubble">

            <div>
            <h1 className="contact-text">Contact Me</h1>

            <a href="https://www.linkedin.com/in/kirtanakrishnan/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} style={{color: "#d37bac"}} size="2xl" className="linkedin"/>
            </a>

            
            <FontAwesomeIcon icon={faEnvelope} style={{ color: '#d37bac', cursor: 'pointer'}} size="2xl" onClick={handleOnClick} className="email" />
            
            
            <a href="https://github.com/kirtanakrishnan/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2xl"  style={{color: "#d37bac"}} className="git" />
            </a>
             
       
            </div>
            

        </div>

        </div>
    );
  }
  
  export default Contact;
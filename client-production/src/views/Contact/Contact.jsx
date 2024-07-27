import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faTwitter, faLinkedin, faInstagram , faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Contact.sass'

const Contact = () => {
    return (
        <>
            <div className="contact">
                <Navbar />
                <h1 className="contact__title">Contact Us</h1>

                <div className="contact__developer">
                    <h2 className="contact__subtitle">Get To Know The Developer</h2>
                    <div className="contact__content">
                        <div className="contact__text-container">
                            <p className="contact__text">Hello! I'm <a href='https://portfolio-six-blue-64.vercel.app/' target='_blank' rel='noopener noreferrer' style={{color: "rgb(29 191 141)", fontWeight: "400", fontSize: "2rem"}}>Karan Raj</a>, the developer behind <span style={{color: "rgb(255 0 0)"}}>CampusLocator</span>. The idea for this website came to me during my own struggles to find professors on our expansive campus. I realized how much time and effort could be saved if there was an easy way to locate faculty members and view their schedules.</p>
                            <p className="contact__text">With a passion for leveraging technology to solve real-world problems, I set out to create CampusLocator. My goal was to build a platform that simplifies campus navigation for students and faculty alike, making it easier for everyone to connect and collaborate.</p>
                            <p className="contact__text">I'm always eager to connect with others who share a passion for technology and innovation. Feel free to reach out to me on:</p>
                        </div>
                        <img src="/photo.jpeg" alt="Your Name" className="contact__image" />
                    </div>
                    <div className="contact__social">
                        <a href='https://github.com/karan2198' target="_blank" rel="noopener noreferrer" className="contact__social-link">
                            <FontAwesomeIcon icon={faGithub} style={{color: "rgb(29 191 141)",}} />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100056152124501" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                            <FontAwesomeIcon icon={faSquareFacebook} style={{color: "rgb(148 112 255)"}} />
                        </a>
                        <a href="https://x.com/21ucs144" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                            <FontAwesomeIcon icon={faTwitter} style={{color: "#1DA1F2"}} />
                        </a>
                        <a href="https://www.linkedin.com/in/karan-raj-b5823822a/" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                            <FontAwesomeIcon icon={faLinkedin} style={{color: "#0077B5"}} />
                        </a>
                        <a href="https://www.instagram.com/___karan_raj___/" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                            <FontAwesomeIcon icon={faInstagram} style={{color: "#E1306C"}} />
                        </a>
                        <a href="mailto:karanrajgodansa2003@gmail.com" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                            <FontAwesomeIcon icon={faEnvelope} style={{color: "#2470f5",}} />
                        </a>
                    </div>
                </div>

                <form className="contact__form">
                    <div className="contact__field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="contact__field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="contact__field">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" required />
                    </div>
                    <div className="contact__field">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="contact__btn">Send Message</button>
                </form>
            </div>
        </>
    );
}

export default Contact;

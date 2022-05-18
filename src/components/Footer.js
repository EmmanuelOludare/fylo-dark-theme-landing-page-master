import { useState,useRef } from "react"
import logo from '../images/logo.svg'
import location from '../images/icon-location.svg'
import phone from '../images/icon-phone.svg'
import email from '../images/icon-email.svg'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const [error,setError] = useState({error:"Please enter a valid email address"})
  const [color,setColor] = useState('hsl(0, 100%, 63%)')
  const input = useRef(null);

  const onChange = (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    if(input.current.value.match(regex)){
      setError({error:"Email is Valid"})
      setColor('hsl(119, 64%, 29%')
    }else{
      setError({error:"Please enter a valid email address"})
      setColor('red')
    }
  }
  
  const validate = (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    if(input.current.value.match(regex)){
      input.current.value = ""
      setError({error:"Email has been Verified"})
      setColor('green')
      setTimeout(() => {setError({error:""})},3000)
    }else{
      input.current.value = ""
      setColor('hsl(0, 100%, 63%)')
      setError({error:"Please enter a valid email address"})
    }
  }
  
  return (
    <div className="footer">
        <div className="getStarted">
          <h3>Get early access today</h3>
          <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
          questions, our support team would be happy to help you.</p>
          <form className="prompt">
            <div className="input-error">
              <input type="text" name="" id="" placeholder="email@example.com" ref={input} onKeyUp={onChange} required/>
              <p className="error" style={{color:color}}>{error.error}</p>
            </div>
            <button onClick={validate}>Get Started For Free</button>
          </form>
        </div>
      <footer>
        <div className="logo-location">
          <img src={logo} alt="" />
          <span><img src={location} alt="" /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua</p></span>
        </div>
        <div className="phone-email">
          <span><img src={phone} alt="" /><p>+1-543-123-4567</p></span>
          <img src={email} alt="" /><p>example@fylo.com</p>
        </div>
        <div className="quick-links">
          <ul>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
          <ul>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="icons">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
      </div>
      </footer>
      <p className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://twitter.com/micheal_olu99" target="_blank" rel="noreferrer">Emmanuel Oludare</a>.
      </p>
    </div>
  )
}

export default Footer
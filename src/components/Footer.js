import { useState } from "react"

const Footer = () => {
    const [error,setError] = useState()
   const validation = () => {
     
   }
  return (
    <div className="footer">
      <div className="getStarted">
        <h3>Get early access today</h3>
        <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
        questions, our support team would be happy to help you.</p>
        <div className="prompt">
          <div className="input-error">
            <input type="text" name="" id="" placeholder="email@example.com" onKeyUp={validation}/>
            <p className="error">{error ? "Please enter a valid email address" : " "}</p>
          </div>
          <button>Get Started For Free</button>
        </div>
    </div>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
  dolore magna aliqua

  +1-543-123-4567
  example@fylo.com

  About Us
  Jobs
  Press
  Blog

  Contact Us
  Terms
  Privacy

  <footer>
    <p className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Your Name Here</a>.
    </p>
  </footer>
    </div>
  )
}

export default Footer
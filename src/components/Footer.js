import { useState,useRef } from "react"

const Footer = () => {
  const [error,setError] = useState({error:"Please enter a valid email address"})
  const input = useRef(null);

  const validate = (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    if(input.current.value.match(regex)){
      setError({error:""})
      input.current.value = ""
    }else{
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
            <input type="text" name="" id="" placeholder="email@example.com" ref={input}/>
            <p className="error">{error.error}</p>
          </div>
          <button onClick={validate}>Get Started For Free</button>
        </form>
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

/* const initialValue = {email: ""}
    const [email,setEmail] = useState(initialValue)
    const [error,setError] = useState({})
    const [isSubmit,setIsSubmit] = useState(false)

    const handleChange = (e) => {
      const { name,value } = e.target;
      setEmail({...email, [name]:value})
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setError(validate(email));
      setIsSubmit(true)
    }
   useEffect(() => {
    console.log(email);
     if(Object.keys(error).length === 0 && isSubmit){
       console.log(email);
     }
   },[error])
   const validate = (value) => {
     e.preventDefault();
     const error = {};
     const regex = '/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/';
     if(!value.email){
       error.email = "Please enter an email address";
     }else if(!regex.test(value.email)){
      error.email = "Please enter a valid email address";
     }else{
      error.email = "";
     }
     return error;
   }
   */ 
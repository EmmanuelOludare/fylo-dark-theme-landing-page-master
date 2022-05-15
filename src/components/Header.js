import logo from './images/logo.svg'
import intro from './images/illustration-intro.png'

const Header = () => {
  return (
    <div className="header">
          <div className="links-logo">
          <img src={logo} alt="" />
          <ul>
            <li>Features</li>
            <li>Team</li>
            <li>Sign In</li>
          </ul>
        </div>
        <div className="intro-text">
          <img src={intro} alt="" className='intro'/>
          <h2>All your files in one secure location, accessible anywhere.</h2>
          <p>Fylo stores all your most important files in one secure location. Access them wherever 
            you need, share and collaborate with friends family, and co-workers.
          </p>
          <button>Get Started</button>
        </div>
    </div>
  )
}

export default Header
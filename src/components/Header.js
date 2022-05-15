import logo from './images/logo.svg'

const Header = () => {
  return (
    <div className="header">
        <img src={logo} alt="" />
        <ul>
           <li>Features</li>
           <li>Team</li>
           <li>Sign In</li>
        </ul>

  All your files in one secure location, accessible anywhere.

  Fylo stores all your most important files in one secure location. Access them wherever 
  you need, share and collaborate with friends family, and co-workers.

  Get Started
    </div>
  )
}

export default Header
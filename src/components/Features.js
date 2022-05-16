import access from '../images/icon-access-anywhere.svg'
import security from '../images/icon-security.svg'
import collaboration from '../images/icon-collaboration.svg'
import any from '../images/icon-any-file.svg'


const Features = () => {
  return (
    <div className="features">
        <div className="access-anywhere feature">
            <img src={access} alt="" />
            <h3>Access your files, anywhere</h3>
            <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
        </div>
        <div className="security feature">
            <img src={security} alt="" />
            <h3>Security you can trust</h3>
            <p>2-factor authentication and user-controlled encryption are just a couple of the security 
            features we allow to help secure your files.</p>
        </div>
        <div className="collaboration feature">
            <img src={collaboration} alt="" />
            <h3>Real-time collaboration</h3>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. 
            No email attachments required.</p>
        </div>
        <div className="any-file feature">
            <img src={any} alt="" />
            <h3>Store any type of file</h3>
            <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
            file types to be securely stored and shared.</p>
        </div>
    </div>
  )
}

export default Features
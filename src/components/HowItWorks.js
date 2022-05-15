import stayProductive from './images/illustration-stay-productive.png'
import arrow from './images/icon-arrow.svg'

const HowItWorks = () => {
  return (
    <div className="howItWorks">
        <img src={stayProductive} alt="" />
        <div className="text">
            <h3>Stay productive, wherever you are</h3>
            <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
            storage needs.</p>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email 
            attachments required.</p>
            <span><p>See how Fylo works</p><img src={arrow} alt="" /></span>
        </div>
    </div>
  )
}

export default HowItWorks
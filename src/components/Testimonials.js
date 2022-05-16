import quotes from '../images/bg-quotes.png'
import profile1 from '../images/profile-1.jpg'
import profile2 from '../images/profile-2.jpg'
import profile3 from '../images/profile-3.jpg'

const Testimonials = () => {
  return (
    <div className="testimonials">
        <img src={quotes} alt="" />
      <div className="container">
            <div className="testimonial">
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                become a well-oiled collaboration machine.</p>
                <div className="profile-info">
                    <img src={profile1} alt="" />
                    <div className="name-title">
                        <h4>Satish Patel</h4>
                        <p>Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>

            <div className="testimonial">
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                become a well-oiled collaboration machine.</p>
                <div className="profile-info">
                    <img src={profile2} alt="" />
                    <div className="name-title">
                        <h4>Bruce McKenzie</h4>
                        <p>Founder & CEO, Huddle</p> 
                    </div> 
                </div>   
            </div>

            <div className="testimonial">
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                become a well-oiled collaboration machine.</p>
                <div className="profile-info">
                    <img src={profile3} alt="" />
                    <div className="name-title">
                        <h4>Iva Boyd</h4>
                        <p>Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Testimonials
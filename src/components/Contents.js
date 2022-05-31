import Header from './Header'
import Features from './Features'
import HowItWorks from './HowItWorks'
import Testimonials from './Testimonials'
import Footer from './Footer'

const Contents = () => {
  return (
    <div className="contents">
      <Header />
      <main>
      <Features />
      <HowItWorks />
      <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default Contents
import './landing/assets/css/global.css'
import './landing/assets/css/fonts.css'

import Header from './landing/shared/header/Header'
import Hero from './landing/components/hero/Hero'
import SecRecom from './landing/components/sec-recom/SecRecom'
import SecGrdeA from './landing/components/sec-grade-a/SecGradeA'
import SecBest from './landing/components/sec-best/SecBest'
import SecMeet from './landing/components/sec-meet/SecMeet'
import SecNight from './landing/components/sec-night/SecNight'
import SecFAQ from './landing/components/sec-faq/SecFAQ'
import SecAbout from './landing/components/sec-about/SecAbout'
import SecSlider from './landing/components/sec-slider/SecSlider'
import SecRecomRoy from './landing/components/sec-recom-roy/SecRecomRoy'
import Footer from './landing/shared/footer/Footer'

function App() {

  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <SecRecom/>
      <SecGrdeA/>
      <SecBest/>
      <SecMeet/>
      <SecNight/>
      <SecFAQ/>
      <SecAbout/>
      <SecSlider/>
      <SecRecomRoy/>
    </main>
    <Footer/>
    </>
  )
}

export default App

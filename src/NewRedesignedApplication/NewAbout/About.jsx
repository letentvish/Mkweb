import HeroSection from './HeroSection'
import React from 'react'
import './About.css'
import StatsSection from './Stats'
import CompanyHistory from './CompanyHistory'
import Leadership from './LeadershipTeam'

const About = () => {
  return (
    <div className="about-container">
        <HeroSection/>
        {/* <StatsSection/> */}
        <div id="history">
          <CompanyHistory/>
        </div>
        <div id="leadership">
          <Leadership/>
        </div>
    </div>
  )
}

export default About
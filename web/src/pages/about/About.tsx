import React from "react"
import Footer from "../../components/frontend/tools/Footer"
import AboutHeader from "../../components/frontend/about/AboutHeader"
import Navbar from "../../components/frontend/tools/Navbar"
import AboutOne from "../../components/frontend/about/AboutOne"
import AboutTwo from "../../components/frontend/about/AboutTwo"
import AboutTeam from "../../components/frontend/about/AboutTeam"

function About() {

  return (
    <React.Fragment>
        <main className="flex-shrink-0">
            <Navbar />
            <AboutHeader/>
            <AboutOne />
            <AboutTwo />
            <AboutTeam />
        </main> 
        <Footer />
    </React.Fragment>
    )
}

export default About

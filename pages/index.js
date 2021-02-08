import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectSection from '../components/ProjectSection'


export default function Home() {
  return (
    <div style={{ background: '#000', height: '100% !important' }} className="bg-black">
      <Navbar />
      <HeroSection />
      <ProjectSection mainPage={false} />
      <Footer />
    </div>
  )
}

function HeroSection() {
  return (
    <div className="hero-section" style={{ height: 'calc(100vh - 50px)' }} className="bg-black">
      <div className="hero-text">
        <h1 >Hello! <img height="40" width="40" src="handwave.bmp" /></h1>
        <h1>I'm <b>Aniket Chaudhari</b>, <br />Full-Stack Developer and Freelancer</h1>
        <h5 style={{ color: 'rgb(150,150,150)' }}>I help SaaS startups by building best-in-class software products</h5>
        <a href="/projects"><button className="btn mt-3 cta-view-work">View my work</button></a>
        <a href="#contact"><button className="btn mt-3 mx-3 cta-hire-me">Hire Me</button></a>
      </div>
    </div>
  )
}

function Skills(){
  return (
    <div className="bg-black  ">
      <h1>Tech I'm familiar with</h1>
    </div>
  )
}
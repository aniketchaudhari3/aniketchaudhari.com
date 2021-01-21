import React from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div style={{ background: '#000', height: '100% !important' }} className="bg-black">
      <Navbar />
      <HeroSection />
      <Projects />
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
      </div>
    </div>
  )
}

function Projects() {
  const Card = ({
    title,
    desc,
    link,
    image
  }) => {
    return (
      <div className="col-md-5">
        <img className="mb-4" src={image} />
        <h5>{title}</h5>
        <h4 className="fw-bold mb-3">{desc}</h4>
        <a href={link} className="project-detail"><h5>See Project Detail</h5></a>
      </div>
    )
  }
  return (
    <div className="content-section bg-black project-section" >
      <h1>The work I do, <br />and the projects I've helped</h1>
      <div className="mt-5 project-cards">
        <div className="row justify-content-center px-3">
          <Card
            title="mClinic"
            desc="The next generation healthcare platform"
            link="#"
            image="https://source.unsplash.com/500x400/?healthcare,tech"
          />
          <Card
            title="JustJobsNG"
            desc="Nigeria's leading job portal"
            link="#"
            image="https://source.unsplash.com/500x400/?jobs,tech"
          />
          <div className="col-md-10">
            <a href="#"><h5 className="mt-5" id="seemore">See more work</h5></a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className="content-section footer-section bg-black">
      <h1 className="fw-bold">Want to work with me or just <br /> say Hi? — Ping me!</h1>
      <a href="mailto:aniket@aniketchaudhari.com?subject=Let's work together"><h3>aniket@aniketchaudhari.com</h3></a>
      <div className="footer-links row">
        <div className="col-md-4">
          <h5>Social Links —</h5>
          <p><a target="_blank" href="https://github.com/aniketchaudhari3">Github</a></p>
          <p><a target="_blank" href="https://linkedin.com/in/aniketchaudhari">LinkedIn</a></p>
          <p><a target="_blank" href="https://instagr.am/aniket.chaudhari3">Instagram</a></p>
          <p><a target="_blank" href="https://twitter.com/aniket_c333">Twitter</a></p>
          <p><a href="#">Youtube</a></p>
        </div>
        <div className="col-md-4">
          <h5>Based in —</h5>
          <p>Maharashtra, India 🇮🇳 </p>
        </div>
        <div id="contact" className="col-md-4">
          <h5>Contact —</h5>
          <a href="mailto:aniket@aniketchaudhari.com?subject=Let's work together">aniket@aniketchaudhari.com</a>
        </div>
        <p className="mt-4">&copy; Aniket Chaudhari {new Date().getFullYear()}. All rights reserved</p>
      </div>
    </div>
  )
}
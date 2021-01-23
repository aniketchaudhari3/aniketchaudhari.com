import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProjectSection from '../../components/ProjectSection'

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="projects-display bg-black">
        <ProjectSection />
        <Footer />
      </div>
    </>
  )
}



import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router'
import projects from '../../data/projects'

export default function Projects() {
  const router = useRouter()
  const { slug } = router.query
  const [project, setProject] = useState({})
  useEffect(() => {
    if (slug) {
      let data = projects.filter(el => el.name === slug)[0]
      setProject(data)
    }
  }, [slug])
  return (
    <>
      <Navbar />
      <div className="project-description bg-black">
        <h1>{project?.name} {project?.title ? `— ${project.title}` : ''}</h1>
        <div className="row mt-5">
          <div className="col-md-6">
            <h5>
              {project?.description}
            </h5>
            <div className="col-md-11">
              <h5 className="mt-5">My role in this project</h5>
              {project?.roles?.length > 0 && project?.roles?.map((item, index) => {
                return <h5 key={index} className="role-items">{item}</h5>
              })}
            </div>
            {project?.livelink !== 'na' && <a target="_blank" className="cta-btn" href={project?.livelink}><button className="btn mt-3 mx-3 cta-hire-me">View Live</button></a>}
          </div>
          <div className="col-md-6">
            <img className="hero-image-desktop col-md-11" src={project?.heroimage} />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <h3 className="mb-3">Tech Stack used - </h3>
            {project?.stack?.length > 0 && project?.stack?.map((item, index) => {
              return <h6 key={index} className="">{item}</h6>
            })}
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="more-images col-md-8 justify-content-center">
            <img className="hero-image-mobile col-md-12" src={project?.heroimage} />
            {project?.images?.length > 0 && project?.images?.map((item, index) => {
              return <img className="my-3 col-md-12" src={item} key={index} />
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
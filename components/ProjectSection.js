import React from 'react'
import projects from '../data/projects'

export default function ProjectSection() {
  const Card = ({
    title,
    desc,
    link,
    image
  }) => {
    return (
      <div className="col-md-5">
        <img className="col-md-11 mb-4" src={image} />
        <h5>{title}</h5>
        <h4 className="fw-bold mb-3">{desc}</h4>
        <a href={link} className="project-detail"><h5>See Project Detail</h5></a>
      </div>
    )
  }
  return (
    <div className="content-section bg-black project-section" >
      <h1>My Work</h1>
      <div className="mt-5 project-cards">
        <div className="row justify-content-center px-3">
          {projects?.length > 0 && projects?.map((item, index) => {
            return <Card
              title={item?.name}
              desc={item?.title}
              link={`/projects/${item?.name}`}
              image={item?.heroimage}
            />
          })}
          <div className="col-md-10">
            <a href="/projects"><h5 className="mt-5" id="seemore">See more work</h5></a>
          </div>
        </div>
      </div>
    </div>
  )
}

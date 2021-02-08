import React from 'react'
import projects from '../data/projects'

export default function ProjectSection({ mainPage }) {

  const Card = ({
    title,
    desc,
    link,
    image
  }) => {
    return (
      <div className="project-card col-md-5 mt-3">
        <img className="col-md-11 col-sm-8 mb-4" style={{ maxHeight: '400px'}} src={image} />
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
          {!mainPage && projects?.length > 0 && projects?.map((item, index) => {
            console.log(mainPage)
            if (index < 2) {
              return <Card
                title={item?.name}
                desc={item?.title}
                link={`/projects/${item?.name}`}
                image={item?.heroimage}
              />
            }
          })}
          {mainPage && projects?.length > 0 && projects?.map((item, index) => {
            return <Card
              title={item?.name}
              desc={item?.title}
              link={`/projects/${item?.name}`}
              image={item?.heroimage}
            />
          })}
          {(projects?.length % 2 !== 0) &&  <div className="col-md-5"></div>}
          {!mainPage && <div className="col-md-10">
            <a href="/projects"><h5 className="mt-5" id="seemore">See more work</h5></a>
          </div>}
        </div>
      </div>
    </div>
  )
}

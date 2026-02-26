// import React from
import data from "./projectList.json"

class Project {

  constructor(title, image, url,  git="#", summary="", technologies=[], more="", next_steps) {
    this.title = title
    this.image = image
    this.url = url
    this.git = git
    this.summary = more.description[0].substring(0,150)
    this.next_steps = next_steps
    this.more = more
    this.technologies = technologies
  }
}

const projects = data.projects.map((project,i) => {
  return {...new Project(
    project.title,
    project.image,
    project.url,
    project.git,
    project.summary,
    project.technologies,
    project.more,
    project.next_steps
  ),index: i}
})

export default projects
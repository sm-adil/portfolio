import Image from "next/image";
import projectsData from "@data/projects.json";

const Projects = () => {
  if (projectsData.length === 0) return null;

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>My Projects</h2>
        {projectsData.map((project) => (
          <div className="project" key={project.id}>
            <div className="project-image">
              <Image
                width={1400}
                height={875}
                alt={project.title}
                src={project.imageUrl}
              />
            </div>
            <div className="project-data">
              <h3>
                <a href={project.link}>{project.title}</a>
              </h3>
              <p>{project.description}</p>
              <ul>
                {project.tags &&
                  project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <a href={project.link} className="button">
                View{" "}
                {project.link.indexOf("https://github.com") > -1
                  ? "Code"
                  : "Online"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

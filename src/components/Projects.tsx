import GithubIcon from "@/assets/icons/Github";
import { styled } from "@/stitches";

const ProjectContainer = styled("div", {
  border: "solid 1px white",
  padding: "$sp3",
  borderRadius: "$r2",
});

type ProjectType = {
  ProjectName: string;
  ProjectDesc: string;
  ProjectGithub?: string;
  ProjectLink?: string;
};

const Project = ({
  ProjectName,
  ProjectGithub,
  ProjectLink,
  ProjectDesc,
}: ProjectType) => {
  return (
    <ProjectContainer>
      <span className="proj-name">{ProjectName}</span>
      <span className="proj-desc">{ProjectDesc}</span>
      <span className="proj-icons">
        {ProjectGithub ? (
          <a href={ProjectGithub}>
            <GithubIcon />
          </a>
        ) : null}
        {ProjectLink ? (
          <a href={ProjectLink}>{/* Globe icon goes here */}</a>
        ) : null}
      </span>
    </ProjectContainer>
  );
};

const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ProjectList = [
  {
    name: "Dowik",
    desc: "Next.js App which uses SSR and SSG",
    link: "https://ontwik-todo-yash.vercel.app/",
  },
];

const Projects = () => {
  return (
    <Container>
      <h1>Featured Projects</h1>
      {ProjectList.map((project) => (
        <Project
          ProjectName={project.name}
          ProjectDesc={project.desc}
          ProjectLink={project.link}
        />
      ))}
    </Container>
  );
};

export default Projects;

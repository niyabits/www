import GithubIcon from "@/assets/icons/Github";
import { styled } from "@/stitches";

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
    <div>
      <div className="proj-name">{ProjectName}</div>
      <span>{ProjectDesc}</span>
      <a href={ProjectGithub}>
        <GithubIcon />
      </a>
      <a href={ProjectLink}>{/* Globe icon goes here */}</a>
    </div>
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

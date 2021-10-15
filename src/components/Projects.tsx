import GithubIcon from "@/assets/icons/Github";
import { styled } from "@/stitches";

const ProjectContainer = styled("div", {
  border: "solid 1px $gray800",
  padding: "$sp3 $sp4",
  borderRadius: "$r2",

  ".proj-name, .proj-desc": {
    marginRight: "$sp6",
  },
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

const ProjectList: ProjectType[] = [
  {
    ProjectName: "Dowik",
    ProjectDesc: "Basic Next.js App made with Firebase and TypeScript",
    ProjectLink: "https://ontwik-todo-yash.vercel.app/",
  },
];

const Projects = () => {
  return (
    <Container>
      <h1>Featured Projects</h1>
      {ProjectList.map((project) => (
        <Project
          ProjectName={project.ProjectName}
          ProjectDesc={project.ProjectDesc}
          ProjectLink={project.ProjectLink}
          ProjectGithub={project.ProjectGithub}
        />
      ))}
    </Container>
  );
};

export default Projects;

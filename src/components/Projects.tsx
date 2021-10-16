import ExtLink from "@/assets/icons/ExtLink";
import GithubIcon from "@/assets/icons/Github";
import { styled } from "@/stitches";

const ProjectContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  padding: "$sp3 $sp4",
  width: "560px",

  border: "solid 1px $gray800",
  borderRadius: "$r2",

  ".proj-name": {
    marginRight: "$sp6",
  },

  a: {
    color: "white",
    transition: "0.1s ease",

    "&:hover": {
      color: "cyan",
      transition: "0.3s ease",
    },
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
      <span>
        <span className="proj-name">{ProjectName}</span>
        <span className="proj-desc">{ProjectDesc}</span>
      </span>
      <span className="proj-icons">
        {ProjectGithub ? (
          <a href={ProjectGithub} target="_blank">
            <GithubIcon />
          </a>
        ) : null}
        {ProjectLink ? (
          <a href={ProjectLink} target="_blank">
            <ExtLink />
          </a>
        ) : null}
      </span>
    </ProjectContainer>
  );
};

const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "#project-list": {
    div: {
      marginBottom: "$sp4",
    },
  },
});

const ProjectList: ProjectType[] = [
  {
    ProjectName: "Dowik",
    ProjectDesc: "Basic Next.js App made with Firebase and TypeScript",
    ProjectLink: "https://ontwik-todo-yash.vercel.app/",
  },
  {
    ProjectName: "Tell About",
    ProjectDesc: "A CLI tool to get info about npm packages",
    ProjectLink: "https://ontwik-todo-yash.vercel.app/",
  },
  {
    ProjectName: "Calvera Dark",
    ProjectDesc: "A blazing fast and async Neovim theme",
    ProjectLink: "https://ontwik-todo-yash.vercel.app/",
  },
];

const Projects = () => {
  return (
    <Container>
      <h1>Featured Projects</h1>
      <div id="project-list">
        {ProjectList.map((project) => (
          <Project
            ProjectName={project.ProjectName}
            ProjectDesc={project.ProjectDesc}
            ProjectLink={project.ProjectLink}
            ProjectGithub={project.ProjectGithub}
          />
        ))}
      </div>
    </Container>
  );
};

export default Projects;

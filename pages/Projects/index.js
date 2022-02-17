import React from "react";
import { createClient } from "contentful";
import MiniProjectContainer from "../../components/ProjectOverview/MiniProjects";
import { useRouter } from "next/router";
import Login from "../../components/login/login";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const Projects = await client.getEntries({ content_type: "miniProjects" });

  return {
    props: {
      miniProject: Projects.items,
    },
  };
}

const ProjectLand = ({ miniProject, hasReadPermission }) => {
  // const router = useRouter();

  // if (!hasReadPermission) {
  //   return <Login redirectPath={router.asPath} />;
  // }
  // if (!hasReadPermission) {
  //   return <div>Access denied.</div>;
  // }
  return (
    <div className="globalTheme">
      <h1>Projects</h1>
      {miniProject.map((project) => (
        <MiniProjectContainer key={project.sys.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectLand;

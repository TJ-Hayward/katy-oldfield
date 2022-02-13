import { createClient } from "contentful";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import TopSection from "../components/HomePage/TopSection";
import AboutMe from "../components/HomePage/AboutMe";
import MiniProjectContainer from "../components/ProjectOverview/MiniProjects";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const Home = await client.getEntries({ content_type: "homeHero" });
  const Projects = await client.getEntries({ content_type: "miniProjects" });

  return {
    props: {
      homeStuff: Home.items,
      miniProject: Projects.items,
    },
  };
}
const Container = styled.div`
  .holder {
    text-align: center;
    padding-top: 500px;
    padding-bottom: 500px;
  }
`;

const Home = ({ homeStuff, miniProject }) => {
  const [colour, setColour] = useState("white");
  const colourCheck = () => {
    console.log(window.scrollY);
    if (window.scrollY > 500 && window.scrollY < 1000) {
      setColour("yellow");
    } else if (window.scrollY > 1000 && window.scrollY < 1200) {
      setColour("blue");
      console.log(window.scrollY);
    } else {
      setColour("white");
    }
  };
  useEffect(() => {
    colourCheck();
    window.addEventListener("scroll", () => {
      colourCheck();
    });
  }, []);
  console.log(miniProject);
  return (
    <div className="globalTheme">
      {homeStuff.map((homeStuff) => (
        <>
          <TopSection key={homeStuff.sys.id} homeStuff={homeStuff} />
          <AboutMe key={homeStuff.sys.id} homeStuff={homeStuff} />
        </>
      ))}
      {miniProject.map((project) => (
        <MiniProjectContainer key={project.sys.id} project={project} />
      ))}
    </div>
  );
};

export default Home;

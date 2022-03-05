import { createClient } from "contentful";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import TopSection from "../../components/HomePage/TopSection";
import AboutMe from "../../components/HomePage/AboutMe";
import MiniProjectContainer from "../../components/ProjectOverview/MiniProjects";
import { useRouter } from "next/router";
import Login from "../../components/login/login";
import Navbar from "../../components/Header/Header";
import FunImage from "../../components/FunImage/FunImage";
import ReactPlayer from "react-player";
import AuthContext from "../../stores/authContext";
import { useContext } from "react";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const Home = await client.getEntries({ content_type: "projectMainImages" });

  return {
    props: {
      mainImages: Home.items,
    },
  };
}
const StyledHeader = styled.div`
  .header_link {
    .project {
      font-weight: bold;
    }
  }
`;

const Home = ({ mainImages }) => {
  // const [colour, setColour] = useState("white");
  // const colourCheck = () => {
  //   console.log(window.scrollY);
  //   if (window.scrollY > 500 && window.scrollY < 1000) {
  //     setColour("yellow");
  //   } else if (window.scrollY > 1000 && window.scrollY < 1200) {
  //     setColour("blue");
  //     console.log(window.scrollY);
  //   } else {
  //     setColour("white");
  //   }
  // };
  // useEffect(() => {
  //   colourCheck();
  //   window.addEventListener("scroll", () => {
  //     colourCheck();
  //   });
  // }, []);
  // const router = useRouter();

  // if (!hasReadPermission) {
  //   return <Login redirectPath={router.asPath} />;
  // }
  // if (!hasReadPermission) {
  //   return <div>Access denied.</div>;
  // }
  const router = useRouter();
  const { user, login, loggedIn } = useContext(AuthContext);
  if (!loggedIn) {
    setTimeout(() => router.replace("/"), 0);
  }

  return (
    <>
      {loggedIn ? (
        <>
          {mainImages.map((mainImages) => (
            <>
              <StyledHeader>
                <Navbar page="projects" />
              </StyledHeader>
              <FunImage key={mainImages.sys.id} mainImages={mainImages} />
            </>
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Home;

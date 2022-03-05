import { createClient } from "contentful";
import React from "react";
import HeroSection from "../../components/ProjectPage/HeroContainer";
import ProjectDetails from "../../components/ProjectPage/ProjectDetails";
import BigImages from "../../components/ProjectPage/BigImages";
import Testimonials from "../../components/ProjectPage/Testimonials";
import { useRouter } from "next/router";
import Navbar from "../../components/Header/Header";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { StyledMarginTop } from "../../components/MarginTop";
import { StyledProjectSlug } from "../../components/styles/StyledProjectSlug";
import AuthContext from "../../stores/authContext";
import { useContext } from "react";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "project",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "project",
    "fields.slug": params.slug,
  });
  return {
    props: { project: items[0] },
  };
}

export default function FullProject({ project, hasReadPermission }) {
  const router = useRouter();
  const { user, login, loggedIn } = useContext(AuthContext);
  if (!loggedIn) {
    setTimeout(() => router.replace("/"), 0);
  }
  return (
    <>
      {loggedIn ? (
        <>
          <Navbar />
          <StyledProjectSlug>
            {/* <Parallax
    id="parallax-main"
    pages={5.5}
    style={{ top: "flex-end", left: "0" }}
  >
    <div>
      <ParallaxLayer
        factor={1}
        offset={0}
        speed={0}
        style={{ background: "white" }}
      />
      <ParallaxLayer
        factor={1}
        offset={0}
        speed={0}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      > */}
            <HeroSection project={project} />
            {/* </ParallaxLayer> */}
            {/*
      <ProjectDetails project={project} /> */}
            {/* <ParallaxLayer
        factor={3}
        offset={1.5}
        speed={0}
        style={{ background: "white" }}
      />
      <ParallaxLayer
        factor={3}
        offset={1.5}
        speed={0}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      > */}
            <BigImages project={project} />
            {/* </ParallaxLayer> */}

            <Testimonials project={project} />
            {/* </div> */}
            {/* </Parallax> */}
          </StyledProjectSlug>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

{
  /* <Parallax
          id="parallax-main"
          pages={4.1}
          style={{ top: "0", left: "0" }}
        >
          <ParallaxLayer
            factor={1}
            offset={0}
            speed={0}
            style={{ background: "white" }}
          />
          <ParallaxLayer
            factor={1}
            offset={0}
            speed={0}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <HeroSection project={project} />
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            factor={1.75}
            offset={1}
            speed={2}
            style={{ background: "lightpink" }}
          />
          <ParallaxLayer
            factor={1.75}
            offset={1}
            speed={4}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProjectDetails project={project} />
          </ParallaxLayer>
          <ParallaxLayer
            factor={1.25}
            offset={2}
            speed={0}
            style={{ background: "white" }}
          />

          <ParallaxLayer
            factor={1.25}
            offset={2}
            speed={0.75}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BigImages project={project} />
          </ParallaxLayer>
          <ParallaxLayer
            factor={0.75}
            offset={3.75}
            speed={3}
            style={{ background: "#0E431D" }}
          />
          <ParallaxLayer
            factor={0.75}
            offset={3.5}
            speed={1}
            style={{
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              color: "white",
              width: "100%",
            }}
          >
            <div style={{ width: "100%" }}>
              <Testimonials project={project} />
            </div>
          </ParallaxLayer>
        </Parallax> */
}

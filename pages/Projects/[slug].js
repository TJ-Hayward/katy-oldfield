import { createClient } from "contentful";
import React from "react";
import HeroSection from "../../components/ProjectPage/HeroContainer";
import ProjectDetails from "../../components/ProjectPage/ProjectDetails";
import BigImages from "../../components/ProjectPage/BigImages";
import Testimonials from "../../components/ProjectPage/Testimonials";
import { useRouter } from "next/router";
import Login from "../../components/login/login";

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

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }
  if (!hasReadPermission) {
    return <div>Access denied.</div>;
  }
  return (
    <div>
      <HeroSection project={project} />
      <ProjectDetails project={project} />
      <BigImages project={project} />
      <Testimonials project={project} />
    </div>
  );
}

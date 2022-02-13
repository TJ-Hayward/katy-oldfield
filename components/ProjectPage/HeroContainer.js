import React from "react";
import Image from "next/image";

export default function HeroSection({ project }) {
  const projectData = project.fields;
  return (
    <div>
      <Image
        src={"https:" + projectData.projectImage.fields.file.url}
        alt={projectData.projectImage.fields.file.title}
        height={projectData.projectImage.fields.file.details.image.height}
        width={projectData.projectImage.fields.file.details.image.width}
        className="backImage"
      />
      <h1>{projectData.title}</h1>
      <h3> {projectData.role}</h3>
      <div> {projectData.mainParagraph}</div>
      {console.log(projectData)}
    </div>
  );
}

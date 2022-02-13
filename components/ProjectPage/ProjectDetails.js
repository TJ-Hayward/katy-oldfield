import React from "react";
import Image from "next/image";

export default function ProjectDetails({ project }) {
  const projectData = project.fields;
  return (
    <div>
      <h2> {projectData.smallParagraphTitle1}</h2>
      <div> {projectData.smallParagraph1}</div>
      <Image
        src={"https:" + projectData.smallImage1.fields.file.url}
        alt={projectData.smallImage1.fields.file.title}
        height={projectData.smallImage1.fields.file.details.image.height}
        width={projectData.smallImage1.fields.file.details.image.width}
        className="backImage"
      />
      <h2> {projectData.smallParagraphTitle2}</h2>
      <div> {projectData.smallParagraph2}</div>
      <Image
        src={"https:" + projectData.smallImage2.fields.file.url}
        alt={projectData.smallImage2.fields.file.title}
        height={projectData.smallImage2.fields.file.details.image.height}
        width={projectData.smallImage2.fields.file.details.image.width}
        className="backImage"
      />
      <h2> {projectData.smallParagraphTitle3}</h2>
      <div> {projectData.smallParagraph3}</div>
      <Image
        src={"https:" + projectData.smallImage3.fields.file.url}
        alt={projectData.smallImage3.fields.file.title}
        height={projectData.smallImage3.fields.file.details.image.height}
        width={projectData.smallImage3.fields.file.details.image.width}
        className="backImage"
      />
    </div>
  );
}

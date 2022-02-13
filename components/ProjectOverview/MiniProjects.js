import React from "react";
import Image from "next/image";

export default function MiniProjectContainer({ project }) {
  const projectData = project.fields;
  return (
    <div>
      {console.log(projectData.image.fields)}
      <h2>{projectData.name}</h2>
      <div> {projectData.objectiveOfProject}</div>

      <Image
        src={"https:" + projectData.image.fields.file.url}
        alt={projectData.image.fields.file.title}
        height={projectData.image.fields.file.details.image.height}
        width={projectData.image.fields.file.details.image.width}
        className="backImage"
      />
    </div>
  );
}

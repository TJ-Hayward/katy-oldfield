import React from "react";
import Image from "next/image";

export default function BigImages({ project }) {
  const projectData = project.fields;
  return (
    <div>
      <Image
        src={"https:" + projectData.fullImage1.fields.file.url}
        alt={projectData.fullImage1.fields.file.title}
        height={projectData.fullImage1.fields.file.details.image.height}
        width={projectData.fullImage1.fields.file.details.image.width}
        className="backImage"
      />
      <Image
        src={"https:" + projectData.fullImage2.fields.file.url}
        alt={projectData.fullImage2.fields.file.title}
        height={projectData.fullImage2.fields.file.details.image.height}
        width={projectData.fullImage2.fields.file.details.image.width}
        className="backImage"
      />
      <Image
        src={"https:" + projectData.fullImage3.fields.file.url}
        alt={projectData.fullImage3.fields.file.title}
        height={projectData.fullImage3.fields.file.details.image.height}
        width={projectData.fullImage3.fields.file.details.image.width}
        className="backImage"
      />
    </div>
  );
}

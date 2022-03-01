import React from "react";
import Image from "next/image";
import { StyledMarginWraperB } from "../MarginWraperB";

export default function BigImages({ project }) {
  const projectData = project.fields;
  return (
    <>
      <StyledMarginWraperB>
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
        <Image
          src={"https:" + projectData.fullImage4.fields.file.url}
          alt={projectData.fullImage4.fields.file.title}
          height={projectData.fullImage4.fields.file.details.image.height}
          width={projectData.fullImage4.fields.file.details.image.width}
          className="backImage"
        />
        <Image
          src={"https:" + projectData.fullImage5.fields.file.url}
          alt={projectData.fullImage5.fields.file.title}
          height={projectData.fullImage4.fields.file.details.image.height}
          width={projectData.fullImage4.fields.file.details.image.width}
          className="backImage"
        />
      </StyledMarginWraperB>
    </>
  );
}

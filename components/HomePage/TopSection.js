import React from "react";
import Image from "next/image";
import { StyledMarginTop } from "../MarginTop";
import { StyledMarginWraperC } from "../MarginWraperC";

export default function TopSection({ homeStuff }) {
  const { title, introduction, heroImage } = homeStuff.fields;
  return (
    <div>
      <StyledMarginTop />
      <StyledMarginWraperC>
        <yesevaTitle>{title}</yesevaTitle>
        <div> {introduction}</div>
      </StyledMarginWraperC>

      <Image
        src={"https:" + heroImage.fields.file.url}
        alt={heroImage.title}
        height={heroImage.fields.file.details.image.height}
        width={heroImage.fields.file.details.image.width}
        className="backImage"
      />
    </div>
  );
}

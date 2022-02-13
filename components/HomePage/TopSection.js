import React from "react";
import Image from "next/image";

export default function TopSection({ homeStuff }) {
  const { title, introduction, heroImage } = homeStuff.fields;
  return (
    <div>
      <h1>{title}</h1>
      <div> {introduction}</div>
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

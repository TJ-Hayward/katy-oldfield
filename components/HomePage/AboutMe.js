import React from "react";

export default function AboutMe({ homeStuff }) {
  const { aboutMeParagraph } = homeStuff.fields;
  return (
    <div>
      <div>About me</div>
      <div> {aboutMeParagraph}</div>
    </div>
  );
}

import React from "react";

export default function AboutMe({ homeStuff }) {
  const { aboutMeParagraph } = homeStuff.fields;
  return (
    <div>
      <h2>About me</h2>
      <div> {aboutMeParagraph}</div>
    </div>
  );
}

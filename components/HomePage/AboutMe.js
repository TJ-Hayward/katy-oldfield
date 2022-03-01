import React from "react";

export default function AboutMe({ homeStuff }) {
  const { aboutMeParagraph } = homeStuff.fields;
  return (
    <div>
      <yeseva40N>About me</yeseva40N>
      <div> {aboutMeParagraph}</div>
    </div>
  );
}

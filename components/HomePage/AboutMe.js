import React from "react";
import { StyledMarginWraperB } from "../MarginWraperB";

export default function AboutMe({ homeStuff }) {
  const { aboutMeParagraph } = homeStuff.fields;
  return (
    <div>
      <StyledMarginWraperB>
        <yeseva40N>About me</yeseva40N>
        <div> {aboutMeParagraph}</div>
      </StyledMarginWraperB>
    </div>
  );
}

import React from "react";
import { StyledMarginWraperB } from "../MarginWraperB";

export default function AboutMe({ homeStuff }) {
  const { aboutMeParagraph } = homeStuff.fields;
  return (
    <div>
      <StyledMarginWraperB>
        <yeseva-40-n>About me</yeseva-40-n>
        <div> {aboutMeParagraph}</div>
      </StyledMarginWraperB>
    </div>
  );
}

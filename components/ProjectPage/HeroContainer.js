import React from "react";
import Image from "next/image";
import { StyledProjectHero } from "./styles/StyledHeroContainer";
import { Row, Col, Container } from "react-bootstrap";
import { StyledMarginWraperA } from "../MarginWraperA";

export default function HeroSection({ project }) {
  const projectData = project.fields;
  return (
    <StyledProjectHero>
      <Image
        src={"https:" + projectData.projectImage.fields.file.url}
        alt={projectData.projectImage.fields.file.title}
        height={projectData.projectImage.fields.file.details.image.height}
        width={projectData.projectImage.fields.file.details.image.width}
        style={{ marginTop: "4.5rem" }}
      />
      <StyledMarginWraperA>
        <Row className="title">
          <ibmSemi>{projectData.title}</ibmSemi>
        </Row>
        <Row className="role">
          <openSansSmall> {projectData.role}</openSansSmall>
        </Row>
        <Row className="paragraph">
          <div> {projectData.mainParagraph}</div>
        </Row>
      </StyledMarginWraperA>
    </StyledProjectHero>
  );
}

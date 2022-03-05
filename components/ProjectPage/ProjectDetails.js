import React from "react";
import Image from "next/image";
import { Col, Row, Container } from "react-bootstrap";
import { StyledMarginWraperB } from "../MarginWraperB";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function ProjectDetails({ project }) {
  const projectData = project.fields;
  return (
    <>
      <StyledMarginWraperB>
        <Container fluid>
          {/* Section 1 */}
          <ParallaxLayer
            factor={1}
            offset={2}
            speed={0.3}
            style={{ background: "#0E431D" }}
          />
          <ParallaxLayer
            factor={1}
            offset={2}
            speed={0}
            style={{
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              color: "white",
              width: "100%",
            }}
          >
            <Row>
              <Col md={7}>
                <Row>
                  <Row style={{ display: "flex", justifyContent: "center" }}>
                    <ibm-small>
                      {" "}
                      {project.fields.smallParagraphTitle1}
                    </ibm-small>
                  </Row>
                  <Row>
                    <div> {project.fields.smallParagraph1}</div>
                  </Row>
                </Row>
              </Col>
              <Col
                md={5}
                className="imageA"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Image
                  src={"https:" + project.fields.smallImage1.fields.file.url}
                  alt={project.fields.smallImage1.fields.file.title}
                  height={
                    project.fields.smallImage1.fields.file.details.image.height
                  }
                  width={
                    project.fields.smallImage1.fields.file.details.image.width
                  }
                  className="imageA"
                />
              </Col>
            </Row>
          </ParallaxLayer>

          <ParallaxLayer
            factor={1}
            offset={3}
            speed={0.3}
            style={{ background: "#0E431D" }}
          />
          {/* Section 2 */}
          <ParallaxLayer
            factor={1}
            offset={3}
            speed={0}
            style={{
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              color: "white",
              width: "100%",
            }}
          >
            <Row>
              <Col md={7}>
                <Row>
                  <Row style={{ display: "flex", justifyContent: "center" }}>
                    <ibm-small>
                      {" "}
                      {project.fields.smallParagraphTitle1}
                    </ibm-small>
                  </Row>
                  <Row>
                    <div> {project.fields.smallParagraph1}</div>
                  </Row>
                </Row>
              </Col>
              <Col
                md={5}
                className="imageA"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Image
                  src={"https:" + project.fields.smallImage1.fields.file.url}
                  alt={project.fields.smallImage1.fields.file.title}
                  height={
                    project.fields.smallImage1.fields.file.details.image.height
                  }
                  width={
                    project.fields.smallImage1.fields.file.details.image.width
                  }
                  className="imageA"
                />
              </Col>
            </Row>
          </ParallaxLayer>
          {/* Section 3 */}
          <ParallaxLayer
            factor={1}
            offset={4}
            speed={0.3}
            style={{ background: "#0E431D" }}
          />
          <ParallaxLayer
            factor={1}
            offset={4}
            speed={0}
            style={{
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              color: "white",
              width: "100%",
            }}
          >
            <Row>
              <Col md={7}>
                <Row>
                  <ibm-small> {project.fields.smallParagraphTitle3}</ibm-small>
                </Row>
                <Row>
                  <div> {project.fields.smallParagraph3}</div>
                </Row>
              </Col>
              <Col
                fluid
                md={5}
                className="imageA"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Image
                  src={"https:" + project.fields.smallImage3.fields.file.url}
                  alt={project.fields.smallImage3.fields.file.title}
                  height={
                    project.fields.smallImage3.fields.file.details.image.height
                  }
                  width={
                    project.fields.smallImage3.fields.file.details.image.width
                  }
                  className="imageA"
                />
              </Col>
            </Row>
          </ParallaxLayer>
        </Container>
      </StyledMarginWraperB>
    </>
  );
}

import React from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import { StyledMarginWraperB } from "../MarginWraperB";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Testimonials({ project }) {
  const projectData = project.fields;
  return (
    <>
      <ParallaxLayer
        factor={1}
        offset={4.7}
        speed={0.7}
        style={{ background: "#0E431D" }}
      />
      <ParallaxLayer
        factor={1}
        offset={4.5}
        speed={0}
        style={{
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          color: "white",
          width: "100%",
        }}
      >
        <div style={{ width: "100%" }}>
          <div>
            <StyledMarginWraperB>
              <Row>
                <yesevaTitle>Testimonials</yesevaTitle>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <div> {projectData.testimonial1}</div>
                  </Row>
                  <Row>
                    <yeseva40N> {projectData.testimonialName1}</yeseva40N>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <div> {projectData.testimonial2}</div>
                  </Row>
                  <Row>
                    <yeseva40N> {projectData.testimonialName2}</yeseva40N>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <div> {projectData.testimonial3}</div>
                  </Row>
                  <Row>
                    <yeseva40N> {projectData.testimonialName3}</yeseva40N>
                  </Row>
                </Col>
              </Row>
            </StyledMarginWraperB>
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
}

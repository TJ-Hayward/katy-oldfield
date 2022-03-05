import React from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import { StyledMarginWraperD } from "../MarginWraperD";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { route } from "next/dist/server/router";
import { useState, useEffect } from "react";
import { StyledTestimonials } from "./styles/StyledTestimonials";

export default function Testimonials({ project }) {
  const projectData = project.fields;
  const [device, setDevice] = useState("mobile");
  const deviceCheck = () => {
    if (window.innerWidth < 768) {
      setDevice("mobile");
    } else {
      setDevice("desktop");
    }
  };
  useEffect(() => {
    deviceCheck();
    window.addEventListener("resize", () => {
      deviceCheck();
    });
  }, []);
  return (
    <>
      {/* <ParallaxLayer
        factor={1}
        offset={4.9}
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
      > */}
      <div style={{ width: "100%" }}>
        <div
          style={{
            "background-color": `${
              projectData.testimonialColor
                ? `${projectData.testimonialColor}`
                : "#0e431d"
            }`,
          }}
        >
          <StyledMarginWraperD>
            <StyledTestimonials>
              {device === "mobile" ? (
                <>
                  <Row fluid>
                    <ibmSemi className="testimonials">Testimonials</ibmSemi>
                  </Row>
                  <Row>
                    <Row fluid>
                      <div className="actualTestimonials">
                        {projectData.testimonial1}
                      </div>
                    </Row>
                    <Row>
                      <ibmSmall className="testimonialPerson">
                        {projectData.testimonialName1}
                      </ibmSmall>
                    </Row>
                  </Row>
                  <Row>
                    <Row>
                      <Row fluid>
                        <div className="actualTestimonials">
                          {projectData.testimonial2}
                        </div>
                      </Row>
                      <Row>
                        <ibmSmall className="testimonialPerson">
                          {projectData.testimonialName2}
                        </ibmSmall>
                      </Row>
                    </Row>
                  </Row>
                  <Row>
                    <Row>
                      <Row>
                        <div className="actualTestimonials">
                          {projectData.testimonial3}
                        </div>
                      </Row>
                      <Row>
                        <ibmSmall className="testimonialPerson">
                          {projectData.testimonialName3}
                        </ibmSmall>
                      </Row>
                    </Row>
                  </Row>
                </>
              ) : (
                <>
                  <Row>
                    <ibmSemi className="testimonials desk">
                      Testimonials
                    </ibmSemi>
                  </Row>
                  <Row>
                    <Col>
                      <Row>
                        <div className="actualTestimonials">
                          {projectData.testimonial1}
                        </div>
                      </Row>
                      <Row>
                        <ibmSmall className="testimonialPerson">
                          {projectData.testimonialName1}
                        </ibmSmall>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <div className="actualTestimonials">
                          {projectData.testimonial2}
                        </div>
                      </Row>
                      <Row>
                        <ibmSmall className="testimonialPerson">
                          {projectData.testimonialName2}
                        </ibmSmall>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <div className="actualTestimonials">
                          {projectData.testimonial3}
                        </div>
                      </Row>
                      <Row>
                        <ibmSmall className="testimonialPerson">
                          {projectData.testimonialName3}
                        </ibmSmall>
                      </Row>
                    </Col>
                  </Row>
                </>
              )}
            </StyledTestimonials>
          </StyledMarginWraperD>
        </div>
      </div>
      {/* </ParallaxLayer> */}
    </>
  );
}

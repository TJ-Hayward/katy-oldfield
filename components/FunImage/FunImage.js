// import Image from "next/image";
import { StyledFunImage } from "./StyledFunImage";
import { createContext, useState, useEffect } from "react";
import { Image, Row } from "react-bootstrap";
import Link from "next/link";
import { StyledMarginWraperE } from "../MarginWraperE";

const ImageSizer = createContext({
  widthA: "50%",
  widthB: "16.6667%",
  widthC: "16.6667%",
  widthD: "16.6667%",
});

const FunImage = ({ mainImages }) => {
  const [activeImage, setActiveImage] = useState("A");
  const [widthA, setWidthA] = useState("62.5%");
  const [widthB, setWidthB] = useState("12.5%");
  const [widthC, setWidthC] = useState("12.5%");
  const [widthD, setWidthD] = useState("12.5%");

  useEffect(() => {
    if (activeImage == "A") {
      setWidthA("62.5%");
      setWidthB("12.5%");
      setWidthC("12.5%");
      setWidthD("12.5%");
    } else if (activeImage == "B") {
      setWidthA("12.5%");
      setWidthB("62.5%");
      setWidthC("12.5%");
      setWidthD("12.5%");
    } else if (activeImage == "C") {
      setWidthA("12.5%");
      setWidthB("12.5%");
      setWidthC("62.5%");
      setWidthD("12.5%");
    } else if (activeImage == "D") {
      setWidthA("12.5%");
      setWidthB("12.5%");
      setWidthC("12.5%");
      setWidthD("62.5%");
    } else {
      setWidthA("62.5%");
      setWidthB("12.5%");
      setWidthC("12.5%");
      setWidthD("12.5%");
    }
  }, [activeImage]);
  const [device, setDevice] = useState("mobile");
  const deviceCheck = () => {
    if (window.innerWidth < 576) {
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

  const { projectImage1, projectImage2, projectImage3, projectImage4 } =
    mainImages.fields;
  return (
    <>
      {device !== "mobile" ? (
        <ImageSizer.Provider>
          <StyledMarginWraperE>
            <StyledFunImage>
              <div className="image-holder">
                <div className="images">
                  <Link href="/projects/london-fashion-week">
                    <Image
                      onMouseOver={() => setActiveImage("A")}
                      width={widthA}
                      className="image"
                      loading="lazy"
                      data-lazy="true"
                      height="auto"
                      src={"https:" + projectImage1.fields.file.url}
                      alt={projectImage1.title}
                    />
                  </Link>

                  {activeImage === "A" && (
                    <div
                      className="centered"
                      style={{
                        left: " 31.25%",
                      }}
                    >
                      London Fashion Week
                    </div>
                  )}
                  <Link href="/projects/st-andrews-links">
                    <Image
                      onMouseOver={() => setActiveImage("D")}
                      width={widthD}
                      widthImage={activeImage}
                      className="image"
                      height="auto"
                      loading="lazy"
                      data-lazy="true"
                      src={"https:" + projectImage4.fields.file.url}
                      alt={projectImage4.title}
                    />
                  </Link>
                  {activeImage === "D" && (
                    <div
                      className="centered"
                      style={{
                        left: " 43.75%",
                      }}
                    >
                      St Andrews
                    </div>
                  )}
                  <Link href="/projects/abercrombie-and-fitch">
                    <Image
                      onMouseOver={() => setActiveImage("B")}
                      width={widthB}
                      height="auto"
                      className="image"
                      loading="lazy"
                      data-lazy="true"
                      src={"https:" + projectImage2.fields.file.url}
                      alt={projectImage2.title}
                    />
                  </Link>
                  {activeImage === "B" && (
                    <div
                      className="centered"
                      style={{
                        left: " 56.25%",
                      }}
                    >
                      Abercrombie and fitch
                    </div>
                  )}
                  <Link href="/projects/compass-plc">
                    <Image
                      onMouseOver={() => setActiveImage("C")}
                      width={widthC}
                      height="auto"
                      className="image"
                      loading="lazy"
                      data-lazy="true"
                      src={"https:" + projectImage3.fields.file.url}
                      alt={projectImage3.title}
                    />
                  </Link>
                  {activeImage === "C" && (
                    <div
                      className="centered"
                      style={{
                        left: " 68.75%",
                      }}
                    >
                      Compass PLC
                    </div>
                  )}
                </div>
              </div>
            </StyledFunImage>
          </StyledMarginWraperE>
        </ImageSizer.Provider>
      ) : (
        <StyledMarginWraperE>
          <StyledFunImage>
            <div className="image-holder-mobile">
              <div className="images-mobile">
                <Row className="image-rows">
                  <Link href="/projects/london-fashion-week">
                    <Image
                      onMouseOver={() => setActiveImage("A")}
                      className="image-mobile"
                      loading="lazy"
                      data-lazy="true"
                      height="auto"
                      src={"https:" + projectImage1.fields.file.url}
                      alt={projectImage1.title}
                    />
                  </Link>
                  {/* <div
                    className="centered"
                    style={{
                      left: " 50%",
                    }}
                  >
                    London Fashion Week
                  </div> */}
                </Row>
                <Row className="image-rows">
                  <Link href="/projects/abercrombie-and-fitch">
                    <Image
                      onMouseOver={() => setActiveImage("B")}
                      height="auto"
                      className="image-mobile"
                      loading="lazy"
                      data-lazy="true"
                      src={"https:" + projectImage2.fields.file.url}
                      alt={projectImage2.title}
                      style={{ marginTop: "1rem" }}
                    />
                  </Link>
                  {/* <div
                    className="centered"
                    style={{
                      left: " 50%",
                    }}
                  >
                    Abercrombie and fitch
                  </div> */}
                </Row>
                <Row className="image-rows">
                  <Link href="/projects/compass-plc">
                    <Image
                      onMouseOver={() => setActiveImage("C")}
                      height="auto"
                      className="image-mobile"
                      loading="lazy"
                      data-lazy="true"
                      src={"https:" + projectImage3.fields.file.url}
                      alt={projectImage3.title}
                      style={{ marginTop: "1rem" }}
                    />
                  </Link>

                  {/* <div
                    className="centered"
                    style={{
                      left: " 56.25%",
                    }}
                  >
                    Compass PLC
                  </div> */}
                </Row>
                <Row className="image-rows">
                  <Link href="/projects/st-andrews-links">
                    <Image
                      className="image-mobile"
                      height="auto"
                      loading="lazy"
                      data-lazy="true"
                      src={"https:" + projectImage4.fields.file.url}
                      alt={projectImage4.title}
                      style={{ marginTop: "1rem" }}
                    />
                  </Link>
                  {/* 
                  <div
                    className="centered"
                    style={{
                      left: " 68.75%",
                    }}
                  >
                    St Andrews
                  </div> */}
                </Row>
              </div>
            </div>
          </StyledFunImage>
        </StyledMarginWraperE>
      )}
    </>
  );
};
export default FunImage;

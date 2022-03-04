// import Image from "next/image";
import { StyledFunImage } from "./StyledFunImage";
import { createContext, useState, useEffect } from "react";
import { Image } from "react-bootstrap";
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

  const { projectImage1, projectImage2, projectImage3, projectImage4 } =
    mainImages.fields;
  return (
    <>
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
                  <opensanssmall
                    className="centered"
                    style={{
                      left: " 31.25%",
                    }}
                  >
                    London Fashion Week
                  </opensanssmall>
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
                  <opensanssmall
                    className="centered"
                    style={{
                      left: " 43.75%",
                    }}
                  >
                    Abercrombie and fitch
                  </opensanssmall>
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
                  <opensanssmall
                    className="centered"
                    style={{
                      left: " 56.25%",
                    }}
                  >
                    Compass PLC
                  </opensanssmall>
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
                  <opensanssmall
                    className="centered"
                    style={{
                      left: " 68.75%",
                    }}
                  >
                    St Andrews
                  </opensanssmall>
                )}
              </div>
            </div>
          </StyledFunImage>
        </StyledMarginWraperE>
      </ImageSizer.Provider>
    </>
  );
};
export default FunImage;

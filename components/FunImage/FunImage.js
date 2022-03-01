// import Image from "next/image";
import { StyledFunImage } from "./StyledFunImage";
import { createContext, useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";

const ImageSizer = createContext({
  widthA: "50%",
  widthB: "16.6667%",
  widthC: "16.6667%",
  widthD: "16.6667%",
});

const FunImage = () => {
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
      console.log(widthA);
    } else if (activeImage == "B") {
      setWidthA("12.5%");
      setWidthB("62.5%");
      setWidthC("12.5%");
      setWidthD("12.5%");
      console.log(widthB);
    } else if (activeImage == "C") {
      setWidthA("12.5%");
      setWidthB("12.5%");
      setWidthC("62.5%");
      setWidthD("12.5%");
      console.log(widthC);
    } else if (activeImage == "D") {
      setWidthA("12.5%");
      setWidthB("12.5%");
      setWidthC("12.5%");
      setWidthD("62.5%");
      console.log(widthD);
    } else {
      setWidthA("62.5%");
      setWidthB("12.5%");
      setWidthC("12.5%");
      setWidthD("12.5%");
      console.log(widthA, "FallBack");
    }
  }, [activeImage]);

  return (
    <>
      <ImageSizer.Provider>
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
                  alt="empty rectangle"
                  src="https://lfw-hackathon.s3.eu-west-2.amazonaws.com/Screenshot+2022-02-18+at+12.24.30.png"
                />
              </Link>
              <Link href="/projects/abercrombie-and-fitch">
                <>
                  <Image
                    onMouseOver={() => setActiveImage("B")}
                    width={widthB}
                    className="image"
                    loading="lazy"
                    data-lazy="true"
                    alt="empty rectangle"
                    src="https://lfw-hackathon.s3.eu-west-2.amazonaws.com/Screenshot+2022-02-18+at+12.24.30.png"
                  />
                  {/* <opensanssmall>Abercrombie and fitch</opensanssmall> */}
                </>
              </Link>

              <Link href="/projects/compass-plc">
                <Image
                  onMouseOver={() => setActiveImage("C")}
                  width={widthC}
                  className="image"
                  loading="lazy"
                  data-lazy="true"
                  alt="empty rectangle"
                  src="https://lfw-hackathon.s3.eu-west-2.amazonaws.com/Screenshot+2022-02-18+at+12.24.30.png"
                />
              </Link>

              <Link href="/projects/st-andrews">
                <Image
                  onMouseOver={() => setActiveImage("D")}
                  width={widthD}
                  widthImage={activeImage}
                  className="image"
                  loading="lazy"
                  data-lazy="true"
                  alt="empty rectangle"
                  src="https://lfw-hackathon.s3.eu-west-2.amazonaws.com/Screenshot+2022-02-18+at+12.24.30.png"
                />
              </Link>
            </div>
          </div>
        </StyledFunImage>
      </ImageSizer.Provider>
    </>
  );
};
export default FunImage;

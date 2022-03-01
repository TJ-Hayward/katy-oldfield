// import Image from "next/image";
import { StyledFunImage } from "./StyledFunImage";
import { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";

const FunImage = () => {
  const [activeImage, setActiveImage] = useState("A");

  let widthA = "50%";
  let widthB = "16.6667%";
  let widthC = "16.6667%";
  let widthD = "16.6667%";

  useEffect(() => {
    if (activeImage == "A") {
      widthA = "50%";
      widthB = "16.6667%";
      widthC = "16.6667%";
      widthD = "16.6667%";
      return widthA, widthB, widthC, widthD;
    } else if (activeImage == "B") {
      widthA = "16.6667%";
      widthB = "50%";
      widthC = "16.6667%";
      widthD = "16.6667%";
      return widthA, widthB, widthC, widthD;
    } else if (activeImage == "C") {
      widthA = "16.6667%";
      widthB = "16.6667%";
      widthC = "50%";
      widthD = "16.6667%";
      console.log("C");
      console.log(widthA, widthB, widthC, widthD, "C");
      return widthA, widthB, widthC, widthD;
    } else if (activeImage == "D") {
      widthA = "16.6667%";
      widthB = "16.6667%";
      widthC = "16.6667%";
      widthD = "50%";
      console.log(widthA, widthB, widthC, widthD, "D");
      return widthA, widthB, widthC, widthD;
    } else {
      widthA = "50%";
      widthB = "16.6667%";
      widthC = "16.6667%";
      widthD = "16.6667%";
      console.log(widthA, widthB, widthC, WidthD);
      console.log();
      return widthA, widthB, widthC, widthD;
    }
  }, [activeImage]);
  {
    console.log(widthA, widthB, widthC, widthD, "A");
  }

  return (
    <>
      <StyledFunImage>
        <div className="image-holder">
          <div className="images">
            <Link href="/projects/london-fashion-week">
              <Image
                onMouseOver={() => setActiveImage("A")}
                width={widthA}
                className="imageA"
                loading="lazy"
                data-lazy="true"
                alt="empty rectangle"
                src="https://lfw-hackathon.s3.eu-west-2.amazonaws.com/Screenshot+2022-02-18+at+12.24.30.png"
              />
            </Link>

            {console.log(widthA, widthB, widthC, widthD, "pls")}
            <Link href="/projects/abercrombie-and-fitch">
              <Image
                onMouseOver={() => setActiveImage("B")}
                width={widthB}
                className="imageB"
                loading="lazy"
                data-lazy="true"
                alt="empty rectangle"
                src="https://lfw-hackathon.s3.eu-west-2.amazonaws.com/Screenshot+2022-02-18+at+12.24.30.png"
              />
            </Link>
            {console.log(widthB)}
            <Link href="/projects/compass-plc">
              <Image
                onMouseOver={() => setActiveImage("C")}
                width={widthC}
                className="imageC"
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
                className="imageD"
                loading="lazy"
                data-lazy="true"
                alt="empty rectangle"
                src="https://lfw-hackathon.s3.eu-west-2.amazonaws.com/Screenshot+2022-02-18+at+12.24.30.png"
              />
            </Link>
          </div>
        </div>
      </StyledFunImage>
    </>
  );
};
export default FunImage;

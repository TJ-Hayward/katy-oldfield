import React from "react";
import Image from "next/image";
import { StyledMarginWraperB } from "../MarginWraperB";
import { StyledBigImages } from "./styles/StyledBigImages";

import ReactPlayer from "react-player";

export default function BigImages({ project }) {
  const projectData = project.fields;
  return (
    <>
      {console.log(projectData)}

      <StyledMarginWraperB>
        <StyledBigImages>
          {projectData.fullImage1.fields.file.url.includes(
            "images.ctfassets.net"
          ) ? (
            <img
              src={"https:" + projectData.fullImage1.fields.file.url}
              alt={projectData.fullImage1.fields.file.title}
              className="backImage"
              width="100%"
              height="auto"
            />
          ) : (
            <div className="backImage">
              <ReactPlayer
                className="react-player"
                url={"https:" + projectData.fullImage1.fields.file.url}
                width="100%"
                height="auto"
                playing="playing"
                // controls={true}
                playbackRate={2}
                volume={0}
                muted={true}
                loop={true}
              />
            </div>
          )}
          {projectData.fullImage2.fields.file.url.includes(
            "images.ctfassets.net"
          ) ? (
            <img
              src={"https:" + projectData.fullImage2.fields.file.url}
              alt={projectData.fullImage2.fields.file.title}
              className="backImage"
              width="100%"
              height="auto"
            />
          ) : (
            <div className="backImage">
              <ReactPlayer
                className="react-player"
                url={"https:" + projectData.fullImage2.fields.file.url}
                width="100%"
                height="auto"
                playing="playing"
                // controls={true}
                playbackRate={2}
                volume={0}
                muted={true}
                loop={true}
              />
            </div>
          )}
          {projectData.fullImage3.fields.file.url.includes(
            "images.ctfassets.net"
          ) ? (
            <img
              src={"https:" + projectData.fullImage3.fields.file.url}
              alt={projectData.fullImage1.fields.file.title}
              className="backImage"
              width="100%"
              height="auto"
            />
          ) : (
            <div className="backImage">
              <ReactPlayer
                className="react-player"
                url={"https:" + projectData.fullImage3.fields.file.url}
                width="100%"
                height="auto"
                playing="playing"
                // controls={true}
                playbackRate={2}
                volume={0}
                muted={true}
                loop={true}
              />
            </div>
          )}
          {projectData.fullImage4.fields.file.url.includes(
            "images.ctfassets.net"
          ) ? (
            <img
              src={"https:" + projectData.fullImage4.fields.file.url}
              alt={projectData.fullImage4.fields.file.title}
              className="backImage"
              width="100%"
              height="auto"
            />
          ) : (
            <div className="backImage">
              <ReactPlayer
                className="react-player"
                url={"https:" + projectData.fullImage4.fields.file.url}
                width="100%"
                height="auto"
                playing="playing"
                // controls={true}
                playbackRate={2}
                volume={0}
                muted={true}
                loop={true}
              />
            </div>
          )}
          {projectData.fullImage5.fields.file.url.includes(
            "images.ctfassets.net"
          ) ? (
            <img
              src={"https:" + projectData.fullImage5.fields.file.url}
              alt={projectData.fullImage5.fields.file.title}
              className="backImage"
              width="100%"
              height="auto"
            />
          ) : (
            <div className="backImage">
              <ReactPlayer
                className="react-player"
                url={"https:" + projectData.fullImage5.fields.file.url}
                width="100%"
                height="auto"
                playing="playing"
                // controls={true}
                playbackRate={2}
                volume={0}
                muted={true}
                loop={true}
              />
            </div>
          )}
        </StyledBigImages>
      </StyledMarginWraperB>
    </>
  );
}

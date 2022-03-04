import React from "react";
import Image from "next/image";
import { StyledMarginWraperB } from "../MarginWraperB";
import { StyledBigImages } from "./styles/StyledBigImages";

import ReactPlayer from "react-player";

export default function BigImages({ project }) {
  const projectData = project.fields;
  return (
    <>
      <StyledMarginWraperB>
        <StyledBigImages>
          {projectData.fullImage1 ? (
            <>
              {projectData.fullImage1.fields.file.url.includes(
                "images.ctfassets.net"
              ) ? (
                <img
                  src={"https:" + projectData.fullImage1.fields.file.url}
                  alt={projectData.fullImage1.fields.file.title}
                  className="backImage"
                  width="100%"
                  height="auto"
                  loading="lazy"
                />
              ) : (
                <div className="backImage">
                  <ReactPlayer
                    className="react-player"
                    url={"https:" + projectData.fullImage1.fields.file.url}
                    width="100%"
                    height="auto"
                    playing={true}
                    // controls={true}
                    volume={0}
                    muted={true}
                    loop={true}
                  />
                </div>
              )}
            </>
          ) : (
            <></>
          )}
          {projectData.fullImage2 ? (
            <>
              {projectData.fullImage2.fields.file.url.includes(
                "images.ctfassets.net"
              ) ? (
                <img
                  src={"https:" + projectData.fullImage2.fields.file.url}
                  alt={projectData.fullImage2.fields.file.title}
                  className="backImage"
                  width="100%"
                  height="auto"
                  loading="lazy"
                />
              ) : (
                <div className="backImage">
                  <ReactPlayer
                    className="react-player"
                    url={"https:" + projectData.fullImage2.fields.file.url}
                    width="100%"
                    height="auto"
                    playing={true}
                    // controls={true}
                    volume={0}
                    muted={true}
                    loop={true}
                  />
                </div>
              )}
            </>
          ) : (
            <></>
          )}
          {projectData.fullImage3 ? (
            <>
              {projectData.fullImage3.fields.file.url.includes(
                "images.ctfassets.net"
              ) ? (
                <img
                  src={"https:" + projectData.fullImage3.fields.file.url}
                  alt={projectData.fullImage3.fields.file.title}
                  className="backImage"
                  width="100%"
                  height="auto"
                  loading="lazy"
                />
              ) : (
                <div className="backImage">
                  <ReactPlayer
                    className="react-player"
                    url={"https:" + projectData.fullImage3.fields.file.url}
                    width="100%"
                    height="auto"
                    playing={true}
                    // controls={true}
                    volume={0}
                    muted={true}
                    loop={true}
                  />
                </div>
              )}
            </>
          ) : (
            <></>
          )}
          {projectData.fullImage4 ? (
            <>
              {projectData.fullImage4.fields.file.url.includes(
                "images.ctfassets.net"
              ) ? (
                <img
                  src={"https:" + projectData.fullImage4.fields.file.url}
                  alt={projectData.fullImage4.fields.file.title}
                  className="backImage"
                  width="100%"
                  height="auto"
                  loading="lazy"
                />
              ) : (
                <div className="backImage">
                  <ReactPlayer
                    className="react-player"
                    url={"https:" + projectData.fullImage4.fields.file.url}
                    width="100%"
                    height="auto"
                    playing={true}
                    // controls={true}
                    volume={0}
                    muted={true}
                    loop={true}
                  />
                </div>
              )}
            </>
          ) : (
            <></>
          )}
          {projectData.fullImage5 ? (
            <>
              {projectData.fullImage5.fields.file.url.includes(
                "images.ctfassets.net"
              ) ? (
                <img
                  src={"https:" + projectData.fullImage5.fields.file.url}
                  alt={projectData.fullImage5.fields.file.title}
                  className="backImage"
                  width="100%"
                  height="auto"
                  loading="lazy"
                />
              ) : (
                <div className="backImage">
                  <ReactPlayer
                    className="react-player"
                    url={"https:" + projectData.fullImage5.fields.file.url}
                    width="100%"
                    height="auto"
                    playing={true}
                    // controls={true}
                    volume={0}
                    muted={true}
                    loop={true}
                  />
                </div>
              )}
            </>
          ) : (
            <></>
          )}
          {projectData.fullImage6 ? (
            <>
              {projectData.fullImage6.fields.file.url.includes(
                "images.ctfassets.net"
              ) ? (
                <img
                  src={"https:" + projectData.fullImage6.fields.file.url}
                  alt={projectData.fullImage6.fields.file.title}
                  className="backImage"
                  width="100%"
                  height="auto"
                  loading="lazy"
                />
              ) : (
                <div className="backImage">
                  <ReactPlayer
                    className="react-player"
                    url={"https:" + projectData.fullImage6.fields.file.url}
                    width="100%"
                    height="auto"
                    playing={true}
                    // controls={true}
                    volume={0}
                    muted={true}
                    loop={true}
                  />
                </div>
              )}
            </>
          ) : (
            <></>
          )}
          {projectData.fullImage7 ? (
            <>
              {projectData.fullImage7.fields.file.url.includes(
                "images.ctfassets.net"
              ) ? (
                <img
                  src={"https:" + projectData.fullImage7.fields.file.url}
                  alt={projectData.fullImage7.fields.file.title}
                  className="backImage"
                  width="100%"
                  height="auto"
                  loading="lazy"
                />
              ) : (
                <div className="backImage">
                  <ReactPlayer
                    className="react-player"
                    url={"https:" + projectData.fullImage7.fields.file.url}
                    width="100%"
                    height="auto"
                    playing={true}
                    // controls={true}
                    volume={0}
                    muted={true}
                    loop={true}
                  />
                </div>
              )}
            </>
          ) : (
            <></>
          )}
          {projectData.fullImage8 ? (
            <>
              {projectData.fullImage5.fields.file.url.includes(
                "images.ctfassets.net"
              ) ? (
                <img
                  src={"https:" + projectData.fullImage8.fields.file.url}
                  alt={projectData.fullImage8.fields.file.title}
                  className="backImage"
                  width="100%"
                  height="auto"
                  loading="lazy"
                />
              ) : (
                <div className="backImage">
                  <ReactPlayer
                    className="react-player"
                    url={"https:" + projectData.fullImage8.fields.file.url}
                    width="100%"
                    height="auto"
                    playing={true}
                    // controls={true}
                    volume={0}
                    muted={true}
                    loop={true}
                  />
                </div>
              )}
            </>
          ) : (
            <></>
          )}
        </StyledBigImages>
      </StyledMarginWraperB>
    </>
  );
}

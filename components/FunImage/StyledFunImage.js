import styled from "styled-components";

export const StyledFunImage = styled.div`
  /* margin: 0 5vw; */
  padding-top: 64px;
  .image-holder {
    @media only screen and (max-width: 768px) {
      max-width: calc(100vw - 0rem);
    }
    max-width: calc(100vw - 8rem);
    max-height: 85vh;
    box-sizing: content-box;
    align-self: center;
    flex-wrap: wrap;
    overflow-y: hidden;
    overflow-x: hidden;
    display: flex;
    flex-direction: ltr;
    will-change: flex;
    /* flex-basis: 0%;
    flex-grow: 1;
    flex-shrink: 1; */
  }
  .images {
    object-fit: cover;
  }
  /* .text {
    box-sizing: content-box;
    align-self: center;
    flex-wrap: wrap;
    overflow-y: hidden;
    overflow-x: hidden;
  } */
  .centered {
    font: normal normal 24px/40px IBMPlexSans;
    position: absolute;
    top: 87.5%;
    transform: translate(-50%, -50%);
    color: black;
    left: 31.25%;
  }

  .image {
    transition: all 500ms ease;

    /* transition: 500ms cubic-bezier(0.29, 0, 0.2, 1); */
    height: 791px;
    object-fit: cover;
  }
`;

import styled from "styled-components";

export const StyledFunImage = styled.div`
  /* margin: 0 5vw; */
  padding-top: 64px;
  .image-holder {
    max-width: calc(100vw - 8rem);
    max-height: 85vh;
    box-sizing: content-box;
    align-self: center;
    flex-wrap: wrap;
    overflow-y: hidden;
    overflow-x: hidden;
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
    position: absolute;
    top: 90%;
    transform: translate(-50%, -50%);
    color: white;
    left: 31.25%;
  }

  .image {
    transition: all 500ms ease-in;
    /* transition: 1s cubic-bezier(.29,0,.2,1); */
    height: 791px;
    object-fit: cover;
  }
`;

import styled from "styled-components";

export const StyledLanding = styled.div`
  .fun_container {
    width: 100%;
    height: 100%;

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /* position: absolute; */
    background-color: #0e431d;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* overflow-y: hidden;
    overflow-x: hidden; */
  }
  .contents {
    text-align: center;
    height: 100%;
    width: 100%;
    /* margin-block: 0px; */
    background-color: #0e431d;
    color: white;
    @media only screen and (max-width: 576px) {
      font-size: 250px;
      line-height: 250px;
    }
    @media only screen and (min-width: 576px) {
      font-size: 400px;
      line-height: 400px;
    }
    @media only screen and (min-width: 1020px) {
      font-size: 600px;
      line-height: 600px;
    }
  }
  /* .button-holder {
    align-items: center;
    position: relative;
    left: 45%;
  } */
  .buttons {
    position: relative;
    text-align: center;
    color: white;
    border: 1px solid white;
    padding: 0.5rem 1rem 0.5rem 1rem;
  }
`;

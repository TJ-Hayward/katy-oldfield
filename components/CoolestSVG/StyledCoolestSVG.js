import styled from "styled-components";

export const StyledCoolestSVG = styled.div`
  .image_sizer {
    @media only screen and (max-width: 576px) {
      height: 255px;
    }
    @media only screen and (min-width: 576px) {
      height: 355px;
    }
    @media only screen and (min-width: 1020px) {
      height: 455px;
    }
  }

  .path {
    stroke-dasharray: 3269;
    stroke-dashoffset: 3269;
    animation: dash 5s linear forwards;
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

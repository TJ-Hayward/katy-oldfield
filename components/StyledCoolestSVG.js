import styled from "styled-components";

export const StyledCoolestSVG = styled.div`
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

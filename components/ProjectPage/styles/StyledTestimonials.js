import styled from "styled-components";

export const StyledTestimonials = styled.div`
  color: white;
  /* background-color: ${(props) =>
    props.testimonialColor ? `${props.testimonialColor}` : "#0e431d"}; */
  .testimonials {
    font: normal normal normal 32px/40px IBMPlexSans-medium;
    @media only screen and (max-width: 768px) {
      margin-top: 3rem;
    }
    margin-top: 5rem;
    margin-bottom: 2rem;
  }
  .desk {
    text-align: center;
  }
  .actualTestimonials {
    font: normal normal 16px/24px IBMPlexSans;
    @media only screen and (max-width: 768px) {
      margin-bottom: 1rem;
    }
    margin-bottom: 1.5rem;
  }
  .testimonialPerson {
    font: normal normal normal 32px/40px IBMPlexSans-medium;
    @media only screen and (max-width: 768px) {
      margin-bottom: 2rem;
    }
    margin-bottom: 8rem;
  }
  .row > * {
    @media only screen and (max-width: 576px) {
      padding-right: 0px;
    }
  }
`;

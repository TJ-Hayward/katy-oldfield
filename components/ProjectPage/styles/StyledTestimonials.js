import styled from "styled-components";

export const StyledTestimonials = styled.div`
  color: white;

  .testimonials {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .testimonialPerson {
    margin-bottom: 2rem;
  }
  .row > * {
    @media only screen and (max-width: 576px) {
      padding-right: 0px;
    }
  }
`;

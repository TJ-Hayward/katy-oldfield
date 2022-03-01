import styled from "styled-components";

export const StyledFunImage = styled.div`
margin: 0 5vw;
padding-top: 5rem;
  .image-holder {
    min-width: 90vw;
    max-height: 85vh;
    box-sizing: content-box;
    align-self: center;
    flex-wrap: wrap;
    overflow-y: hidden;
    overflow-x: hidden;
  }
  .images{
      object-fit: cover;
  }
:hover{
    .imageA{
        width: 16.6667%;
    }
  }
}
  .imageA {
    transition: all 500ms ease-in-out;
    height: 791px;
    object-fit: cover;
    width: 50%;
    :hover {
      width: 50%;
    }
  }

  .imageB {
    transition: all 500ms ease-in-out;
    height: 791px;
    object-fit: cover;
    width: 16.6667%;
    :hover {
      width: 50%;
    }
  }
  .imageC {
    transition: all 500ms ease-in-out;
    height: 791px;
    object-fit: cover;
    width: 16.6667%;
    :hover {
      width: 50%;
    }
  }
  .imageD {
    transition: all 500ms ease-in-out;
    height: 791px;
    object-fit: cover;
    width: 16.6667%;
    :hover {
      width: 50%;
    }
  }
  /* .a {
    transition: all 500ms ease-in-out;
    height: 791px;
    object-fit: cover;
    width: ${(props) => (props.activeImage = "A" ? "50%" : "16.6667%")};
  }
  .b {
    transition: all 500ms ease-in-out;
    height: 791px;
    object-fit: cover;
    width: ${(props) => (props.activeImage = "B" ? "50%" : "16.6667%")};
  }
  .c {
    transition: all 500ms ease-in-out;
    height: 791px;
    object-fit: cover;
    width: ${(props) => (props.activeImage = "C" ? "50%" : "16.6667%")};
  }
  .d {
    transition: all 500ms ease-in-out;
    height: 791px;
    object-fit: cover;
    width: ${(props) => (props.activeImage = "D" ? "50%" : "16.6667%")};
  } */
`;

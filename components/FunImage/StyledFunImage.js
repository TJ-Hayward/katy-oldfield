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

}
  .image {
    transition: all 500ms ease-in;
    /* transition: 1s cubic-bezier(.29,0,.2,1); */
    height: 791px;
    object-fit: cover;
  }


 
`;

import styled from "styled-components";

export const StyledHeader = styled.div`
  @media only screen and (max-width: 768px) {
    .header-logo {
      float: left;
      /* letter-spacing: -1.2px; */
      font-size: 20px;
    }
    /* padding: 0rem 0.75rem 0rem 0.75rem; */
  }
  @media only screen and (max-width: 768px) {
    padding: 0 1rem 0 1rem;
  }
  @media only screen and (min-width: 768px) {
    padding: 0rem 4rem 0rem 4rem;
  }
  @media only screen and (min-width: 1400px) {
    padding: 0rem 6rem 0rem 6rem;
  }

  position: fixed;
  background-color: white;
  width: 100%;
  transition: padding 0.25s cubic-bezier(0.27, 0.79, 0.32, 1.01) 0s;
  /* box-shadow: rgb(0 0 0 / 25%) 0px 2px 2px; */

  z-index: 50;
  /* padding: 5rem 0 5rem 0; */
  .header-logo {
    float: left;
    letter-spacing: -1.2px;
  }
  .header-pages {
    text-align: right;
    float: right;
    line-height: 40px;
    @media only screen and (max-width: 576px) {
      margin-left: 2rem;
    }
    @media only screen and (min-width: 576px) {
      margin-left: 4rem;
    }
  }
  .header_about {
    color: black;
  }
  .header_projects {
    color: black;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 1rem 0rem 1rem 0rem;
    overflow: hidden;
  }

  li a {
    display: inline-block;
    text-align: center;
    padding: 0px 0px;
    text-decoration: none;
  }

  li a:hover {
    font-family: ;
  }
`;

import styled from "styled-components";

export const StyledHeader = styled.div`
  .header-logo {
    float: left;
    letter-spacing: -1.2px;
  }
  .header-pages {
    text-align: right;
    float: right;
    margin-left: 64px;
    line-height: 40px;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  li a {
    display: inline-block;
    text-align: center;
    padding: 0px 0px;
    text-decoration: none;
  }

  li a:hover {
    text-decoration: underline;
  }
`;

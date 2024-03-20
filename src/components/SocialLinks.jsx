import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
// Data
import { Blog } from "../data";
// Icons
import { Icon } from "@iconify/react";

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
  // const { blog, html_url } = useSelector(selectData);
  const html_url =
    "https://github.com/granulatedsugar/MotorPH-Enterprise-System";

  return (
    <StyledSocialLinks>
      <a
        href={html_url}
        aria-label="Check out my GitHub profile."
        className="link-icons"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon="icomoon-free:github" />
      </a>
    </StyledSocialLinks>
  );
}

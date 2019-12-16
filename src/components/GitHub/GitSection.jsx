import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  margin: 20px;
  padding: 20px;
`;

const Heading = styled.h1`
  margin: 0 0 10px 0;
`;

const Section = ({ heading, children }) => (
  <SectionContainer>
    <Heading>{heading}</Heading>
    {children}
  </SectionContainer>
);

export default Section;

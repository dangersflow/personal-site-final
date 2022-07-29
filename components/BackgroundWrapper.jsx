import react from "react";
import styled from "@emotion/styled";

const { motion } = require("framer-motion");

const StyledBackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${(props) => props.bg});
  background-repeat: "repeat";
  min-height: 100vh;

  margin-left: 30rem;
`;

export default function BackgroundWrapper(props) {
  console.log(props.bg + " is the background image");
  return (
    <StyledBackgroundWrapper bg={props.bg}>
      {props.children}
    </StyledBackgroundWrapper>
  );
}

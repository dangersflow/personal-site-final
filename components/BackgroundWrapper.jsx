import react from "react";
import styled from "@emotion/styled";
import bg from "../public/background-final.png";
import Image from "next/image";

const { motion } = require("framer-motion");

const StyledBackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${bg.src});
  background-repeat: "repeat";
  min-height: 100vh;

  margin-left: 30rem;
`;

export default function BackgroundWrapper(props) {
  return <StyledBackgroundWrapper>{props.children}</StyledBackgroundWrapper>;
}

import styled from "@emotion/styled";
const { motion } = require("framer-motion");
import Image from "next/image";
import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiJavascript, SiCss3, SiHtml5 } from "react-icons/si";

import {
  StyledHeader,
  StyledBodyLeft,
  StyledBodyRight,
  StyledContentColumn,
  StyledBodyCenter,
} from "../MainStyledComponents";

export default function HomeContent() {
  const [noDelay, setNoDelay] = useState(false);

  return (
    <StyledContentColumn>
      <StyledHeader
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        FRANCISCO GONZALEZ
      </StyledHeader>
      <StyledBodyLeft
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: noDelay ? 0 : 0.5,
        }}
      >
        {`👋 Hello. My name is Frank! \n`}
      </StyledBodyLeft>
      <StyledBodyCenter
        initial={{ y: "4rem", opacity: 0, animationDelay: "0.5s" }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: noDelay ? 0 : 1.5,
        }}
      >
        {`🕸️ I'm a software engineer and a web developer. 🕸️  \n`}
      </StyledBodyCenter>
      <StyledBodyRight
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: noDelay ? 0 : 2.5,
        }}
      >{`Thanks for stopping by! \n`}</StyledBodyRight>
      <StyledBodyCenter
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: noDelay ? 0 : 3.5,
        }}
        onAnimationComplete={() => {
          setNoDelay(true);
        }}
      >
        {`🔥My Tech Stack🔥  \n`}
      </StyledBodyCenter>
      <StyledBodyCenter
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: noDelay ? 0 : 4.5,
        }}
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaReact size={100} color="white" />
        <TbBrandNextjs size={100} color="white" />
        <SiJavascript size={100} color="white" />
        <SiHtml5 size={100} color="white" />
        <SiCss3 size={100} color="white" />
      </StyledBodyCenter>
    </StyledContentColumn>
  );
}

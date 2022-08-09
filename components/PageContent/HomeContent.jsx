import styled from "@emotion/styled";
const { motion } = require("framer-motion");
import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiJavascript, SiCss3, SiHtml5 } from "react-icons/si";
import TechCard from "../TechCard";
import ProfilePic from "../../public/me.jpg";
import Image from "next/image";

import {
  StyledHeader,
  StyledBodyLeft,
  StyledContentColumn,
  StyledBodyCenter,
  StyledBodyLeftAlt,
} from "../MainStyledComponents";

import Row from "../Row";
import Col from "../Col";

export default function HomeContent() {
  const [noDelay, setNoDelay] = useState(false);

  return (
    <StyledContentColumn>
      <StyledHeader
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        FRANCISCO GONZALEZ
      </StyledHeader>
      <Row
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: "50rem",
          marginBottom: "10rem",
          flexWrap: "wrap",
        }}
      >
        <Col
          style={{
            width: "50%",
            alignItems: "space-evenly",
            justifyContent: "space-evenly",
          }}
        >
          <StyledBodyLeftAlt
            style={{ width: "100%" }}
            initial={{ y: "4rem", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {`👋 Hello. My name is Frank! \n`}
          </StyledBodyLeftAlt>
          <StyledBodyLeftAlt
            style={{ width: "100%" }}
            initial={{ y: "4rem", opacity: 0, animationDelay: "0.5s" }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {`🕸️ I'm a software engineer and a web developer. 🕸️  \n`}
          </StyledBodyLeftAlt>
          <StyledBodyLeftAlt
            style={{ width: "100%" }}
            initial={{ y: "4rem", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >{`Thanks for stopping by! \n`}</StyledBodyLeftAlt>
        </Col>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
          }}
        >
          <motion.div
            style={{
              backgroundImage: `url(${ProfilePic.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
            initial={{ y: "4rem", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </Col>
      </Row>
      <StyledBodyCenter
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {`🔥My Tech Stack🔥  \n`}
      </StyledBodyCenter>
      <StyledBodyCenter
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        style={{
          display: "flex",
          width: "100%",
          paddingTop: "5rem",
          paddingBottom: "5rem",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          position: "relative",
        }}
        transition={{ delay: 0.6 }}
      >
        <TechCard href={"https://reactjs.org/"}>
          <FaReact size={100} color="white" />
          <StyledTechPadding />
          {`React`}
        </TechCard>
        <TechCard href={"https://nextjs.org/"}>
          <TbBrandNextjs size={100} color="white" />
          <StyledTechPadding />
          {`Next.js`}
        </TechCard>
        <TechCard href={"https://www.javascript.com/"}>
          <SiJavascript size={100} color="white" />
          <StyledTechPadding />
          {`JavaScript`}
        </TechCard>
        <TechCard
          href={
            "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
          }
        >
          <SiHtml5 size={100} color="white" />
          <StyledTechPadding />
          {`HTML`}
        </TechCard>
        <TechCard href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}>
          <SiCss3 size={100} color="white" />
          <StyledTechPadding />
          {`CSS`}
        </TechCard>
      </StyledBodyCenter>
    </StyledContentColumn>
  );
}

const StyledTechPadding = styled.div`
  padding-bottom: 2rem;
`;

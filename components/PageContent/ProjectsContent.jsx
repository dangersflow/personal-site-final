import styled from "@emotion/styled";
const { motion } = require("framer-motion");

import {
  StyledHeader,
  StyledBodyLeft,
  StyledBodyRight,
  StyledContentColumnTimeline,
  StyledBodyCenter,
  StyledTimelineBody,
  StyledTimelineHeader,
  StyledTimelineBodyText,
  StyledTimelineChipRow,
  StyledTimelineSubtitle,
} from "../MainStyledComponents";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Chip } from "@mui/material";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiStyledcomponents } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { SiDart } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

export default function ProjectsContent() {
  return (
    <StyledContentColumnTimeline>
      <StyledHeader
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        PROJECTS
      </StyledHeader>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <StyledTimelineBody
              href="https://github.com/dangersflow/personal-site-final"
              target="_blank"
              initial={{ y: "4rem", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -10, cursor: "pointer" }}
            >
              <StyledTimelineHeader>
                {`Personal Portfolio Website`}
              </StyledTimelineHeader>
              <StyledTimelineBodyText>
                {`This is a personal portfolio website that I built using React and Next.js. This is the site you're currently on!`}
              </StyledTimelineBodyText>
              <StyledTimelineSubtitle>{`August 2022`}</StyledTimelineSubtitle>
              <StyledTimelineChipRow>
                <Chip
                  icon={<FaReact />}
                  label="React"
                  style={{ backgroundColor: "lightblue", color: "black" }}
                />
                <Chip
                  icon={<TbBrandNextjs />}
                  label="Next.js"
                  style={{ backgroundColor: "black", color: "white" }}
                />
                <Chip
                  icon={<SiStyledcomponents />}
                  label="Styled Components"
                  style={{ backgroundColor: "#393939", color: "white" }}
                />
                <Chip
                  icon={<SiMaterialui />}
                  label="Material UI"
                  style={{
                    backgroundColor: "#007FFF",
                    color: "white",
                  }}
                />
              </StyledTimelineChipRow>
            </StyledTimelineBody>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <StyledTimelineBody
              href="https://github.com/dangersflow/Pomodoro-Timer"
              target="_blank"
              initial={{ y: "4rem", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -10, cursor: "pointer" }}
            >
              <StyledTimelineHeader>{`Pomodoro Timer`}</StyledTimelineHeader>
              <StyledTimelineBodyText>
                {`This is a Pomodoro timer that I built using React and Next.js. The main learning point of this project was how to use hooks.`}
              </StyledTimelineBodyText>
              <StyledTimelineSubtitle>{`June 2022 - July 2022`}</StyledTimelineSubtitle>
              <StyledTimelineChipRow>
                <Chip
                  icon={<FaReact />}
                  label="React"
                  style={{ backgroundColor: "lightblue", color: "black" }}
                />
                <Chip
                  icon={<TbBrandNextjs />}
                  label="Next.js"
                  style={{ backgroundColor: "black", color: "white" }}
                />
                <Chip
                  icon={<SiStyledcomponents />}
                  label="Styled Components"
                  style={{ backgroundColor: "#393939", color: "white" }}
                />
                <Chip
                  icon={<SiMaterialui />}
                  label="Material UI"
                  style={{
                    backgroundColor: "#007FFF",
                    color: "white",
                  }}
                />
              </StyledTimelineChipRow>
            </StyledTimelineBody>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <StyledTimelineBody
              href="https://github.com/dangersflow/pats-project"
              target="_blank"
              initial={{ y: "4rem", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -10, cursor: "pointer" }}
            >
              <StyledTimelineHeader>
                {`Pattern Synthesis Thesis Project`}
              </StyledTimelineHeader>
              <StyledTimelineBodyText>
                {`This is a project that I undertook as part of my MS in Computer Science. It was a project that I undertook that; given a particular pattern, could one generate a tile set that can build that particular pattern.`}
              </StyledTimelineBodyText>
              <StyledTimelineSubtitle>{`August 2021 - May 2022`}</StyledTimelineSubtitle>
              <StyledTimelineChipRow>
                <Chip
                  icon={<SiDart />}
                  label="Dart"
                  style={{ backgroundColor: "lightblue", color: "black" }}
                />
                <Chip
                  icon={<SiFlutter />}
                  label="Flutter"
                  style={{
                    backgroundColor: "#007FFF",
                    color: "white",
                  }}
                />
              </StyledTimelineChipRow>
            </StyledTimelineBody>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <StyledTimelineBody
              href="https://github.com/dangersflow/capdev-website"
              target="_blank"
              initial={{ y: "4rem", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -10, cursor: "pointer" }}
            >
              <StyledTimelineHeader>{`US Navy Project Viewer`}</StyledTimelineHeader>
              <StyledTimelineBodyText>
                {`This is an example project that I created with a partner as part of a program called X-Force. It's a CRUD application that allows the user to view and edit general ongoing projects.`}
              </StyledTimelineBodyText>
              <StyledTimelineSubtitle>{`May 2021 - August 2021`}</StyledTimelineSubtitle>
              <StyledTimelineChipRow>
                <Chip
                  label="EJS"
                  style={{ backgroundColor: "#BF225A", color: "black" }}
                />
                <Chip
                  icon={<SiJavascript />}
                  label="JavaScript"
                  style={{ backgroundColor: "yellow", color: "black" }}
                />
              </StyledTimelineChipRow>
            </StyledTimelineBody>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </StyledContentColumnTimeline>
  );
}

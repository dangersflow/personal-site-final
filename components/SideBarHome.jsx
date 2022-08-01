import { useState } from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
const { motion, AnimatePresence } = require("framer-motion");

const LinkWrapper = styled(motion.a)``;

const StyledSideBarItem = styled(motion.a)`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  width: 100%;
  height: 12%;
  cursor: pointer;
  border: none;

  :hover {
    background-color: #fcec0c;
  }

  media (min-width: 768px) {
  }
  media (min-width: 1024px) {
  }
  media (min-width: 1280px) {
  }
  media (min-width: 1600px) {
  }
  media (min-width: 1920px) {
  }
  media (min-width: 2560px) {
  }
`;

const StyledText = styled(motion.div)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  transition: all 0.1s ease-in-out;

  ${StyledSideBarItem}:hover & {
    color: black;
  }

  media (min-width: 768px) {
  }
  media (min-width: 1024px) {
  }
  media (min-width: 1280px) {
  }
  media (min-width: 1600px) {
  }
  media (min-width: 1920px) {
  }
  media (min-width: 2560px) {
  }
`;

const StyledVerticalDivider = styled(motion.div)`
  display: flex;
  position: relative;
  border-left: 1px solid #d1c5c0;
  height: 15px;
  transform: rotate(45deg);
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  transition: all 0.2s ease-in-out;

  ${StyledSideBarItem}:hover & {
    border-left: 1px solid black;
    height: 45px;
  }
`;

const StyledCharacter = styled(motion.span)`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 3rem;
  height: 50%;
  align-items: center;
  justify-content: center;
  font-family: "Asher", sans-serif;
`;

export default function SideBarHome(props) {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const handleHoverEnter = () => {
    setIsHovering(true);
  };

  const handleHoverLeave = () => {
    setIsHovering(false);
  };

  const handleClickDown = () => {
    setIsClicked(true);
  };

  const handleClickUp = () => {
    setIsClicked(false);
  };

  return (
    <>
      <AnimatePresence initial={false}>
        <StyledSideBarItem
          onHoverStart={handleHoverEnter}
          onHoverEnd={handleHoverLeave}
          onMouseDown={handleClickDown}
          onMouseUp={handleClickUp}
          href="/"
        >
          <StyledCharacter
            animate={{
              x: isClicked ? (isHovering ? 0 : 0) : isHovering ? "-100%" : 0,
              y: isClicked ? (isHovering ? 0 : 0) : isHovering ? "10%" : 0,
              fontSize: isHovering ? (isClicked ? "3rem" : "4rem") : "3rem",
            }}
            style={{
              fontSize: "3rem",
              color: isHovering ? "black" : "white",
            }}
          >
            H
          </StyledCharacter>
          <StyledCharacter
            animate={{
              x: isClicked ? (isHovering ? 0 : 0) : isHovering ? 0 : 0,
              y: isClicked ? (isHovering ? 0 : 0) : isHovering ? "-50%" : 0,
              fontSize: isHovering ? (isClicked ? "3rem" : "2.5rem") : "3rem",
            }}
            style={{
              fontSize: "3rem",
              color: isHovering ? "black" : "white",
            }}
          >
            O
          </StyledCharacter>
          <StyledCharacter
            animate={{
              x: isClicked ? (isHovering ? 0 : 0) : isHovering ? "50%" : 0,
              y: isClicked ? (isHovering ? 0 : 0) : isHovering ? "70%" : 0,
            }}
            style={{
              fontSize: "3rem",
              color: isHovering ? "black" : "white",
            }}
          >
            M
          </StyledCharacter>
          <StyledCharacter
            animate={{
              x: isClicked ? (isHovering ? 0 : 0) : isHovering ? "100%" : 0,
              y: isClicked ? (isHovering ? 0 : 0) : isHovering ? "-30%" : 0,
              fontSize: isHovering ? (isClicked ? "3rem" : "4rem") : "3rem",
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
            style={{
              fontSize: "3rem",
              color: isHovering ? "black" : "white",
            }}
          >
            E
          </StyledCharacter>
        </StyledSideBarItem>
      </AnimatePresence>
    </>
  );
}

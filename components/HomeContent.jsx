import styled from "@emotion/styled";
const { motion } = require("framer-motion");
import Image from "next/image";
import line from "../public/Line.png";

const StyledContentColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 5rem;
    z-index: 1;

    max-width: 150rem;
}`;

const StyledImageWrapper = styled(motion.div)`
  position: absolute;
  top: -20px;
  left: -20px;
`;

const StyledBodyLineLeft = styled(Image)`
  position: relative;
`;

const StyledHeader = styled(motion.div)`
    font-size: 5rem;
    padding-bottom: 5rem;
    font-family: "RNSReg", sans-serif;
    color: white;

    @media (max-width: 767px) {
      font-size: 2.5rem;
    }
    @media (min-width: 768px) {
      font-size: 2.5rem;  
    }
    @media (min-width: 1024px) {
      font-size: 3rem;
    }
    @media (min-width: 1600px) {
      font-size: 4rem;
    }
    @media (min-width: 2225px) {
      font-size: 5rem;
    }
}`;

const StyledBodyRight = styled(motion.div)`
    font-size: 1rem;
    font-family: "RNSLight", sans-serif;
    color: white;
    margin-left: 0rem;
    padding: 0rem
    padding-bottom: 3rem;

    @media (min-width: 767px) {
      padding: 0rem;
      padding-bottom: 3rem;
      font-size: 1rem;
      margin-left: 0rem;
    }
    @media (min-width: 768px) {
      padding: 4rem;
      padding-bottom: 0rem;
      margin-left: 50%;
      font-size: 1.5rem;
    }
    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
    @media (min-width: 1600px) {
      font-size: 2rem;
    }
    @media (min-width: 1920px) {
    }
    @media (min-width: 2560px) {
    }
}`;

const StyledBodyLeft = styled(motion.div)`
    font-size: 2rem;
    font-family: "RNSLight", sans-serif;
    color: white;
    margin-right: 50%;
    padding: 4rem;
    position: relative;

    @media (max-width: 767px) {
      padding: 0rem;
      padding-bottom: 3rem;
      font-size: 1rem;
      margin-right: 0rem;
    }
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
    @media (min-width: 1600px) {
      font-size: 2rem;
    }
    @media (min-width: 1920px) {
    }
    @media (min-width: 2560px) {
    }
}`;

export default function HomeContent() {
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
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
        nisi eu consectetur consectetur, nisl nisl consectetur nisl, euismod
        consectetur nisl nisl euismod nisl. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam euismod, nisi eu consectetur
        consectetur, nisl nisl consectetur nisl, euismod consectetur nisl nisl
        euismod nisl.
      </StyledBodyLeft>
      <StyledBodyRight
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
        nisi eu consectetur consectetur, nisl nisl consectetur nisl, euismod
        consectetur nisl nisl euismod nisl. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam euismod, nisi eu consectetur
        consectetur, nisl nisl consectetur nisl, euismod consectetur nisl nisl
        euismod nisl.
      </StyledBodyRight>
      <StyledBodyLeft
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
        nisi eu consectetur consectetur, nisl nisl consectetur nisl, euismod
        consectetur nisl nisl euismod nisl. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam euismod, nisi eu consectetur
        consectetur, nisl nisl consectetur nisl, euismod consectetur nisl nisl
        euismod nisl.
      </StyledBodyLeft>
      <StyledBodyLeft
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
        nisi eu consectetur consectetur, nisl nisl consectetur nisl, euismod
        consectetur nisl nisl euismod nisl. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam euismod, nisi eu consectetur
        consectetur, nisl nisl consectetur nisl, euismod consectetur nisl nisl
        euismod nisl.
      </StyledBodyLeft>
      <StyledBodyRight
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
        nisi eu consectetur consectetur, nisl nisl consectetur nisl, euismod
        consectetur nisl nisl euismod nisl. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam euismod, nisi eu consectetur
        consectetur, nisl nisl consectetur nisl, euismod consectetur nisl nisl
        euismod nisl.
      </StyledBodyRight>
    </StyledContentColumn>
  );
}

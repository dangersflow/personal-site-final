import styled from "@emotion/styled";
const { motion } = require("framer-motion");
import Image from "next/image";

import {
  StyledHeader,
  StyledBodyLeft,
  StyledBodyRight,
  StyledContentColumn,
  StyledBodyCenter,
} from "../MainStyledComponents";

const StyledImageWrapper = styled(motion.div)`
  position: absolute;
  top: -20px;
  left: -20px;
`;

const StyledBodyLineLeft = styled(Image)`
  position: relative;
`;

export default function HomeContent() {
  return (
    <StyledContentColumn>
      <StyledHeader
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        FRANCISCO GONZALEZ
      </StyledHeader>
      <StyledBodyCenter
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
        nisi eu consectetur consectetur, nisl nisl consectetur nisl, euismod
        consectetur nisl nisl euismod nisl. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam euismod, nisi eu consectetur
        consectetur, nisl nisl consectetur nisl, euismod consectetur nisl nisl
        euismod nisl.
      </StyledBodyCenter>
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

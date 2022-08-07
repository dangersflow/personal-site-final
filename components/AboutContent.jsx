import styled from "@emotion/styled";
const { motion } = require("framer-motion");
import {
  StyledHeader,
  StyledBodyLeft,
  StyledBodyRight,
  StyledContentColumn,
} from "./MainStyledComponents";

export default function AboutContent() {
  return (
    <StyledContentColumn>
      <StyledHeader
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        ABOUT
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

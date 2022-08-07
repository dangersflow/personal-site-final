import styled from "@emotion/styled";
const { motion } = require("framer-motion");

export const StyledContentColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 5rem;
    z-index: 1;

    max-width: 150rem;
}`;

export const StyledHeader = styled(motion.div)`
    font-size: 5rem;
    padding-bottom: 5rem;
    font-family: "RNSReg", sans-serif;
    color: white;
    text-align: center;

    @media (max-width: 767px) {
      font-size: 3rem;
    }
    @media (min-width: 768px) {
      font-size: 3rem;  
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

export const StyledBodyRight = styled(motion.div)`
    font-size: 1.5rem;
    font-family: "RNSLight", sans-serif;
    color: white;
    margin-left: 0rem;
    padding: 4rem;
    margin-bottom: 5rem;
    background-color: rgba(76, 67, 70, .25);  
    backdrop-filter: blur(15px);
    border-radius: 10px;
    border-right: 3px solid yellow;

    @media (min-width: 767px) {
      padding-bottom: 3rem;
      font-size: 1rem;
      margin-left: 0rem;
    }
    @media (min-width: 768px) {
      padding: 4rem;
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

export const StyledBodyLeft = styled(motion.div)`
    font-size: 2rem;
    font-family: "RNSLight", sans-serif;
    color: white;
    margin-right: 50%;
    padding: 4rem;
    margin-bottom: 5rem;
    position: relative;
    background-color: rgba(76, 67, 70, .25);  
    backdrop-filter: blur(15px);
    border-radius: 10px;
    border-left: 3px solid yellow;

    @media (max-width: 767px) {
      padding: 4rem;
      padding-bottom: 3rem;
      font-size: 1.5rem;
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

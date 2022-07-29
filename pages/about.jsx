import BackgroundWrapper from "../components/BackgroundWrapper";
import AboutContent from "../components/AboutContent";
import bg2 from "../public/background-final-2.png";

export default function About() {
  return (
    <>
      (
      <BackgroundWrapper bg={bg2.src}>
        <AboutContent />
      </BackgroundWrapper>
      )
    </>
  );
}

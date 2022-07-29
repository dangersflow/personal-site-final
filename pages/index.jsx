import HomeContent from "../components/HomeContent";
import BackgroundWrapper from "../components/BackgroundWrapper";
import bg from "../public/background-final.png";

export default function Home() {
  return (
    <>
      (
      <BackgroundWrapper bg={bg.src}>
        <HomeContent />
      </BackgroundWrapper>
      )
    </>
  );
}

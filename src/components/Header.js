import styled from "styled-components";
import Hero from "./Hero";
import HeroContent from "./HeroContent";

function Header() {
  return (
    <StyledContainer>
      <Hero />
      <HeroContent />
    </StyledContainer>
  );
}

export default Header;

const StyledContainer = styled.div``;

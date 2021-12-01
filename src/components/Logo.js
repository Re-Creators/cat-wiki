import { Link } from "react-router-dom";
import styled from "styled-components";

function Logo() {
  return (
    <StyledContainer>
      <Link to="/">
        <img src="/images/CatwikiLogo.svg" alt="Catwiki Logo" />
      </Link>
    </StyledContainer>
  );
}

export default Logo;

const StyledContainer = styled.div`
  display: flex;
`;

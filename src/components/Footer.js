import styled from "styled-components";

function Footer() {
  return (
    <StyledContainer>
      <img src="/images/CatwikiLogo-white.svg" alt="" />
      <div>
        © created by <span>Re-Creators</span> - devChallenge.io 2021
      </div>
    </StyledContainer>
  );
}

export default Footer;

const StyledContainer = styled.footer`
  border-radius: 42px 42px 0 0;
  margin-top: 52px;
  width: 100%;
  padding: 12px 24px;
  background-color: #000000;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1400px) {
    padding: 4rem 5rem 0 5rem;
    flex-direction: row;
    padding: 24px 32px;
  }
`;

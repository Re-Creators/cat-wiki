import styled from "styled-components";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";

function Home() {
  return (
    <Container>
      <Header />
      <HomeContent />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

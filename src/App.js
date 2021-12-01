import styled from "styled-components";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BreedInfo from "./pages/BreedInfo";
import MostSearched from "./pages/MostSearched";

function App() {
  return (
    <StyledContainer>
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breed/:id" element={<BreedInfo />} />
          <Route path="/most-searched" element={<MostSearched />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </StyledContainer>
  );
}

export default App;

const StyledContainer = styled.div`
  padding: 1rem 1rem 0 1rem;

  @media (min-width: 1400px) {
    padding: 3rem 5rem 0 5rem;
  }
`;

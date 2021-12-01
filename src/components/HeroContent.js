import styled from "styled-components";
import Card from "./Card";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
function HeroContent() {
  const { data: popularBreeds } = useFetch("/popular", []);

  return (
    <StyledContainer>
      <h4>Most Searched Breads</h4>
      <div>
        <StyledDiscover>
          <h1>66+ Breads for you to discover</h1>
          <Link to="/most-searched" className="see-more">
            <span>SEE MORE</span>
            <img src="/icons/arrow.svg" alt="" className="icon" />
          </Link>
        </StyledDiscover>
        <StyledCardContainer>
          {popularBreeds.map(
            (popular, index) =>
              index < 4 && (
                <Link to={`/breed/${popular.id}`} key={popular.id}>
                  <Card image={popular.image} breed={popular.name} />
                </Link>
              )
          )}
        </StyledCardContainer>
      </div>
    </StyledContainer>
  );
}

export default HeroContent;

const StyledContainer = styled.div`
  position: relative;
  padding: 2rem;
  width: 100%;
  background-color: #e3e1dc;
  border-radius: 0 0 24px 24px;

  @media (min-width: 1200px) {
    padding: 2.5rem 4rem 4rem;
  }

  h4 {
    position: relative;

    &::before {
      position: absolute;
      content: "";
      left: 0;
      bottom: -10px;
      width: 80px;
      height: 4px;
      background-color: #4d270c;
    }
  }
`;

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  a {
    width: 45%;

    @media (min-width: 768px) {
      width: 20%;
    }
  }
`;

const StyledDiscover = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;

  h1 {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    margin: 3rem 0;
    flex-direction: row;

    h1 {
      max-width: 35%;
      font-size: 2.5rem;
    }
  }

  .see-more {
    display: flex;
    align-items: center;
    color: rgba(41, 21, 7, 0.6);

    .icon {
      animation: 500ms infinite alternate move;
      animation-play-state: paused;
    }

    &:hover {
      color: rgba(41, 21, 7, 1);
      .icon {
        animation-play-state: running;
      }
    }
  }
`;

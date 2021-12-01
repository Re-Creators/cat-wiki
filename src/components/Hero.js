import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
function Hero() {
  const { data } = useFetch("/breeds", []);
  const optionEl = useRef();
  const inputEl = useRef();

  const [breeds, setBreeds] = useState([]);
  const [showOption, setShowOption] = useState(false);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    function filterBread(oldVal) {
      if (keyword === "") return data;

      return data.filter((item) => {
        return item.name.toLowerCase().includes(keyword.toLowerCase());
      });
    }

    setBreeds(filterBread);
  }, [data, keyword]);

  useEffect(() => {
    window.addEventListener("click", handleClickOutside, true);

    return () => {
      window.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (
      optionEl.current &&
      !optionEl.current.contains(e.target) &&
      document.activeElement !== inputEl.current
    ) {
      setShowOption(false);
    }
  };
  return (
    <StyledHero>
      <StyledHeroContent>
        <img src="/images/CatwikiLogo-white.svg" alt="" />
        <p>Get to know more about your cat breed</p>
        <StyledSearch>
          <input
            ref={inputEl}
            type="text"
            placeholder="Enter your breed"
            onFocus={() => setShowOption(true)}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <img src="/icons/search-icon.svg" alt="" />

          {showOption && (
            <StyledOption ref={optionEl}>
              {breeds.map((breed) => (
                <Link to={`/breed/${breed.id}`} key={breed.id}>
                  <div>{breed.name}</div>
                </Link>
              ))}
            </StyledOption>
          )}
        </StyledSearch>
      </StyledHeroContent>
    </StyledHero>
  );
}

export default Hero;

const StyledHero = styled.div`
  width: 100%;
  background-image: url("/images/HeroImagelg.png");
  background-position: center;
  background-size: cover;
  border-radius: 24px 24px 0 0;
  padding: 2rem;
  height: 300px;
  @media (min-width: 768px) {
    height: 400px;
    padding: 4rem;
  }
`;

const StyledHeroContent = styled.div`
  color: white;

  @media (min-width: 768px) {
    width: 25%;

    img {
      width: 250px;
    }

    p {
      max-width: 230px;
    }
  }
`;

const StyledSearch = styled.div`
  margin-top: 42px;
  position: relative;

  input {
    padding: 16px;
    padding-right: 48px;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 16px;
  }

  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
    width: 24px;
    height: 24px;
  }
`;

const StyledOption = styled.div`
  position: absolute;
  z-index: 10;
  bottom: -210px;
  left: 0;
  right: 0;
  height: 200px;
  background-color: white;
  border-radius: 14px;
  color: black;
  padding: 0.5rem;
  overflow-y: auto;

  div {
    padding: 8px 16px;
    margin-bottom: 4px;
    border-radius: 12px;
    cursor: pointer;

    &:hover {
      background-color: #ccc;
    }
  }
`;

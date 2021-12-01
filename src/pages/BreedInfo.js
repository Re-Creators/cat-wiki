import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ImageRenderer from "../components/ImageRenderer";

function BreedInfo() {
  const { id } = useParams();
  const { data: breedInfo } = useFetch(`/breed/${id}`, null);
  const { data: breedPhotos } = useFetch(`/photos/${id}`, []);
  const detailLists = [
    "adaptability",
    "affection_level",
    "child_friendly",
    "grooming",
    "intelligence",
    "health_issues",
    "social_needs",
    "stranger_friendly",
  ];

  function levelElement(activeCount) {
    let element = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= activeCount) {
        element.push(
          <div style={{ backgroundColor: "#544439" }} key={i}></div>
        );
        continue;
      }

      element.push(<div></div>);
    }
    return element;
  }

  return (
    <StyledContainer>
      {breedInfo ? (
        <StyledBreedContainer>
          <div className="img-container">
            <img src={breedInfo.url} alt="" />
          </div>
          <StyledBreedDetail>
            <div>
              <h1>{breedInfo.breeds[0].name}</h1>
              <p>{breedInfo.breeds[0].description}</p>
              <ul>
                <li>
                  <span>Temperament</span>: {breedInfo.breeds[0].temperament}
                </li>
                <li>
                  <span>Origin</span>: {breedInfo.breeds[0].origin}
                </li>
                <li>
                  <span>Life Span</span>: {breedInfo.breeds[0].life_span} years
                </li>
              </ul>
            </div>
            <StyledDetailLevel>
              {detailLists.map((detail, index) => (
                <div className="level__wrapper" key={index}>
                  <span>{detail.replace("_", " ")}</span>
                  <div className="level__count">
                    {levelElement(breedInfo.breeds[0][detail])}
                  </div>
                </div>
              ))}
            </StyledDetailLevel>
          </StyledBreedDetail>
        </StyledBreedContainer>
      ) : (
        <Loading />
      )}

      {breedPhotos && (
        <StyledOtherPhotos>
          <h2>Other photos</h2>
          <div className="photos__container">
            {breedPhotos.map((photo) => (
              <div key={photo.id}>
                <ImageRenderer url={photo.url} />
              </div>
            ))}
          </div>
        </StyledOtherPhotos>
      )}
    </StyledContainer>
  );
}

export default BreedInfo;

const StyledBreedContainer = styled.div`
  display: flex;
  flex-direction: column;
  paddin: 2rem 2rem 0px 2rem;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  .img-container {
    width: 90%;
    height: 270px;
    margin: 0 auto;
    border-radius: 16px;
    position: relative;
    align-self: self-start;

    @media (min-width: 768px) {
      width: 40%;
      height: 370px;
      margin-left: 2rem;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
    }

    &::before {
      content: "";
      position: absolute;
      width: 32px;
      top: 20px;
      bottom: 20px;
      left: -12px;
      background-color: #dec68b;
      z-index: -1;
      border-radius: 14px;
    }
  }
`;
const StyledContainer = styled.div`
  padding: 0.6rem 1rem 0px 0.6rem;
`;

const StyledBreedDetail = styled.div`
  width: 100%;
  margin-top: 1rem;

  @media (min-width: 768px) {
    width: 50%;
  }
  ul {
    list-style: none;
    padding-left: 0;
    line-height: 1.8;
    span {
      font-weight: bold;
    }
  }
`;
const StyledDetailLevel = styled.div`
  .level__wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;

    span {
      text-transform: capitalize;
      font-weight: bold;
      width: 200px;
    }

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  .level__count {
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (min-width: 768px) {
      padding: 0 20px;
    }
    div {
      margin-top: 10px;
      width: 18%;
      height: 8px;
      border-radius: 6px;
      background-color: #e0e0e0;
    }
  }
`;

const StyledOtherPhotos = styled.div`
  margin-top: 1rem;

  .photos__container {
    margin-top: 1rem;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;

    div {
      cursor: pointer;
      width: 44%;
      height: 178px;

      @media (min-width: 768px) {
        width: 23%;
        height: 278px;
      }
    }
  }
`;

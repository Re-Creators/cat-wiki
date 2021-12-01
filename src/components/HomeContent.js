import styled from "styled-components";
function HomeContent() {
  return (
    <StyledContainer>
      <StyledContent>
        <h1>Why should you have a cat?</h1>
        <p>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <button>
          <span>READ MORE</span>
          <img src="/icons/arrow.svg" alt="" className="icon" />
        </button>
      </StyledContent>
      <StyledSeamlessPhoto>
        <StyledPhoto1>
          <div>
            <img src="/images/image2.png" alt="" className="ratio-img" />
          </div>
          <div>
            <img src="/images/image1.png" alt="" className="ratio-img" />
          </div>
        </StyledPhoto1>
        <StyledPhoto2>
          <div>
            <img src="/images/image3.png" alt="" className="ratio-img" />
          </div>
        </StyledPhoto2>
      </StyledSeamlessPhoto>
    </StyledContainer>
  );
}

export default HomeContent;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (min-width: 800px) {
    padding: 65px 0px 42px 42px;
    flex-direction: row;
  }
`;

const StyledContent = styled.div`
  width:100%;
  margin-top: 100px;

  h1 {
    position: relative;
    font-size: 48px;
    font-weight: 700;
    margin-bottom:2rem;

    &::before {
        position: absolute;
        content: "";
        left: 0;
        top: -10px;
        width: 80px;
        height: 4px;
        background-color: black;
      }
    }
  }

  button {
      color:rgba(41, 21, 7, 0.6);
      background:none;
      border:none;
      cursor:pointer;
      display:flex;
      align-items:center;

      &:hover {
        color:rgba(41, 21, 7, 1);
        
        .icon {
          animation-play-state: running;
        }
      }

      .icon {
        animation: 500ms infinite alternate move;
        animation-play-state: paused;
      }
  }

  @media (min-width: 1400px) {
    padding-left:80px;
    width: 50%;
    padding: 68px 0px 42px 42px;

    p {
      width:70%;
    }

    h1 {
      width: 70%;
    }

    button {
      margin-top:48px;
    }

  }
`;

const StyledSeamlessPhoto = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  margin-top: 2rem;

  @media (min-width: 1400px) {
    width: 50%;
  }
`;

const StyledPhoto1 = styled.div`
  margin-right: 20px;
  width: 50%;

  div:nth-child(1) {
    width: 100%;
  }

  div:nth-child(2) {
    width: 80%;
    max-width: 195px;
    margin-top: 10px;
    margin-left: auto;
  }
`;

const StyledPhoto2 = styled.div`
  width: 50%;
  div {
    width: 100%;
    max-width: 238px;
  }
`;

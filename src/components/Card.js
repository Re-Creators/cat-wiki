import styled from "styled-components";
import ImageRenderer from "./ImageRenderer";
function Card({ breed, image }) {
  return (
    <CardContainer>
      <StyleImgContainer>
        <ImageRenderer url={image} width="30%" height="220px" />
      </StyleImgContainer>
      <span>{breed}</span>
    </CardContainer>
  );
}

export default Card;
const CardContainer = styled.div`
  width: 100%;
  span {
    color: #291507;
    font-weight: 600;
  }
`;

const StyleImgContainer = styled.div`
  width: 100%;
  height: 135px;
  position: relative;
  cursor: pointer;
  transition: 250ms all ease;
  margin: 0 28px 16px 0;

  @media (min-width: 1200px) {
    height: 220px;
  }

  &::before {
    content: "";
    position: absolute;
    width: 32px;
    top: 20px;
    bottom: 20px;
    left: 50%;
    background-color: #dec68b;
    z-index: -1;
    border-radius: 14px;
    transition: 250ms all ease;
    opacity: 0;
  }

  &:hover {
    transform: scale(1.02);
    &::before {
      opacity: 1;
      left: -15px;
    }
  }
`;

import { useRef, useState } from "react";
import styled from "styled-components";
import useIntersection from "../hooks/useIntersection";

function ImageRenderer({ url }) {
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useIntersection(imgRef, () => {
    setIsInView(true);
  });
  return (
    <StyledContainer ref={imgRef}>
      {isInView && <img src={url} alt="" />}
    </StyledContainer>
  );
}

export default ImageRenderer;

const StyledContainer = styled.div`
  background-color: #ccc;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  min-width: 100%;
  height: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    z-index: 2;
  }
`;

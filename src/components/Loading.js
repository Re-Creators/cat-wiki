import styled from "styled-components";
import ReactDOM from "react-dom";
function Loading() {
  return ReactDOM.createPortal(
    <Container>
      <StyledLoading>
        <div></div>
      </StyledLoading>
    </Container>,
    document.body
  );
}

export default Loading;
const Container = styled.div`
  inset: 0;
  height: 100%;
  position: fixed;
  z-index: 99;
  background: white;
`;
const StyledLoading = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 50px;
    height: 50px;
    border: 5px solid #63aed9;
    border-top-color: transparent;
    border-radius: 50%;
    animation: ldio-mh3zcws7mp 1s linear infinite;
  }

  @keyframes ldio-mh3zcws7mp {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

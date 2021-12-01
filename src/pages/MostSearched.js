import { Link } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";

function MostSearched() {
  const { data: mostSearched, loading } = useFetch("/popular", []);

  return (
    <StyledContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1>Top 10 most searched breeds</h1>
          <StyledListContainer>
            {mostSearched.map((item, index) => (
              <div className="list-item" key={item.id}>
                <div className="img-container">
                  <img src={item.image} alt={item.name} className="cover-img" />
                </div>
                <div>
                  <Link to={`/breed/${item.id}`}>
                    <h2>
                      {index + 1}. {item.name}
                    </h2>
                  </Link>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </StyledListContainer>
        </>
      )}
    </StyledContainer>
  );
}

export default MostSearched;

const StyledContainer = styled.div`
  h1 {
    margin-top: 24px;
  }
`;

const StyledListContainer = styled.div`
  margin-top: 52px;

  .list-item {
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    gap: 48px;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    .img-container {
      width: 80%;
      height: 278px;
      margin: 0px auto;
      border-radius: 24px;

      @media (min-width: 768px) {
        width: 178px;
        margin: 0;

        min-width: 178px;
        height: 178px;
      }

      img {
        border-radius: 24px;
      }
    }
  }
`;

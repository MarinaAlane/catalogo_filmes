import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

export const MovieItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MovieImage = styled.img`
  width: 20%;
  border-radius: 8px;
`;

export const MovieTitle = styled.h3`
  margin-top: 10px;
`;

export const ButtonBack = styled.button`
    background-color: transparent;
    font-weight: bold;
    padding: 10px 0;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid #FF503B;
    width: 20%;
    margin-top: 20px;

    &:hover {
      color:rgb(169, 169, 169);
    }
`;
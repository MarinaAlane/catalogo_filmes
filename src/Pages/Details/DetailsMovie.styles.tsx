import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const Title = styled.h1`
  margin: 20px 0;
  text-align: center;
`;

export const ImageStyled = styled.img`
  border-radius: 8px;
  max-height: 400px;
  max-width: 300px;
  margin: 20px 0;
`;

export const TextWrapper = styled.div`
  width: 40%;
  font-size: 18px;

  p {
    font-weight: bold;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
  }
`;

export const ImageWrapper = styled.div`
  justify-content: center;
  position: relative;
`;

export const FavoriteIcon = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin: 20px;
  position: absolute;
  bottom: 10px; 
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
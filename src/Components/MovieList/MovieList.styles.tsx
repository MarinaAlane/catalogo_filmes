import styled from "styled-components";

import { ScrollButtonProps } from "./MovieList.interfaces";

export const ContainerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const ContainerList = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  white-space: nowrap;
  padding: 10px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  cursor: grab;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ScrollButton = styled.button<ScrollButtonProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  font-size: 18px;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  ${({ direction }) => (direction === "left" ? "left: 10px;" : "right: 10px;")}
`;

export const TitleList = styled.div`
  padding: 10px;
  color: #FFFCF9;
  font-weight: 700;
  font-size: 34px;
`;

export const ImageStyled = styled.img`
  max-height: 200px;
  border-radius: 8px;
  margin-right: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

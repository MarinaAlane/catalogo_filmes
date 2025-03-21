import styled from "styled-components";

export const ContainerList = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  padding: 10px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  cursor: grab;
  scroll-behavior: smooth; /* Rola suavemente */

    &.active {
    cursor: grabbing;
  }

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
`;

export const TitleList = styled.div`
  padding: 10px;
  color: #FFFCF9;
  font-weight: 700;
  font-size: 34px;
`;
export const ScrollButton = styled.button`
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

  ${({ direction }) => (direction === "left" ? "left: 0;" : "right: 0;")}
`;

export const ContainerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
`;

export const ProductWrapper = styled.div`
  max-width: 58.625rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 770px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

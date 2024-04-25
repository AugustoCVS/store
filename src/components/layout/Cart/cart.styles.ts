import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled(motion.div)(
  ({ theme }) => css`
    width: 30.375rem;
    height: 100vh;
    right: 0;
    top: 0;
    position: fixed;
    background-color: ${theme.blue};
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `
);

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  gap: 2rem;
  overflow-y: auto;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  overflow-y: auto;
`;

export const CtaWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
`;

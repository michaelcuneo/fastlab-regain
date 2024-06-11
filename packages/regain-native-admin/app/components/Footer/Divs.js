import styled from 'styled-components';

export const FooterDiv = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  align-items: center;
  width: 100vw;
  height: 4vh;
  justify-content: center;
  user-select: none;
  user-drag: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  font-family: brother-1816, sans-serif;
  font-weight: 200;
  font-size: 1vh;
  color: rgba(255, 255, 255, 0.5);
  background: rgba(19, 20, 22);
  text-transform: uppercase;
  z-index: 999;
`;

import styled, { keyframes } from 'styled-components';

const runningProgressBar = keyframes`
  0% {
    margin-left: 0px;
    margin-right: 100%;
  }
  50% {
    margin-left: 25%;
    margin-right: 0%;
  }
  100% {
    margin-left: 100%;
    margin-right: 0;
  }
`;

export const Line = styled.div`
  background-color: ${props => props.color};
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  z-index: 5;
  height: 4px;
  width: 100%;
  margin: 0;

  &:before {
    height: 4px;
    width: 100%;
    margin: 0;
    background-color: #ff9800;
    content: '';
    animation: ${runningProgressBar} 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;

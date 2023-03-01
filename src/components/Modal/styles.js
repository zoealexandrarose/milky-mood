import styled from 'styled-components'

export const Modal = styled.div`
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  animation: glow 1s forwards;
  background: #FBFBFB;
  box-sizing: border-box;
  padding: 60px;
  max-width: 800px;
  width: calc(100vw - 60px);
  z-index: 3;

  @media (max-width: 700px) {
    padding: 30px;
    width: calc(100vw - 30px);
}
`

export const BG = styled.div`
  background: rgba(0,0,0,0.5);
  cursor: pointer;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 2;
`

export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 30px;
  width: 30px;
  padding: 0;
  position: absolute;
  right: 60px;
  top: 60px;

  &::before,
  &::after {
    background: #0519CE;
    content: "";
    position: absolute;
    height: 33px;
    width: 2px;
    left: 15px;
    top: 0;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  @media (max-width: 700px) {
    right: 30px;
    top: 30px;
  }
`

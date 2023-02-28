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
width: calc(100vw - 60px)
`

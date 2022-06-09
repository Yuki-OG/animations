import { keyframes } from 'styled-components';

const X_Axis = keyframes`
  50% {
    left: calc(100% - 50px);
  }
  `

  const Y_Axis = keyframes`
  50% {
    top: calc(100% - 50px);
  }
  `

export { X_Axis, Y_Axis };
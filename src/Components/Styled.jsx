import { keyframes } from 'styled-components';

const X_Axis = keyframes`
0% {
  transform: translateX(0px);
}
25% {
  timing-function: ease-in;
  transform: translateX(250px);
}
50% {
  timing-function: linear;
  transform: translateX(500px);
}
75% {
  timing-function: ease-in;
  transform: translateX(250px);

}
100% {
  timing-function: ease-out;
  transform: translateX(0px);
}

`

  const Y_Axis = keyframes`
  0% {
    transform: translateY(250px);
  }
  25% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(250px);
  }
  75% {
    transform: translateY(500px)
  }
  100% {
    transform: translateY(250px);
  }
  `

export { X_Axis, Y_Axis };
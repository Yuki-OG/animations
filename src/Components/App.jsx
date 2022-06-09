import React from 'react';
import styled, { keyframes } from 'styled-components';
import { X_Axis, Y_Axis } from './Styled.jsx';

const Container = styled.div`
  display: flex;
  justify-items: center;
  background-color: #E7E7E7;
  width: 50vw;
  height: 50vh;
  position: relative;
`

// animation-name: ${X_Axis};
// animation-duration: 6s;
// animation-iteration-count: infinite;
// animation-timing-function: linear;

const axisSlide = keyframes`
  50% {
    top: 100%;
  }
`

// animation: ${axisSlide} 6s infinite linear;
// animation-name: ${axisSlide};
// animation-duration: 6s;
// animation-iteration-count: infinite;
// animation-timing-function: linear;
const Child = styled.div`
position: absolute;
top: 0;
left: 0;

&::after {
  content: "";
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: lightgreen;
  position: absolute;
  top: 0;
  left: 0;
}
`


const App = function(props) {
  return (
    <Container>
      <Child className='child' />
    </Container>
  )
}

export default App;
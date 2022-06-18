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
const Child = styled.div`
position: absolute;
animation: ${X_Axis} 5s infinite ease-in;

&::after {
  content: "";
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: lightgreen;
  position: absolute;
  animation: ${Y_Axis} 5s infinite linear;
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
import React from 'react';
import ErrorBoundary from '../../containers/ErrorBoundary';
import applyStyles from '../../hoc/applyStyles';
import Bye from './Bye';
import Calculator from './Calculator';
import Hello from './Hello';

const StyledHello = applyStyles(Hello); // applyStyles is HOC
const StyledBye = applyStyles(Bye); // applyStyles is HOC

// This example also includes Error Boundary

const HocDemo = () => {
  return (
    <div>
      <h1>HOC Demo</h1>
      <StyledHello name="John"/>
      <hr/>
      
      <StyledBye/>
      <hr/>

      <ErrorBoundary>
        <Calculator />
      </ErrorBoundary>


    </div>
  )
}

export default HocDemo
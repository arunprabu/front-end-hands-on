import { render, screen } from '@testing-library/react';
import App from './App'; // The comp taken for testing

// test suite  -- group of related test cases
describe('App Component',  () => {

  // test case
  it('renders welcome to unit testing text', () => {
    render(<App />); // rendering the app comp using testing library
    const welcomeElement = screen.getByText(/Welcome to Unit Testing!/i);
    // expect is from jest. 
    // toBeInTheDocument is also from jest - it is called as matcher
    expect(welcomeElement).toBeInTheDocument();
  });

  // test case
  it('renders app component', () => {
    expect(App).toBeTruthy();
  });

})




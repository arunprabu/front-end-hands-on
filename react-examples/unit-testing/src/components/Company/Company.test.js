import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import React from 'react'; // needed
import ReactDOM from 'react-dom'; // needed -- will use it to render the comp
import renderer from 'react-test-renderer';

import Company from "./Company";

afterEach(cleanup);

// test suite
describe('Company Component', () => {
  // test case #1
  it('renders the comp properly', () => {
    const divEl = document.createElement('div'); 
    ReactDOM.render(<Company />, divEl);
  });

  // test case #2 
  it('should have official company page as text', () => {
    render(<Company />);
    const officialTxtEl =screen.getByText('Welcome to My Company\'s Official Webpage');
    expect(officialTxtEl).toBeInTheDocument();
  });

  // test case #3 
  it('should have an input with Company Name as placeholder', ()=>{
    render(<Company />);
    const placeHolderText = screen.queryByPlaceholderText('Company Name');
    // if the placeholder is not matching, this will fail
    expect(placeHolderText).toBeTruthy();
  });

  // test case #4
  it('should display props correctly', () => {
    // passing prop to company compo
    render(<Company companyName='Twitter Inc.' />); 
    // locating an element with data-testid attribute with value companyNameEl
    const companyNameEl =  screen.getByTestId('companyNameEl'); 
    // checking if props received correctly
    expect(companyNameEl).toHaveTextContent('Twitter Inc.');
  });

  // let's check if the input element works well with onChange event
  it('should update on onChange event in company input', () => {
    // taking up the comp testing
    render(<Company />);
    // finding the element with test id companyNameInput
    const favCompanyNameInput = screen.getByTestId('favCompanyNameInput');
    // now checking if onChange is working or not
    // mock fire change event with the value
    fireEvent.change(favCompanyNameInput, {target: {value: 'test123'}});
    // finally checking if the input element is showing the right update
    expect(favCompanyNameInput.value).toBe('test123');
  });

  // snapshot testing
  it('should have right company comp snapshot', () => {
    const tree = renderer.create(<Company companyName='Twitter Inc.'/>).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
  })
})
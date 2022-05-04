import React from 'react';
import Account from './Account';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Account Component', () => {

  it('should have main tag', () => {
    // shallow will test the parent comp. not the child comp
    const wrapper = shallow(<Account />);

    // let's use jest's matchers 
    expect(wrapper.find('main')).toHaveLength(1);
  });

  it('should have h2 with My Account text', () => {
    const wrapper = shallow(<Account />);
    expect(wrapper.find('main h2').children().contains('My Account')).toEqual(true);
    // expect(wrapper.contains(<main>
    //                           <h2>My Account</h2>
    //                         </header>)).toEqual(true);

  });

})
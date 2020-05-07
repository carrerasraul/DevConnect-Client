import React from 'react';
import { shallow, mount } from 'enzyme';

import { Navbar } from './Navbar';

describe('<Navbar />', () => {
  it('Renders without crashing', () => {
    shallow(<Navbar />);
  });
});

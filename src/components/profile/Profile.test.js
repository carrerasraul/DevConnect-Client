import React from 'react';
import { shallow, mount } from 'enzyme';

import { Profile } from './Profile';

describe('<Profile />', () => {
  it('Renders without crashing', () => {
    shallow(<Profile />);
  });
});

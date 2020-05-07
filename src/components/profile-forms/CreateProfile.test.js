import React from 'react';
import { shallow, mount } from 'enzyme';

import { CreateProfile } from './CreateProfile';

describe('<CreateProfile />', () => {
  it('Renders without crashing', () => {
    shallow(<CreateProfile />);
  });
});

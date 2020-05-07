import React from 'react';
import { shallow, mount } from 'enzyme';

import { Profiles } from './Profiles';

describe('<Profiles />', () => {
  it('Renders without crashing', () => {
    shallow(<Profiles />);
  });
});

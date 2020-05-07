import React from 'react';
import { shallow, mount } from 'enzyme';

import { Experience } from './Experience';

describe('<Experience />', () => {
  it('Renders without crashing', () => {
    shallow(<Experience />);
  });
});

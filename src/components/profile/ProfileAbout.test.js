import React from 'react';
import { shallow, mount } from 'enzyme';

import { ProfileAbout } from './ProfileAbout';

describe('<ProfileAbout />', () => {
  it('Renders without crashing', () => {
    shallow(<ProfileAbout />);
  });
});

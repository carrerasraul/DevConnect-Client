import React from 'react';
import { shallow, mount } from 'enzyme';

import { ProfileGithub } from './ProfileGithub';

describe('<ProfileGithub />', () => {
  it('Renders without crashing', () => {
    shallow(<ProfileGithub />);
  });
});

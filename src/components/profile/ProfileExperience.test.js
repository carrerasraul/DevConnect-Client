import React from 'react';
import { shallow, mount } from 'enzyme';

import { ProfileExperience } from './ProfileExperience';

describe('<ProfileExperience />', () => {
  it('Renders without crashing', () => {
    shallow(<ProfileExperience />);
  });
});

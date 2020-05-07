import React from 'react';
import { shallow, mount } from 'enzyme';

import { ProfileEducation } from './ProfileEducation';

describe('<ProfileEducation />', () => {
  it('Renders without crashing', () => {
    shallow(<ProfileEducation />);
  });
});

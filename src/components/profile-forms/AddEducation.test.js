import React from 'react';
import { shallow, mount } from 'enzyme';

import { AddEducation } from './AddEducation';

describe('<AddEducation />', () => {
  it('Renders without crashing', () => {
    shallow(<AddEducation />);
  });
});

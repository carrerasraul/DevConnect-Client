import React from 'react';
import { shallow, mount } from 'enzyme';

import { ProfileTop } from './ProfileTop';

describe('<ProfileTop />', () => {
  it('Renders without crashing', () => {
    shallow(<ProfileTop />);
  });
});

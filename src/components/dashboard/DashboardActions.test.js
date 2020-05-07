import React from 'react';
import { shallow, mount } from 'enzyme';

import { DashboardActions } from './DashboardActions';

describe('<DashboardActions />', () => {
  it('Renders without crashing', () => {
    shallow(<DashboardActions />);
  });
});

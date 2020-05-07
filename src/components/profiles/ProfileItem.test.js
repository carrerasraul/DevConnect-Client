import React from 'react';
import { shallow, mount } from 'enzyme';

import { ProfileItem } from './ProfileItem';

describe('<ProfileItem />', () => {
  it('Renders without crashing', () => {
    shallow(<ProfileItem />);
  });
});

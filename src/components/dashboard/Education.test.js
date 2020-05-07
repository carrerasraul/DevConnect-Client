import React from 'react';
import { shallow, mount } from 'enzyme';

import { Education } from './Education';

describe('<Education />', () => {
  it('Renders without crashing', () => {
    shallow(<Education />);
  });
});

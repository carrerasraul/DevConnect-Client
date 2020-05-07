import React from 'react';
import { shallow, mount } from 'enzyme';

import { Post } from './Post';

describe('<Post />', () => {
  it('Renders without crashing', () => {
    shallow(<Post />);
  });
});

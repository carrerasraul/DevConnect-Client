import React from 'react';
import { shallow, mount } from 'enzyme';

import { PostItem } from './PostItem';

describe('<PostItem />', () => {
  it('Renders without crashing', () => {
    shallow(<PostItem />);
  });
});

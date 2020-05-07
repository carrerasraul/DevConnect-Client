import React from 'react';
import { shallow, mount } from 'enzyme';

import { Posts } from './Posts';

describe('<Posts />', () => {
  it('Renders without crashing', () => {
    shallow(<Posts />);
  });
});

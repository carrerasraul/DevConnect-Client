import React from 'react';
import { shallow, mount } from 'enzyme';

import { CommentItem } from './CommentItem';

describe('<CommentItem />', () => {
  it('Renders without crashing', () => {
    shallow(<CommentItem />);
  });
});

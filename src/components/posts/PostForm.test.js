import React from 'react';
import { shallow, mount } from 'enzyme';

import { PostForm } from './PostForm';

describe('<PostForm />', () => {
  it('Renders without crashing', () => {
    shallow(<PostForm />);
  });
});

import React from 'react';
import { shallow, mount } from 'enzyme';

import { AddExperience } from './AddExperience';

const Wrapper = (props) => {
  return (
    <Provider>
      <Router>{props.children}</Router>
    </Provider>
  );
};

describe('<AddExperience />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <AddExpericence />
      </Wrapper>
    );
  });
});

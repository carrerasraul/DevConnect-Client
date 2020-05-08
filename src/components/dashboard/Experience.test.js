import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Experience from './Experience';

const Wrapper = (props) => {
  return (
    <Provider>
      <Router>{props.children}</Router>
    </Provider>
  );
};

describe.only('<Experience />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <Experience />
      </Wrapper>
    );
  });
});

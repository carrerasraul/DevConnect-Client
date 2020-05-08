import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Landing from './Landing';

const Wrapper = (props) => {
  return (
    <Provider>
      <Router>{props.children}</Router>
    </Provider>
  );
};

describe.only('<Landing />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <Landing />
      </Wrapper>
    );
  });
});

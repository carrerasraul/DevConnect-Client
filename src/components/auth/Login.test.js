import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Login from './Login';

const Wrapper = (props) => {
  return (
    <Provider>
      <Router>{props.children}</Router>
    </Provider>
  );
};

describe.only('<Login />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <Login />
      </Wrapper>
    );
  });
});

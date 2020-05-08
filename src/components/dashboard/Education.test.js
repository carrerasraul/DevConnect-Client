import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Education from './Education';

const Wrapper = (props) => {
  return (
    <Provider>
      <Router>{props.children}</Router>
    </Provider>
  );
};

describe.only('<Education />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <Education />
      </Wrapper>
    );
  });
});

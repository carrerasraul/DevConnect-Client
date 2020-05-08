import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import AddEducation from './AddEducation';

const Wrapper = (props) => {
  return (
    <Provider>
      <Router>{props.children}</Router>
    </Provider>
  );
};

describe.only('<AddEducation />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <AddEducation />
      </Wrapper>
    );
  });
});

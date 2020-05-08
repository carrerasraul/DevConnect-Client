import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import ProfileAbout from './ProfileAbout';

const Wrapper = (props) => {
  return (
    <Provider>
      <Router>{props.children}</Router>
    </Provider>
  );
};

describe.only('<ProfileAbout />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <ProfileAbout />
      </Wrapper>
    );
  });
});

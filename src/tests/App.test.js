import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { shallow } from 'enzyme'

describe('App', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  });
  
  it('should render', () => {
    expect(wrapper.find(App)).toBeDefined();
  });
});
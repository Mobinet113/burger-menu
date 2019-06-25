import React from 'react';
import {configure, shallow} from 'enzyme';
import {expect} from 'chai';
import Reset from './Reset';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});

let clicks = 0;

// Simulate clicks
const handleClick = () => {
  clicks = 1;
};

const tests = (wrapper: any) => {
  it('renders reset component', function () {
    expect(wrapper.find('.reset').length).to.equal(1);
  });

  it('handles clicks', function () {
    wrapper.simulate('click');
    expect(clicks).to.equal(1);
  });
};

describe('Reset component testing', function () {

  const wrapper = shallow(<Reset loading={false} onClick={handleClick}/>);

  tests(wrapper)

});

describe('Reset component testing with no onClick prop', function () {

  const wrapper = shallow(<Reset loading={false}/>);

  tests(wrapper)

});
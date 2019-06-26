import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import {expect} from 'chai';
import Sandwich from './Sandwich';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});

let sandwich: Array<number> = [0, 2, 3, 0];

const handleOnReset = () => {
  sandwich = [];
};

const tests = (wrapper: any) => {

  it('renders the sandwich slices', function () {
    expect(wrapper.find('.slice').length).to.equal(sandwich.length);
  })

  it('resets the sandwich', function () {
    wrapper.instance().onReset();
    expect(sandwich).to.be.empty;
  });

  it('updates after the sandwich is reset', (done) => {
    setTimeout(() => {
      done();
    }, 500);
  });
};

describe('Sandwich component testing', function () {
  const wrapper = mount(<Sandwich ingredients={sandwich} onReset={handleOnReset}/>);
  tests(wrapper);
});

describe('Sandwich component testing with no onReset prop', function () {
  const wrapper = shallow(<Sandwich ingredients={sandwich}/>);
  tests(wrapper);
});
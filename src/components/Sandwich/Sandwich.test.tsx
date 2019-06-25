import React from 'react';
import {configure, shallow} from 'enzyme';
import {expect} from 'chai';
import Sandwich from './Sandwich';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});

let sandwich: Array<number> | null = [0, 2, 3, 0];

const handleOnReset = () => {
  sandwich = null;
};

const tests = (wrapper: any) => {
  it('renders the component', function () {
    expect(wrapper.find('.sandwich').length).to.equal(1);
  });

  it('resets the sandwich', function () {
    wrapper.instance().onReset();
    expect(sandwich).to.equal(null);
  })
}

describe('Sandwich component testing', function () {

  const wrapper = shallow(<Sandwich ingredients={sandwich} onReset={handleOnReset}/>);

  tests(wrapper);

});

describe('Sandwich component testing with no onReset prop', function () {

  const wrapper = shallow(<Sandwich ingredients={sandwich}/>);

  tests(wrapper);

});
import React from 'react';
import {configure, shallow} from 'enzyme';
import {expect} from 'chai';
import Price from './Price';
import Adapter from 'enzyme-adapter-react-16'
import ingredients from '../../lib/ingredients';

configure({adapter: new Adapter()});

const sampleIng = [0, 3, 4, 5, 10, 1, 0];
let totalPrice = 0;

sampleIng.map( ing => {
  return totalPrice = totalPrice + ingredients[ing].price;
} );


const tests = (wrapper: any) => {
  it('renders reset component', function () {
    expect(wrapper.find('.price').length).to.equal(1);
  });

  it('calculated the correct price', function () {
    expect(wrapper.find('.total').text()).to.equal(totalPrice.toFixed(2));
  })
};

describe('Price component testing', function () {

  const wrapper = shallow(<Price ingredients={sampleIng}/>);

  tests(wrapper)

});


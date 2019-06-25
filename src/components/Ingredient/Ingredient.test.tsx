import React, {DOMElement} from 'react';
import {configure, shallow} from 'enzyme';
import {expect} from 'chai';
import Ingredient from './Ingredient';

import Adapter from 'enzyme-adapter-react-16'
import {Button} from "semantic-ui-react";

configure({adapter: new Adapter()});

const ingredientName = "Tomato";
const image = "tomato.png";
const ingId = 1;

// Function to test click events
let afterClick = {id: null, name: null};
const handleClick = (evt: any) => {
  afterClick = evt;
};

const tests = (wrapper: any, ingredient: any) => {
  it('renders the ingredient', function () {
    expect(ingredient.length).to.equal(1);
  });

  it('Renders ingredient name', function () {
    expect(wrapper.contains(ingredientName)).to.equal(true);
  });

  it('handles clicks', function () {
    wrapper.find('.add-ingredient').simulate('click');
    expect(afterClick.id).to.equal(ingId);
    expect(afterClick.name).to.equal(ingredientName);
  })
};

describe('Ingredient component testing', function () {

  const wrapper = shallow(<Ingredient name={ingredientName} image={image} id={ingId} onClick={handleClick}/>);
  const ingredient = wrapper.find('.ingredient');

  tests(wrapper, ingredient);

});

describe('Ingredient component testing with no onClick prop', function () {

  const wrapper = shallow(<Ingredient name={ingredientName} image={image} id={ingId}/>);
  const ingredient = wrapper.find('.ingredient');

  tests(wrapper, ingredient);

});

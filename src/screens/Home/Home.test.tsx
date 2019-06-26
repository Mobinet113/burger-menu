import React from 'react';
import {configure, mount} from 'enzyme';
import {expect} from 'chai';
import Home from './Home';
import Adapter from 'enzyme-adapter-react-16';
import ingredients from '../../lib/ingredients';
import Ingredient from "../../components/Ingredient/Ingredient";

configure({adapter: new Adapter()});

describe('Home screen testing', function () {

  const wrapper = mount(<Home />);
  const home = wrapper.find('#screen-home');
  let testIngredient = 2;

  it('renders the component', function () {
    expect(home.length).to.equal(1);
  });

  it('handles ingredients clicks', function() {
    wrapper.instance().onIngredientClick( {id: testIngredient, name: ingredients[testIngredient]} );

    expect(wrapper.state().ingredients).to.contain(testIngredient)
  });

  it('handles reset click', function() {
    wrapper.instance().onResetClick();

    expect(wrapper.state().ingredients).to.be.empty;
  });

  it('renders all ingredients', function() {
    expect(wrapper.find(Ingredient).length).to.equal(ingredients.length)
  });


});
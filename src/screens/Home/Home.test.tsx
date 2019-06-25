import React from 'react';
import {configure, shallow} from 'enzyme';
import {expect} from 'chai';
import Home from './Home';
import ingredients from '../../lib/ingredients';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});

describe('Home screen testing', function () {

  const wrapper = shallow(<Home />);
  const home = wrapper.find('#screen-home');
  let ingredient = 2;

  it('renders the component', function () {
    expect(home.length).to.equal(1);
  });

  it('handles ingredients clicks', function() {
    wrapper.instance().onIngredientClick( {id: ingredient, name: ingredients[ingredient]} );

    expect(wrapper.state().ingredients).to.contain(ingredient)
  });

  it('handles reset click', function() {
    wrapper.instance().onResetClick();

    expect(wrapper.state().ingredients).to.be.empty;
  })




});
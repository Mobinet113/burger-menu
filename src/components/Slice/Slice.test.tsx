import React from 'react';
import {configure, mount} from 'enzyme';
import {expect} from 'chai';
import Slice from './Slice';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});

describe('Slice component testing', function () {

  const color = 'red';
  const wrapper = mount(<Slice color={color} name="test"/>);
  const slice = wrapper.find('.slice');

  it('Slice renders', function () {
    expect(slice.length).to.equal(1);
  });

  it('Slice has right colour', function () {
    if ( typeof slice.props() !== "undefined" ) {
      expect( slice.props().style.background ).to.equal(color);
    }
  });

});
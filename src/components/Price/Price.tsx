import React from "react";
import ingredients from '../../lib/ingredients';
import {Statistic} from 'semantic-ui-react';

export interface PriceProps {
  ingredients: Array<number>
}

export const Price = (props: PriceProps) => {

  const totalPrice = () => {
    let price = 0;

    props.ingredients.map(ing => {
      return price = price + ingredients[ing].price;
    });

    return price.toFixed(2);
  };

  return (
    <Statistic className="price">
      <Statistic.Value>£<span className="total">{totalPrice()}</span></Statistic.Value>
      <Statistic.Label>Price</Statistic.Label>
    </Statistic>
  );
};

export default Price;
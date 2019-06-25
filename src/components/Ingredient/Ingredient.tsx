import React from 'react';
import {Button, Grid, Image, Segment} from 'semantic-ui-react';

export interface IngredientProps {
  name: string,
  image: string,
  id: number,
  color?: string,

  onClick?(evt: { id: number, name: string }): void
}

const Ingredient = (props: IngredientProps) => {

  const handleClick = (): void => {
    if (props.onClick) {
      props.onClick({
        id: props.id,
        name: props.name
      })
    }
  };

  return (
    <Grid.Column mobile={8} tablet={4} computer={4} className="ingredient">
      <Segment textAlign="center">

        <Image
          src={`media/ingredients/${props.image}`}
          size="tiny"
          centered
          style={styles.image}
        />

        <Button className='add-ingredient' primary fluid onClick={handleClick}>
          {props.name}
        </Button>

      </Segment>
    </Grid.Column>
  )

};

const styles = {
  image: {
    marginBottom: 20
  }
};

export default Ingredient;
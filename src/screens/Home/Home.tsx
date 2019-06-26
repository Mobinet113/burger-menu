import React from 'react';
import ingredients from "../../lib/ingredients";
import Ingredient from "../../components/Ingredient/Ingredient";
import Sandwich from "../../components/Sandwich/Sandwich";
import {Grid, Image} from 'semantic-ui-react';

export interface HomeState {
  ingredients: Array<number>
}

class Home extends React.Component<{}, HomeState> {

  constructor(props: any) {
    super(props);

    this.state = {
      ingredients: []
    }
  }

  public onIngredientClick = (evt: {id: number, name: string}): void => {
    this.setState( prevState => ({
      ingredients: [evt.id, ...prevState.ingredients]
    }))
  };

  public onResetClick = () => {
    this.setState({ ingredients: [] })
  };

  render() {
    return (

      <div id="screen-home">
        <Grid container>

          <Grid.Column mobile={16}>
            <Image src="media/burger-menu.svg" style={{maxWidth: 200, marginTop: 20}} />
          </Grid.Column>

          <Grid.Column mobile={16} tablet={13} computer={10}>
            <Grid>
              {ingredients.map((ingredient, index) =>
                <Ingredient
                  name={ingredient.name}
                  image={ingredient.image}
                  id={index}
                  key={index}
                  onClick={this.onIngredientClick}
                  color={ingredient.color}/>
              )}
            </Grid>
          </Grid.Column>

          <Grid.Column mobile={16} tablet={3} computer={6}>
            <Sandwich ingredients={this.state.ingredients} onReset={this.onResetClick}/>
          </Grid.Column>

        </Grid>
      </div>
    )
  }
}

export default Home;
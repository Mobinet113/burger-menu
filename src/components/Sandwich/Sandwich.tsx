import React from 'react';
import {Segment, Icon} from 'semantic-ui-react';
import ingredients from "../../lib/ingredients";
import {Slice} from "../Slice/Slice";
import Reset from '../Reset/Reset';

export interface SandwichProps {
  ingredients: Array<number>,
  onReset?(): void
}

export interface SandwichState {
  loading: boolean
}

class Sandwich extends React.Component<SandwichProps, SandwichState> {

  constructor(props: SandwichProps) {
    super(props);

    this.state = {
      loading: false
    };
  }

  public onReset = () => {

    this.setState({loading: true}, () => {
      if (typeof this.props.onReset !== "undefined") {
        this.props.onReset();
      }

      window.setTimeout( () => this.setState({loading: false}), 500);
    });

  };

  render() {
    return (
      <Segment className="sandwich" style={styles.container}>

        <Reset
          loading={this.state.loading}
          onClick={this.onReset}
          style={styles.reset}
        />

        <div style={styles.inner}>
          {this.props.ingredients.map((ingredient, index) =>
            <Slice name={ingredients[ingredient].name}
                   color={ingredients[ingredient].color}
                   key={index}/>
          )}
        </div>

        <Icon name="bars" size="massive" style={styles.background}/>

      </Segment>
    )
  }
}


export const styles = {
  container: {
    minHeight: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center"
  },
  inner: {
    position: "relative" as "relative", // TS Quirk
    width: "100%",
    zIndex: 10
  },
  background: {
    position: "absolute",
    opacity: 0.1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: 'auto',
    zIndex: 0
  },
  reset: {
    position: "absolute",
    top: 0,
    right: 0
  }
};

export default Sandwich;
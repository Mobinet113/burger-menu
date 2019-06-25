import React from "react";
import {Button, Icon} from "semantic-ui-react";

export interface ResetProps {
  loading: boolean,

  onClick?(): void,

  style?: object
}

const Reset = (props: ResetProps) => {

  const handleClick = () => {
    if (typeof props.onClick === "undefined") return;

    props.onClick();
  };

  return (
    <Button className="reset" style={props.style} primary icon onClick={handleClick}>
      <Icon loading={props.loading} name="refresh"/>
    </Button>
  );

};

export default Reset;
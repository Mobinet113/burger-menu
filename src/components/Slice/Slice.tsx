import React from "react";
import {Popup} from "semantic-ui-react";

export interface SliceProps {
  color: string,
  name: string
}

export const Slice = ({color, name}: SliceProps) => {

  return (
    <Popup content={name} position="right center" trigger={
      <div
        className="slice"
        style={{
          ...styles.slice,
          background: color
        }}/>
    }/>
  );

};

const styles = {
  slice: {
    width: "100%",
    height: 20,
    maxWidth: 110,
    margin: "0 auto 5px",
    borderRadius: 10
  }
};

export default Slice;
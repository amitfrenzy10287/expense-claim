import React from "react";
import styled from "styled-components";
import { DropTarget } from "react-dnd";
import ColorEntity from "./ColorEntity";

const PerContainer = styled.div`
  border: 1px solid #999;
  width: 1000px;
  height: 100px;
  margin: 0 auto;
  background-color: ${p => (p.isOver ? "rgba(100, 0, 0, 0.1)" : "")};
`;

const Container = styled.div`
  flex: 1.5 0;
  border: 1px solid #999;
  height: 200px;
  background-color: ${p => (p.isOver ? "rgba(100, 0, 0, 0.1)" : "")};
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const isValidDrop = props => {
  return props => props.accepts;
};

const divStyle = {
  margin: "40px",
  height: "20px",
  width: "2",
  border: "5px solid red"
};

class PercentageCal extends React.Component {
  constructor() {
    super();
    this.state = {
      divStyle
    };
  }

  render() {
    const { compList } = this.props;

    return <PerContainer />;
  }
}

export default PercentageCal;

import React from "react";
import styled from "styled-components";

import Grid from "./Grid";
//import OuterGrid from "./OuterGrid";
import EntityPalette from "./EntityPalette";
import { Types } from "./EntityPalette";
import PercentageCal from "./PercentageCal";

const Container = styled.div`
  display: block;
  justify-content: space-between;
  text-align: center;
  width: 100%;
`;

const WrapperBox = styled.div`
  height: 165px;
  border-bottom: 1px solid #ccc;
`;

const OuterWrapper = styled.div`
  margin: 0 auto;
  display: block;
`;

const Header = styled.div`
  flex: 1;
`;

export const accepts = {
  Employee: [Types.emp],
  Supervisor: [Types.sup],
  Admin: [Types.adm]
};

const maxWidth = {
  Employee: 3,
  Supervisor: 6,
  Admin: 6
};
class OuterGrid extends React.Component {
  render() {
    const {
      target
    } = this.props;

    let dropTargets= [];

    if (this.props.target == "Employee") {
      dropTargets = ["Exp1", "Exp2", "Exp3"];
    } else if (this.props.target == "Supervisor") {
      dropTargets = ["Sup1", "Sup2", "Sup3"];
    } else if (this.props.target == "Admin") {
      dropTargets = ["Adm1", "Adm2", "Adm3"];
    }

    return (
      <Container>
        <OuterWrapper>
          <WrapperBox>
            <Header>
              <h2>{`${target}`}</h2>
            </Header>
            <div style={{display:'flex'}}>
            {dropTargets.map((target, index) => (
              <Grid
                key={this.props.index}
                accepts={this.props.accepts}
                list={this.props.list[target]}
                compList={this.props.addedList}
                handleDrop={this.props.handleDrop}
                handleDelete={this.props.handleDelete}
                target={target}
                maxWidth={this.props.maxWidth}
              />
            ))}
            </div>
          </WrapperBox>
        </OuterWrapper>
      </Container>
    );
  }
}

export default OuterGrid;

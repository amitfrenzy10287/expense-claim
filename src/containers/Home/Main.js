import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

import OuterGrid from "../../components/OuterGrid";
import EntityPalette, { Types } from "../../components/EntityPalette";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 100%;
`;

const WrapperBox = styled.div`
  box-shadow: 0 0 0.75rem 0.1rem rgba(0, 0, 100, 0.5);
  margin: 1rem;
`;

const OuterWrapper = styled.div`
  border: solid 1px #ccc;
  width: 100%;
  margin: 0 auto;
  display: inline-block;
`;

const EntityPanel = styled.div`
  display: inline-block;
`;

const ButtonHolder = styled.div`
  display: inline-block;
  float: right;
`;

const initialList = [
  {
    id: 1,
    title: "Expense",
    type: Types.emp,
    width: 2
  },
  {
    id: 2,
    title: "Supervisor Approved",
    type: Types.sup,
    width: 3
  },
  {
    id: 3,
    title: "Supervisor Pending",
    type: Types.sup,
    width: 5
  },
  {
    id: 4,
    title: "Supervisor Denied",
    type: Types.sup,
    width: 5
  },
  {
    id: 5,
    title: "Admin Approved",
    type: Types.adm,
    width: 3
  },
  {
    id: 6,
    title: "Admin Pending",
    type: Types.adm,
    width: 6
  },
  {
    id: 7,
    title: "Admin Denied",
    type: Types.adm,
    width: 6
  }
];

const dropTargets = ["Employee", "Supervisor", "Admin"];

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
class Main extends React.Component {
  state = {
    list: initialList,
    addedList: {
      Employee: [],
      Supervisor: [],
      Admin: [],
      Exp1: [],
      Exp2: [],
      Exp3: [],
      Sup1: [],
      Sup2: [],
      Sup3: [],
      Adm1: [],
      Adm2: [],
      Adm3: []
    }
  };

  handleDrop = (id, target) => {
    this.setState(state => ({
      addedList: {
        ...state.addedList,
        [target]: state.addedList[target].concat([
          state.list.find(news => news.id === id)
        ])
      }
    }));
  };

  handleDelete = (target, type) => {
    const categories = [];
    categories[target] = [];
    categories[type] = [];
    const addedList = { ...this.state.addedList, ...categories };
    this.setState(state => ({
      addedList: {
        ...addedList
      }
    }));
  };

  onSubmit = () => {
    // call post api to save the above object
    // payload contains the object
    // response should be 'success'
  };

  render() {
    const { list, addedList } = this.state;
    return (
      <Container>
        <OuterWrapper>
          <div style={{ height: "534px" }}>
            {" "}
            {dropTargets.map((target, index) => (
              <OuterGrid
                key={index}
                target={target}
                accepts={accepts[target]}
                addedList={addedList}
                list={addedList}
                compList={addedList}
                handleDrop={this.handleDrop}
                handleDelete={this.handleDelete}
                target={target}
                maxWidth={maxWidth[target]}
              />
            ))}{" "}
          </div>
        </OuterWrapper>
        <ButtonHolder>
          <EntityPanel>
            <EntityPalette list={list} />{" "}
          </EntityPanel>
        </ButtonHolder>
      </Container>
    );
  }
}

export default Main;

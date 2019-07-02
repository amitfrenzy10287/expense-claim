import React from "react";
import styled from "styled-components";
import DragableBox from "../DragableBox";
import {roles} from "../../containers/Home/Constants";

const Container = styled.div`
  margin-left: 10px;
  height: 556px;
  width: 100%;
  padding: 1rem;
  border: solid 1px #cacaca;
`;

const getTypes = () =>  {
    let TypesNew = {};
    Object.keys(roles).forEach(key => {
        TypesNew[roles[key].type] = roles[key].type;
    })
    return TypesNew;
};

const EntityPalette = ({ list }) => {
  return (
    <Container>
      <h2>Actions</h2>
      {list.map(({ id, title, type, width }) => (
        <DragableBox type={type} width={width} key={id} id={id} title={title} />
      ))}
    </Container>
  );
};

export const Types = getTypes();
export default EntityPalette;

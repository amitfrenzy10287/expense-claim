import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import { roles, actions, initialSet } from "../../containers/Home/Constants";

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

const initialList = actions;

let dropTargets = [];
const setDropTargets = Object.keys(roles).forEach(key => {
  dropTargets.push(roles[key].title);
});
const getAccepts = () => {
  let acceptsNew = {};
  Object.keys(roles).forEach(key => {
    acceptsNew[roles[key].title] = [roles[key].type];
  });
  return acceptsNew;
};

const getmaxWidth = () => {
  let maxWidthNew = {};
  Object.keys(roles).forEach(key => {
    maxWidthNew[roles[key].title] = roles[key].maxWidth;
  });
  return maxWidthNew;
};

export const accepts = getAccepts();
const maxWidth = getmaxWidth();

const initialCategory = initialSet;

function Main() {
  const [list, setList] = useState(initialList);
  const [addedList, setAddedList] = useState(initialCategory);

  const handleDrop = (id, target) => {
    setAddedList({
      ...addedList,
      [target]: addedList[target].concat([list.find(news => news.id === id)])
    });
  };

  const handleDelete = (target, type) => {
    const categories = [];
    categories[target] = [];
    categories[type] = [];
    const addedLister = { ...addedList, ...categories };
    setAddedList({
      ...addedLister
    });
  };

  const onSubmit = () => {
    // call post api to save the above object
    // payload contains the object
    // response should be 'success'
  };

  const [count, setCount] = useState(0);
  const [drawLine, setDrawLine] = useState([]);

  const setDrawLiner = target => {
    let targetArr = [target];
    setDrawLine(drawLine.concat(targetArr));
  };

  useEffect(() => {
    console.log(drawLine);
  }, [drawLine]);

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
              handleDrop={handleDrop}
              handleDelete={handleDelete}
              target={target}
              maxWidth={maxWidth[target]}
              setCount={setCount}
              count={count}
              setDrawLine={setDrawLiner}
              drawLine={drawLine}
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

export default Main;

import React from "react";
import styled from "styled-components";

import Grid from "../Grid";
import { Types } from "../EntityPalette";
import PercentageCal from "../PercentageCalc";
import {roles} from "../../containers/Home/Constants";

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

const getAccepts = () =>  {
  let acceptsNew = {};
  Object.keys(roles).forEach(key => {
    acceptsNew[roles[key].title] = [roles[key].type];
  })
  return acceptsNew;
};
const getmaxWidth = () =>  {
  let maxWidthNew = {};
  Object.keys(roles).forEach(key => {
    maxWidthNew[roles[key].title] = roles[key].maxWidth;
  })
  return maxWidthNew;
};

export const accepts = getAccepts();
const maxWidth = getmaxWidth();

function OuterGrid({
  list,
  target,
  accepts,
  maxWidth,
  addedList,
  handleDrop,
  handleDelete,
  drawLine,
  setDrawLine
}) {  

  let dropTargets = [];

  const setDropTargets =
    Object.keys(roles).forEach(key => {
      if (target == roles[key].title) {
        let targetObject = roles[key].target;
        dropTargets = [];
        Object.keys(targetObject).forEach(key => {
          dropTargets.push(targetObject[key].containerID)
        })
      }
    });

    return (
      <Container>
        <OuterWrapper>
          <WrapperBox>
            <Header>
              <h2>{`${target}`}</h2>
            </Header>{" "}
            <div style={{ display: "flex" }}>
              {dropTargets.map((target, index) => (
                <Grid
                  key={index}
                  accepts={accepts}
                  list={list[target]}
                  compList={addedList}
                  handleDrop={handleDrop}
                  handleDelete={handleDelete}
                  target={target}
                  maxWidth={maxWidth}
                  setDrawLine={setDrawLine}
                  drawLine={drawLine}
                />
              ))}{" "}
            </div>
          </WrapperBox>
        </OuterWrapper>
      </Container>
    );
  }

export default OuterGrid;

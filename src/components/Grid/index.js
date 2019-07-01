import React from "react";
import styled from "styled-components";
import { DropTarget } from "react-dnd";
import DragableBox from "../DragableBox";
import Line from "../Line";
import PercentageCalc from "../PercentageCalc";
const Container = styled.div`
  height: 100px;
  width: 33%;
  background-color: ${p => (p.isOver ? "rgba(100, 0, 0, 0.1)" : "")};
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const AddedItems = styled.div`
  border: 0px;
`;

const deleteBtn = styled.div`
  border: "5px solid red";
`;

const Header = styled.div`
  flex: 1;
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

const deleteButton = styled.div``;

function Grid({
    list,
    compList,
    canDrop,
    isOver,
    connectDropTarget,
    target,
    handleDelete
  }) {  

  const onDelete = (type) => {
    handleDelete(target, type);
  };

  const isActive = isOver && canDrop;

    return (
      <Container canDrop={canDrop} isOver={isOver}>
        {connectDropTarget(
          <div style={{ flex: 1, padding: "1rem", height: "70px" }}>
            {(target == "Exp1" || target == "Exp2" || target == "Exp3") && (
              <Header>
                <span>
                  <PercentageCalc compList={compList} target={target} />
                </span>
              </Header>
            )}
            <List>
              {list.map(({ id, title, type, width }) => (
                <AddedItems>
                  <DragableBox
                    type={type}
                    width={width}
                    key={id}
                    id={id}
                    title={title}
                  />

                  <button onClick={() => onDelete(type)}>X</button>
                  <Line type={type} compList={compList} />
                </AddedItems>
              ))}
            </List>
          </div>
        )}
      </Container>
    );
}

export default DropTarget(
  props => props.accepts, // define which entities are valid drop here
  {
    drop: (props, monitor) => {
      const { id } = monitor.getItem();
      if (props.list.length > 0) {
        return;
      }

      if (props.target === "Sup1") {
        if (props.compList.Exp1.length !== 1) {
          alert("CAN'T");
          return;
        }
      }
      if (props.target === "Sup2") {
        if (props.compList.Exp2.length !== 1) {
          alert("CAN'T");
          return;
        }
      }
      if (props.target === "Sup3") {
        if (props.compList.Exp3.length !== 1) {
          alert("CAN'T");
          return;
        }
      }

      if (props.target === "Adm1") {
        if (props.compList.Sup1.length !== 1) {
          alert("CAN'T");
          return;
        }
      }
      if (props.target === "Adm2") {
        if (props.compList.Sup2.length !== 1) {
          alert("CAN'T");
          return;
        }
      }
      if (props.target === "Adm3") {
        if (props.compList.Sup3.length !== 1) {
          alert("CAN'T");
          return;
        }
      }

      props.handleDrop(id, props.target);
    },
    canDrop: (props, monitor) => {
      const item = monitor.getItem();
      let result =
        item.width <= props.maxWidth && props.accepts.includes(item.type);
      return result;
    }
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
    isOver: monitor.isOver(),
    clientOffset: monitor.getClientOffset(),
    dropResult: monitor.getDropResult(),
    initialClientOffset: monitor.getInitialClientOffset()
  })
)(Grid);

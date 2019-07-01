import React from "react";
import styled from "styled-components";
import { DropTarget } from "react-dnd";
import ColorEntity from "./ColorEntity";
import Line from "./Line";
const Container = styled.div`
  height: 100px;
  width: 33%;
  background-color: ${p => (p.isOver ? "rgba(100, 0, 0, 0.1)" : "")};
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
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

class Grid extends React.Component {
  constructor() {
    super();
    this.state = {
      divStyle
    };
  }

  onDelete = type => {
    this.props.handleDelete(this.props.target, type);
  };

  render() {
    const {
      list,
      compList,
      canDrop,
      isOver,
      connectDropTarget,
      accepts,
      maxWidth,
      target,
      clientOffset,
      dropResult,
      initialClientOffset
    } = this.props;
    const isActive = isOver && canDrop;

    const perCalc = () => {
      let percentage = 0;
      if (this.props.target == "Exp1") {
        if (this.props.compList.Exp1.length > 0) {
          percentage = 0;
          if (this.props.compList.Sup1.length > 0) {
            percentage = 50;
            if (this.props.compList.Adm1.length > 0) {
              percentage = 100;
            }
          }
        }
      }
      if (this.props.target == "Exp2") {
        if (this.props.compList.Exp2.length > 0) {
          percentage = 0;
          if (this.props.compList.Sup2.length > 0) {
            percentage = 50;
            if (this.props.compList.Adm2.length > 0) {
              percentage = 100;
            }
          }
        }
      }
      if (this.props.target == "Exp3") {
        if (this.props.compList.Exp3.length > 0) {
          percentage = 0;
          if (this.props.compList.Sup3.length > 0) {
            percentage = 50;
            if (this.props.compList.Adm3.length > 0) {
              percentage = 100;
            }
          }
        }
      }

      return percentage;
    };

    return (
      <Container canDrop={canDrop} isOver={isOver}>
        {connectDropTarget(
          <div style={{ flex: 1, padding: "1rem", height: "70px" }}>
            {(target == "Exp1" || target == "Exp2" || target == "Exp3") && (
              <Header>
                <span>{`${perCalc()}%`}</span>
              </Header>
            )}
            <List>
              {list.map(({ id, title, type, width }) => (
                <AddedItems>
                  <ColorEntity
                    type={type}
                    deleteExpense={this.props.handleDelete}
                    target={this.props.target}
                    width={width}
                    key={id}
                    id={id}
                    title={title}
                  />

                  {/* <button onClick={() => this.onDelete(type)}>X</button>
                  <Line type={type} compList={compList} /> */}
                  {/* <div
                    style={{
                      borderLeft:
                        type == "sup" || type == "adm"
                          ? "thin solid #ff0000"
                          : "",

                      height: "137px",
                      position: "relative",
                      top: -177,
                      left: 80
                    }}
                  >
                    &nbsp;
                  </div> */}
                </AddedItems>
              ))}
            </List>
          </div>
        )}
      </Container>
    );
  }
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

      // if(props.compList.Exp1.length > 1) {
      //    alert("CAN'T");
      // }

      console.log("TARGET", props.target);
      // if (props.target === "Supervisor" && props.list.length > 1) {
      //   console.log("DATA", props.compList);
      //   console.log("LIST", props.list);
      //   // if () {
      //   //   alert("Supervisor");
      //   //   console.log("DATA", props.compList.Employee);
      //   //   return;
      //   // }
      // }
      props.handleDrop(id, props.target);
    },
    canDrop: (props, monitor) => {
      const item = monitor.getItem();
      let result =
        item.width <= props.maxWidth && props.accepts.includes(item.type);

      // if (props.target === "Employee") {
      //   if (props.list.length > 3) {
      //     alert("Only 3 item's can add");
      //   }
      // } else if (props.target === "Supervisor") {
      //   if (props.list.length > props.compList.Employee.length) {
      //     alert("NOT");
      //     return;
      //   }
      // }
      // if(props.target="Employee") {
      //   if (props.list.length > 2) {
      //     alert("Only 3 item's can add");
      //     return;
      //   }
      // }
      // console.log("result>>>", result);
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

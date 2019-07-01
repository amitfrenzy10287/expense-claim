import React from "react";
import { DragSource } from "react-dnd";
import Box from "@material-ui/core/Box";

function DragableBox({title, isDragging, connectDragSource, width}) {
    return connectDragSource(
      <div>
        <Box
          bgcolor="primary.main"
          isDragging={isDragging}
          color="primary.contrastText"
          p={2}
          m={1}
        >
          {`${title}`}
        </Box>
      </div>
    );
}

export default DragSource(
  props => props.type, // param to pass to check if drop is valid
  {
    beginDrag: props => props
  },
  (connect, monitor) => {
    return {
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging()
    };
  }
)(DragableBox);

import React, { useState } from "react";
import { DragSource } from "react-dnd";
import Box from '@material-ui/core/Box';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles(theme => ({
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
const ColorEntity =(props)=> {
  const classes = useStyles();
  const [x1,y1,x2,y2] = useState(0);

    const { title, isDragging, connectDragSource, width } = props;
    return connectDragSource(
        <div>
          <Box style={{cursor:'pointer'}} bgcolor="primary.main" isDragging={isDragging} color="primary.contrastText" p={2} m={1}>
          {`${title}`}
          <IconButton aria-label="Connect" className={classes.margin} color="secondary" size="small">
            <ArrowDownwardIcon fontSize="inherit" />
          </IconButton>
          <IconButton aria-label="Delete" color="secondary" className={classes.margin} size="small">
            <DeleteIcon />
          </IconButton>
          </Box>
        </div>
    );
}

export default DragSource(
  props => props.type, // param to pass to check if drop is valid
  {
    beginDrag: props => props
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  })
)(ColorEntity);

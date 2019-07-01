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

const onStartDraw=(e,id)=>{
  var offsets = e.target.getBoundingClientRect();
  var top = offsets.top;
  var left = offsets.left;
  this.setState({ x: left, y: top,x2:this.state.x2,y2:this.state.y2 });
}
const onEndDraw=(e,id)=>{
  var offsets = e.target.getBoundingClientRect();
  var top = offsets.top;
  var left = offsets.left;
  this.setState({ x2: left, y2: top,x:this.state.x,y:this.state.y });
}

const ColorEntity =(props)=> {
  const classes = useStyles();
  const [controls,setControls] = useState({
      x1:0,
      x2:0,
      y1:0,
      y2:0
  });
  const handleDraw = (e,type)=>{
    const offsets = e.target.getBoundingClientRect();
    const { top,left }= offsets;
    const controls = type === 'emp' ? {
      x1:left,
        x2:controls.x2,
        y1:top,
        y2:controls.y2
    } : {
        x2:left,
        x1:controls.x2,
        y2:top,
        y1:controls.y2
    };
    setControls(controls);
  }
    const { title, isDragging, connectDragSource, deleteExpense,type,target } = props;
    console.log('props',props);
    return connectDragSource(
        <div>
          <Box style={{cursor:'pointer'}} bgcolor="primary.main" isDragging={isDragging} color="primary.contrastText" p={2} m={1}>
          {`${title}`}
          <IconButton onClick={(e)=>handleDraw(e,type)} aria-label="Connect" className={classes.margin} color="secondary" size="small">
            <ArrowDownwardIcon fontSize="inherit" />
          </IconButton>
          <IconButton aria-label="Delete" 
            onClick={() => deleteExpense(target , type)}
            color="secondary" className={classes.margin} size="small">
            <DeleteIcon />
          </IconButton>
          </Box>
          {controls.x1 >0 ? <svg id="svg">
            <line style={{strokeWidth:'2px',stroke:'#000'}} x1={controls.x1} x2={controls.x2} y1={controls.y1} y2={controls.y2} />
          </svg>: ''}
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

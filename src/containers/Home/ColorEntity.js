import React, { Component, useState } from "react";
import { DragSource } from "react-dnd";
import Box from '@material-ui/core/Box';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';

const useStyles = makeStyles(theme => ({
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const ColorEntity = (props)=>{
  
  const handleDraw = (e)=>{
    debugger;
    const {setControls,controls,type} = props;
    const offsets = e.target.getBoundingClientRect();
    const { top,left } = offsets;
    // console.log('offsets',offsets);
    let data = {};
    if(type === 'emp')
    {
      data={
        x1:left,
        y1:top
      }
    }else{
      data={
        x2:left,
        y2: top
      }
    }
    
    setControls({...controls,...data});
  }
    const { title, isDragging, connectDragSource,controls, deleteExpense,type,target } = props;
    console.log('fetchcopmntrols',controls);
    return connectDragSource(
        <div>
          <Box style={{cursor:'pointer'}} bgcolor="primary.main" isDragging={isDragging} color="primary.contrastText" p={2} m={1}>
          {title}
          <IconButton onClick={(e)=>handleDraw(e,type)} aria-label="Connect" color="secondary" size="small">
            <ArrowDownwardIcon fontSize="inherit" />
          </IconButton>
          <IconButton aria-label="Delete" 
            onClick={() => deleteExpense(target , type)}
            color="secondary" size="small">
            <DeleteIcon />
          </IconButton>
          </Box>
          {controls.x1 > 0 && controls.x2 > 0 ? <svg id="svg">
            <line style={{strokeWidth:'2px',stroke:'#000'}} x1={controls.x1} x2={controls.x2} y1={controls.y1} y2={controls.y2} />
          </svg>: ''}
        </div>
    );
    }
  
 const mapStateToProps = state => {
   return {
     controls: state.app.controls
   }
 }   

 const mapDispatchToProps = dispatch =>{
   return {
     setControls:(data)=>dispatch(actions.setControls(data)),
     fetchControls:()=>dispatch(actions.fetchControls())
   }
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
)(connect(mapStateToProps,mapDispatchToProps)(ColorEntity));

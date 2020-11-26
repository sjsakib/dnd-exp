import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import './styles.css';
import { Action } from '../../redux/actions';

interface ActionTileProps {
  action: Action;
  index: number;
}

export default function ActionTile({ action, index }: ActionTileProps) {
  return (
    <Draggable
      isDragDisabled={index === 0}
      draggableId={action.id}
      index={index}
    >
      {(provided, snapshot) => {
        return (
          <div
            className='action-tile'
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {action.type}
          </div>
        );
      }}
    </Draggable>
  );
}

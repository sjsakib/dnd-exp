import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FaHandPaper } from 'react-icons/fa';

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
      {provided => {
        return (
          <div
            className='action-tile'
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <div className='action-tile__anchor' {...provided.dragHandleProps}>
              <FaHandPaper />
            </div>
            {action.type}
          </div>
        );
      }}
    </Draggable>
  );
}

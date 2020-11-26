import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { FaHandPaper } from 'react-icons/fa';

import './styles.css';
import { Action } from '../../redux/actions';
import Arrow from './Arrow';

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
      {providedDrag => {
        return (
          <Droppable
            isDropDisabled={action.type === 'pagination'}
            droppableId={action.id}
            type='arrows'
          >
            {providedDrop => (
              <div ref={providedDrop.innerRef} {...providedDrop.droppableProps}>
                <div
                  className='action-tile'
                  {...providedDrag.draggableProps}
                  ref={providedDrag.innerRef}
                >
                  {action.type === 'pagination' && (
                    <Arrow id={`arrow-${action.id}`} index={index} />
                  )}
                  <div
                    className='action-tile__anchor'
                    {...providedDrag.dragHandleProps}
                  >
                    <FaHandPaper />
                  </div>
                  {action.type}
                </div>
              </div>
            )}
          </Droppable>
        );
      }}
    </Draggable>
  );
}

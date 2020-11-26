import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Arrow({ id, index }: { id: string; index: number }) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className='arrow'
          >
            {!snapshot.isDropAnimating && <FiArrowUpRight />}
          </div>
        );
      }}
    </Draggable>
  );
}

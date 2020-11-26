import { Droppable } from 'react-beautiful-dnd';
import React, { useSelector } from 'react-redux';

import { RootState } from '../../redux';
import ActionTile from '../Action';

export default function ActionList() {
  const actions = useSelector((state: RootState) => state.actions.actionList);
  return (
    <Droppable direction='vertical' droppableId='container'>
      {provided => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {actions.map((action, index) => (
            <ActionTile action={action} key={action.id} index={index} />
          ))}
          {provided.placeholder}
        </div>
        
      )}
    </Droppable>
  );
}

import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import './App.css';
import ActionTypeList from './components/ActionTypeList';
import ActionList from './components/ActionList';
import Data from './components/Data';
import { useDispatch } from 'react-redux';
import { move } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  return (
    <DragDropContext
      onDragEnd={e =>
        e.destination &&
        dispatch(
          move({ sourceIdx: e.source.index, targetIdx: e.destination?.index })
        )
      }
    >
      <div className='App'>
        <ActionTypeList />
        <ActionList />
        <Data />
      </div>
    </DragDropContext>
  );
}

export default App;

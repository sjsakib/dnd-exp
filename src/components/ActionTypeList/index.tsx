import React from 'react';
import { useDispatch } from 'react-redux';
import { addAction } from '../../redux/actions';

import './styles.css';

const actions = ['input', 'click', 'pagination', 'extract'];

export default function ActionList() {
  const dispatch = useDispatch();
  return (
    <div className='action-list'>
      {actions.map(actionName => (
        <div
          onClick={() => {
            dispatch(addAction({ type: actionName }));
          }}
          className='action-list__item'
          key={actionName}
        >
          {actionName}
        </div>
      ))}
    </div>
  );
}

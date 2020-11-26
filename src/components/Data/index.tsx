import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import './styles.css';

export default function Data() {
  const actions = useSelector((state: RootState) => state.actions.actionList);

  return (
    <div className='data'>
      <textarea readOnly value={JSON.stringify(actions)} rows={30} />
    </div>
  );
}

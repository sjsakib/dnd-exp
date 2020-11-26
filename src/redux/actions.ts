import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Action {
  id: string;
  next: string | null;
  type: string;
}

interface ActionsState {
  actionList: Action[];
}

const initialState: ActionsState = {
  actionList: [{ id: '1', next: null, type: 'start' }],
};

const actionsSlice = createSlice({
  name: 'actionsSlice',
  initialState,
  reducers: {
    addAction(state, { payload }: PayloadAction<Pick<Action, 'type'>>) {
      const list = state.actionList;
      const id = `${list.length + 1}`;
      if (list.length) list.slice(-1)[0].next = id;
      list.push({
        ...payload,
        id,
        next: null,
      });
    },

    move(
      state,
      {
        payload: { sourceIdx, targetIdx },
      }: PayloadAction<{ sourceIdx: number; targetIdx: number }>
    ) {
      if (sourceIdx === targetIdx || targetIdx === 0) return;
      const list = state.actionList;

      const di = targetIdx > sourceIdx ? 1 : -1;
      const len = list.length;

      if (sourceIdx > 0) {
        list[sourceIdx - 1].next =
          sourceIdx < len - 1 ? list[sourceIdx + 1].id : null;
      }

      if (sourceIdx - 1 >= 0)
        list[sourceIdx - 1].next =
          sourceIdx + 1 < len ? list[sourceIdx + 1].id : null;

      const tmp = list[sourceIdx];
      for (let i = sourceIdx; i !== targetIdx; i += di) {
        list[i] = list[i + di];
      }
      list[targetIdx] = tmp;

      if (targetIdx + 1 < list.length)
        list[targetIdx].next = list[targetIdx + 1].id;
      else list[targetIdx].next = null;

      if (targetIdx - 1 >= 0) {
        list[targetIdx - 1].next = list[targetIdx].id;
      }
    },
  },
});

export const { addAction, move } = actionsSlice.actions;

export default actionsSlice.reducer;

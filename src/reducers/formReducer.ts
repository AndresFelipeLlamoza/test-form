import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  data: any;
}

const initialState: FormState = {
  data: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormField: (state, action: PayloadAction<{ id: string; value: any }>) => {
      const { id, value } = action.payload;
      state.data[id] = value;
    },
  },
});

export const { updateFormField } = formSlice.actions;

export default formSlice.reducer;
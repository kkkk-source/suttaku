import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'app/store'; 

interface ThemeState {
  value: string
}

const initialState: ThemeState = {
  value: 'dark'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: state => {
      state.value = state.value === 'dark' ? 'light' : 'dark';
    }
  }
});

export const { toggle } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.value;
export default themeSlice.reducer;

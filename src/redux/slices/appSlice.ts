import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {initialLoadState} from '../commons';

const defaultError = 'Something went wrong';

// Default initial state
export const initialState = {
  ...initialLoadState,
};

// Thunks
export const getCoins = createAsyncThunk('getCoins', async () => {
  return;
});

export const getCoinMarket = createAsyncThunk('getCoinMarket', async () => {
  return;
});

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCoins.pending, state => {
      state.loading = true;
      state.loaded = false;
    });
    builder.addCase(getCoins.fulfilled, state => {
      state.loading = false;
      state.loaded = true;
    });
    builder.addCase(getCoins.rejected, state => {
      state.loading = false;
      state.loaded = true;
      state.error = defaultError;
    });
    builder.addCase(getCoinMarket.pending, state => {
      state.loading = true;
      state.loaded = false;
    });
    builder.addCase(getCoinMarket.fulfilled, state => {
      state.loading = false;
      state.loaded = true;
    });
    builder.addCase(getCoinMarket.rejected, state => {
      state.loading = false;
      state.loaded = true;
      state.error = defaultError;
    });
  },
});

// export const {} = sessionSlice.actions;
export default sessionSlice.reducer;

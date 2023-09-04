import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {SKIP_LIMIT_NUMBER, initialLoadState} from '../commons';
import {
  getCoins as getCoinsApi,
  getCoinMarket as getCoinMarketApi,
} from '../../api/index';

const defaultError = 'Something went wrong';

// Default initial state
export const initialState = {
  ...initialLoadState,
  data: [],
  endReached: false,
  market: {...initialLoadState, data: [], endReached: false},
};

// Thunks
export const getCoins = createAsyncThunk(
  'getCoins',
  async ({start, limit}: {start: string; limit: string}) => {
    try {
      const response = await getCoinsApi(start, limit);
      return response;
    } catch (error) {
      console.log('getCoins [error]', error);
      return [];
    }
  },
);

export const getCoinMarket = createAsyncThunk(
  'getCoinMarket',
  async ({id}: {id: string}) => {
    try {
      const response = await getCoinMarketApi(id);
      return response;
    } catch (error) {
      console.log('getCoinMarket [error]', error);
      return [];
    }
  },
);

// Utils
const validateAndLoadData = (stateData: any, inputData: any) => {
  try {
    if (stateData.length === 0) {
      return [...inputData];
    } else {
      const indexes = stateData.map((crypto: any) => {
        return crypto.id;
      });
      if (indexes.includes(inputData[0]?.id)) {
        return stateData;
      }
      return [...stateData, ...(inputData || [])];
    }
  } catch (error) {
    console.log('validateAndLoadData [error]', error);
    return [];
  }
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    resetCoinsContent: state => {
      state.loading = initialLoadState.loading;
      state.loaded = initialLoadState.loaded;
      state.error = initialLoadState.error;
      state.data = [];
      state.endReached = false;
    },
    resetMarketContent: state => {
      state.market.loading = initialLoadState.loading;
      state.market.loaded = initialLoadState.loaded;
      state.market.error = initialLoadState.error;
      state.market.data = [];
      state.market.endReached = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(getCoins.pending, state => {
      state.loading = true;
      state.loaded = false;
    });
    builder.addCase(getCoins.fulfilled, (state, {payload}: {payload: any}) => {
      if (payload?.data?.length < SKIP_LIMIT_NUMBER) {
        state.endReached = true;
      }

      state.data = validateAndLoadData(state.data, payload?.data);
      state.loading = false;
      state.loaded = true;
    });
    builder.addCase(getCoins.rejected, state => {
      state.loading = false;
      state.loaded = true;
      state.error = defaultError;
    });
    builder.addCase(getCoinMarket.pending, state => {
      state.market.loading = true;
      state.market.loaded = false;
    });
    builder.addCase(
      getCoinMarket.fulfilled,
      (state, {payload}: {payload: any}) => {
        // Set endReached to true since doesn't require pagination, but can in the future.
        state.endReached = true;

        state.market.data = validateAndLoadData(state.market.data, payload);
        state.market.loading = false;
        state.market.loaded = true;
      },
    );
    builder.addCase(getCoinMarket.rejected, state => {
      state.loading = false;
      state.loaded = true;
      state.error = defaultError;
    });
  },
});

export const {resetCoinsContent, resetMarketContent} = appSlice.actions;
export default appSlice.reducer;

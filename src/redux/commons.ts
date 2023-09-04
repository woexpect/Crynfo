interface InitialState {
  loading: boolean;
  loaded: boolean;
  error?: string;
}

export const initialLoadState: InitialState = {
  loading: false,
  loaded: false,
};

export const SKIP_LIMIT_NUMBER = 15;

export const events = {};

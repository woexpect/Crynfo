import service from './service';

// Common utils
const defaultHeadersNoAuth = {
  'Content-Type': 'application/json',
};

// API calls
export const getUserProfile = async (start: number = 0, limit: number = 15) => {
  const response = await service({
    path: `api/tickers/?start=${start}&limit=${limit}`,
    headers: defaultHeadersNoAuth,
  });

  return response;
};

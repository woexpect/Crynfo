import service from './service';

// Common utils
const defaultHeadersNoAuth = {
  'Content-Type': 'application/json',
};

// API calls
export const getCoins = async (start: string = '0', limit: string = '15') => {
  const response = await service({
    path: 'api/tickers/',
    params: {
      start,
      limit,
    },
    headers: defaultHeadersNoAuth,
  });

  return response;
};

export const getCoinMarket = async (coinId: string) => {
  const response = await service({
    path: 'api/coin/markets/',
    params: {
      id: coinId,
    },
    headers: defaultHeadersNoAuth,
  });

  return response;
};

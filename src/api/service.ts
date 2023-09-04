import ReactNativeBlobUtil from 'react-native-blob-util';

const BASE_URL = 'https://api.coinlore.net';

const service = async ({
  path = '',
  params = {},
  headers = {},
  body = {},
  fullUrl,
  method = 'GET',
  baseUrl = BASE_URL,
  type,
}: {
  path: string;
  params?: {[key: string]: string};
  headers: {[key: string]: string};
  body?: object;
  fullUrl?: string;
  method?: string;
  baseUrl?: string;
  type?: string;
}) => {
  const paramsStr = Object.keys(params)
    .map((key: string) => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');
  const url = `${fullUrl || `${baseUrl}/${path}`}?${paramsStr}`;

  interface FetchConfiguration {
    method: any;
    headers: {[key: string]: string};
    body?: any;
  }

  const fetchConfig: FetchConfiguration = {
    method,
    headers,
  };

  if (method === 'POST' && headers['Content-Type'] === 'multipart/form-data') {
    fetchConfig.body = body;
  } else if (method !== 'GET') {
    fetchConfig.body = JSON.stringify(body);
  }

  try {
    const task = ReactNativeBlobUtil.fetch(
      fetchConfig.method,
      url,
      fetchConfig.headers,
      fetchConfig.body,
    );
    const response = await task;

    let responseJson = {};

    // No Content is not returned
    if (response.respInfo.status !== 204 && response.respInfo.status !== 202) {
      const text = await response.text();
      responseJson = getJson(text);
    }

    if (response.respInfo.status >= 400) {
      throw new Error(`${response.respInfo.status}`);
    }

    if (type === 'blob') {
      return {...responseJson, data: response.data};
    }
    return responseJson;
  } catch (err) {
    throw err;
  }
};

export const getJson = (str: string) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return {};
  }
};

export default service;

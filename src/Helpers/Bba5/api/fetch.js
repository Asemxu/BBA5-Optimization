const baseUrl = process.env.REACT_APP_API_PRO;

const fetchNotToken = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}${endpoint}`;

  if (method === 'GET') {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
};

const fetchWithToken = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}${endpoint}`;
  const token = sessionStorage.getItem('token') || '';

  if (method === 'GET') {
    const headers = {
      Authorization: 'Bearer ' + token,
    };
    return fetch(url, {
      method,
      headers,
    });
  } else {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer  ' + token,
    };

    const requestOptions = {
      method,
      headers,
      body: JSON.stringify(data),
    };

    if (Object.keys(data).length === 0) delete requestOptions.body;

    return fetch(url, requestOptions);
  }
};

const fetchIP = async () => {
  try {
    const body = await fetch('https://api.ipify.org/?format=json', {
      method: 'GET',
      redirect: 'follow',
    });

    const { ip } = await body.json();
    return ip;
  } catch (error) {
    return '1.1.1.1';
  }
};

export { fetchNotToken, fetchWithToken, fetchIP };

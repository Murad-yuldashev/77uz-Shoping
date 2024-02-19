const BASE_URL = "https://77-dev.uicgroup.tech/api/v1";

const token = localStorage.getItem("access");

const service = (method, url, data, params) => {
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return new Promise((resolve, reject) => {
    fetch(BASE_URL + url, {
      method,
      headers,
      body: JSON.stringify(data),
      params,
    })
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log("Error: ", err);
        reject(err);
      });
  });
};

export default {
  get(url, params) {
    return service("GET", url, params);
  },
  post(url, data, params) {
    return service("POST", url, data, params);
  },
  put(url, data, params) {
    return service("PUT", url, data, params);
  },
  patch(url, data, params) {
    return service("PATCH", url, data, params);
  },
};

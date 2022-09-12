const axios = {
  get: jest.fn(() => Promise.resolve({ data: { username: "mock" } })),
};

module.exports = axios;
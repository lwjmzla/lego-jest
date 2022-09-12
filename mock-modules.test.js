const getUserName = require("./user");
const axios = require("axios");
// 接管 axios方法
jest.mock("axios"); // !mock modules
// !第一种 直接当前文件用以下代码  -- 第一种和第二种同时存在，优先第一种
// axios.get.mockImplementation(() => {
//   return Promise.resolve({ data: { username: "viking" } });
// });
// axios.get.mockReturnValue(Promise.resolve({ data: { username: "jking" } })); // !这个更方便
// axios.get.mockResolvedValue({ data: { username: "jjking" } }); // !这个更更方便

// todo 怎么实现，mock2个axios.get不一样的数据
axios.get.mockResolvedValueOnce({ data: { username: "j-king" } });
axios.get.mockResolvedValue({ data: { username: "b-king" } });

// !第二种 根目录 __mocks__ 创建 axios.js

it("test with mock modules", async () => {
  const data1 = await getUserName(1)
  const data2 = await getUserName(1)
  const data3 = await getUserName(1)
  console.log(data1,data2,data3)
  expect(axios.get).toHaveBeenCalled(); // 是否被调用
});
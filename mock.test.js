
function mockTest(shouldCall, cb) {
  cb(20);
  if (shouldCall) {
    return cb(42);
  }
}
// 在jest 创建一个Mock 函数最简单的方法就是调用jest.fn() 方法
// 测试中就使用jest.fn() 生成的mock 函数来模拟真实的回调函数
it("test with mock function", () => {
  const mockCb = jest.fn(); // !用来监函数的被调用情况。
  mockTest(true, mockCb);
  expect(mockCb).toHaveBeenCalled(); // 是否被调用
  expect(mockCb).toHaveBeenCalledWith(42); // 参数 是否被用到
  expect(mockCb).toHaveBeenCalledTimes(2); // 执行次数
  console.log("mock calls: ", mockCb.mock.calls); //  [ [ 20 ], [ 42 ] ]
  console.log("mock result0: ", mockCb.mock.results); // [{ type: 'return', value: undefined },{ type: 'return', value: undefined }]
});

it("test mock with implementation", () => {
  const mockCb = jest.fn((x) => x * 2);
  mockTest(true, mockCb);
  console.log("mock result1: ", mockCb.mock.results);
});

it("test mock with implementation 20", () => {
  const mockCb = jest.fn().mockReturnValue(20);
  mockTest(true, mockCb);
  console.log("mock result1: ", mockCb.mock.results); //  [ { type: 'return', value: 20 }, { type: 'return', value: 20 } ]
});
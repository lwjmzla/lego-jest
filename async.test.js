// !异步用 done
// callback
const fetchUser = (cb) => {
  setTimeout(() => {
    cb('hello')
  }, 100)
}

// !expect.test.js的test和这里的it 什么区别
it('test callback', (done) => {
  fetchUser((data) => {
    expect(data).toBe('hello')
    done()
  })
})

// promise
const userPromise = () => Promise.resolve('hello')
it('test promise', (done) => {
  userPromise().then((data) => {
    expect(data).toBe('hello')
    done()
  })
})

// async await
it('test async await', async () => {
  const data = await userPromise()
  expect(data).toBe('hello')
})

it("test with expect", () => {
  return expect(userPromise()).resolves.toBe("hello"); // !
});

const rejectPromise = () => Promise.reject("hello");
it("test with expect reject", () => {
  return expect(rejectPromise()).rejects.toBe("hello");
});
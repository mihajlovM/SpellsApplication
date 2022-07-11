const {
  getFromFavorites,
  setToFavorites,
  deleteFromFavorites,
} = require("./storage.js");

beforeEach(() => {
  //cleare test
});

test("should be empty localstorage test", () => {
  const keys = getFromFavorites("test");
  expect(keys).toEqual([]);
});

test("deleted", () => {
  setToFavorites("animate-objects", "test");
  deleteFromFavorites("animate-objects", "test");
  const results = getFromFavorites("test");
  expect(results).toEqual([]);
});

test("should be one saved in localstorage test", () => {
  setToFavorites("animate-objects", "test");
  const results = getFromFavorites("test");
  expect(results).toEqual(["animate-objects"]);
});

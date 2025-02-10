import profileReducer, { addPostActionCreator, deletePostActionCreator } from "./profileReducer";

let initialState = {
  posts: [
    { id: 1, title: "Post1", likeCount: 10 },
    { id: 2, title: "Post2", likeCount: 10 },
    { id: 3, title: "Post3", likeCount: 10 },
    { id: 4, title: "Post4", likeCount: 10 },
  ],
};

it("add new post should be incremented", () => {
  //1. test data
  let action = addPostActionCreator("new title post");
  //2. action
  let newState = profileReducer(initialState, action);
  //3. expectation
  expect(newState.posts).toHaveLength(5);
});
it("message of new post should be correct", () => {
  //1. test data
  let action = addPostActionCreator("new title post");
  //2. action
  let newState = profileReducer(initialState, action);
  //3. expectation
  expect(newState.posts[4].title).toBe("new title post");
});

it("after deleting length of posts should be decremented", () => {
  //1. test data
  let action = deletePostActionCreator(1);
  //2. action
  let newState = profileReducer(initialState, action);
  //3. expectation
  expect(newState.posts).toHaveLength(3);
});

it("after deleting length shouldn't be decrement if id is incorrect", () => {
  //1. test data
  let action = deletePostActionCreator(1000);
  //2. action
  let newState = profileReducer(initialState, action);
  //3. expectation
  expect(newState.posts).toHaveLength(4);
});

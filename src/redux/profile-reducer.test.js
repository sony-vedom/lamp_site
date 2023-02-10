import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi!', likesCount: 10,},
        {id: 2, message: 'It\'s my first post', likesCount: 12,},
    ],
}

test('length of post should be increment', () => {
    // test data
    let action = addPost("Hi, action creator")

    // action
    let newState = profileReducer(state, action)
    //expectation
    expect(newState.posts.length).toBe(3)
});

test('message of new post should be correct', () => {
    // test data
    let action = addPostActionCreator("Hi, action creator")
    // action
    let newState = profileReducer(state, action)
    //expectation
    expect(newState.posts[2].message).toBe("Hi, action creator")
});

test('after deleting count of message should be decrement', () => {
    // test data
    let action = deletePost(1)
    // action
    let newState = profileReducer(state, action)
    //expectation
    expect(newState.posts.length).toBe(1)
});

test("after deleting count of message shouldn't be decrement if id is not correct", () => {
    // test data
    let action = deletePost(1000)
    // action
    let newState = profileReducer(state, action)
    //expectation
    expect(newState.posts.length).toBe(2)
});




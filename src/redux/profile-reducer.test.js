import profileReducer, {addPost, deletePost} from "./profile-reducer.js";


let state = {
    posts: [
        {id: 1, post: 'I am new here', likeCount: '9'},
        {id: 2, post: 'Have you been in Greece', likeCount: '55'},
        {id: 3, post: 'I want to work', likeCount: '6'},
        {id:4,post:'I need a vacation', likeCount: '7'},
    ],
};

it('length of posts should be incremented', () => {
//    1.test data
    let action = addPost(
        'it-kamasutra.com')

    //2.action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(5)
})
it('message of new post should be correct', () => {
    // 1. test data
    let action = addPost("it-kamasutra.com");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[4].post).toBe("it-kamasutra.com");
});

it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});


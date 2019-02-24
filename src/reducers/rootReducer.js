
const initState = {
    posts: [
        { id: '0', title: 'titulo 1', body: 'Lorem ipsum'},
        { id: '1', title: 'titulo 2', body: 'Lorem ipsum'},
        { id: '2', title: 'titulo 3', body: 'Lorem ipsum'}
    ]
}

const rootReducer = (state = initState, action) => {
    console.log("Received action: ", action);

    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post =>  {return post.id !== action.id} );
        return {
            ...state,
            posts: newPosts
        };
    }

    return state;
};

export default rootReducer;
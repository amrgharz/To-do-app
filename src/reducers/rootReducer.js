const initState ={
    posts: [
        {id:'1', title:'first post', body:"this is the first post from the central state called Redux"},
        {id:'2', title:'second post', body:"this is the second post from the central state called Redux"},
        {id:'3', title:'third post', body:"this is the third post from the central state called Redux"}
    ]
}

const rootReducer = (state = initState, action) =>{
    if(action.type === "DELETE_POST"){
        let newPosts = state.posts.filter(post=>{
            return action.id !== post.id
        });
        return{
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;
export const addUser = user => dispatch => {
    const newUser ={
        user:user.user,
        eMail: user.eMail
    }
    dispatch({type:'TOGGLE_LOADING'});
    console.log(user);
    setTimeout(()=>{
        dispatch({type:'TOGGLE_LOADING'});
        dispatch({type:'TOGGLE_USER_MODAL'});
        dispatch({type:'ADD_USER',newUser});
    },3000)
}

export const showUserModal = () => dispatch => {
    dispatch({type:'TOGGLE_USER_MODAL'})
}

export const hideUserModal = () => dispatch => {
    dispatch({type:'TOGGLE_USER_MODAL'})
}

export const handleDelete = (key) => dispatch => {
    dispatch({type:'DELETE_USER',key})
}

export const handleSave = (users) => dispatch => {
    dispatch({type:'SAVE_USER',users})
}
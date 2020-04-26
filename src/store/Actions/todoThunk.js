export const addTodo = todo => dispatch => {
    console.log('Clicked addTodo',todo)
    dispatch({type:'TOGGLE_LOADING'});
    dispatch({type:'ADD_TODO',todo});
    setTimeout(()=>{
        dispatch({type:'TOGGLE_LOADING'});
        dispatch({type:'TOGGLE_TODO_MODAL'});
    },3000)
}

export const showTodoModal = () => dispatch => {
    console.log('showTodo');
    dispatch({type:'TOGGLE_TODO_MODAL'})
}

export const hideTodoModal = () => dispatch => {
    dispatch({type:'TOGGLE_TODO_MODAL'})
}
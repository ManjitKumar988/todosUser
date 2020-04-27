export const addTodo = todo => dispatch => {
    const newTodo ={
        todo:todo.todo,
        dateAdded: todo.dateAdded.format("YYYY-MM-DD HH:mm:ss")
    }
    dispatch({type:'TOGGLE_LOADING'});
    setTimeout(()=>{
        dispatch({type:'TOGGLE_LOADING'});
        dispatch({type:'TOGGLE_TODO_MODAL'});
        dispatch({type:'ADD_TODO',newTodo});
    },3000)
}

export const showTodoModal = () => dispatch => {
    dispatch({type:'TOGGLE_TODO_MODAL'})
}

export const hideTodoModal = () => dispatch => {
    dispatch({type:'TOGGLE_TODO_MODAL'})
}

export const handleDelete = (key) => dispatch => {
    dispatch({type:'DELETE_TODO',key})
}

export const handleSave = (todos) => dispatch => {
    dispatch({type:'SAVE_TODO',todos})
}
const initialState = {
    todos :[],
    isTodoModalOpen : false,
    confirmLoading :false
}

function todoReducer(state = initialState, action){
    console.log(state,action);
    switch(action.type){
        case "ADD_TODO": return {
            ...state,
            todos: [...state.todos,action.todo]
        };

        case 'TOGGLE_TODO_MODAL': return{
            ...state,
            isTodoModalOpen: !state.isTodoModalOpen
        }
        case "TOGGLE_LOADING" : return{
            ...state,
            confirmLoading:!state.confirmLoading
        }

        default : return state;
    }
}

export default todoReducer;
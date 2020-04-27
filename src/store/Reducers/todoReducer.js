const originalData = [];

for(let i=0;i<8;i++){
    originalData.push({
        key : i.toString(),
        todo : `todo ${i}`,
        dateAdded: new Date().toLocaleString()
    });
}

const initialState = {
    todos :originalData,
    isTodoModalOpen : false,
    confirmLoading :false
}


function todoReducer(state = initialState, action){
    switch(action.type){
        case "ADD_TODO": return {
            ...state,
            todos: [...state.todos,{...action.newTodo,key: state.todos.length}]
        };

        case 'TOGGLE_TODO_MODAL': return{
            ...state,
            isTodoModalOpen: !state.isTodoModalOpen
        }
        case "TOGGLE_LOADING" : return{
            ...state,
            confirmLoading:!state.confirmLoading
        }
        case "DELETE_TODO" : {
            const dataSource = state.todos;
            let newTodos = dataSource.filter(item => item.key !== action.key)
            return{
                ...state,
                todos: [...newTodos]
            }
        }

        case "SAVE_TODO" : return{
            ...state,
            todos: [...action.todos]
        }

        default : return state;
    }
}

export default todoReducer;
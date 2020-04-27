const originalData = [];

for(let i=0;i<8;i++){
    originalData.push({
        key : i.toString(),
        user : `user ${i}`,
        eMail: `user${i}.eMail.com`
    });
}

const initialState = {
    users :originalData,
    isUserModalOpen : false,
    confirmLoading :false
}


function userReducer(state = initialState, action){
    switch(action.type){
        case "ADD_USER": return {
            ...state,
            users: [...state.users,{...action.newUser,key: state.users.length}]
        };

        case 'TOGGLE_USER_MODAL': return{
            ...state,
            isUserModalOpen: !state.isUserModalOpen
        }
        case "TOGGLE_LOADING" : return{
            ...state,
            confirmLoading:!state.confirmLoading
        }
        case "DELETE_USER" : {
            const dataSource = state.users;
            let newUsers = dataSource.filter(item => item.key !== action.key)
            return{
                ...state,
                users: [...newUsers]
            }
        }

        case "SAVE_USER" : return{
            ...state,
            users: [...action.users]
        }

        default : return state;
    }
}

export default userReducer;
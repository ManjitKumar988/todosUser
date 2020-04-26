import React from 'react';
import {connect} from 'react-redux';

import { addTodo,hideTodoModal } from '../../store/Actions/todoThunk';
import {todoForm} from '../addTodo';
import ModelWrapper from './ModelWrapper';

class ModalDisplay extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            visible:false,
            confirmLoading:false,
            title:''
        }
    }

    static getDerivedStateFromProps(props,state) {

        if(props.isTodoModalOpen){
            return{
                visible : props.isTodoModalOpen,
                confirmLoading: props.confirmLoading,
                handleCancel : props.hideTodoModal,
                handleOk : props.addTodo,
                title: 'Add New To-Do',
                formData: todoForm
            }
        }else{
            return {
                visible : false
            };
        }
    }

    render(){
        return(
            <ModelWrapper {...this.state} />
        )
    }
}

const mapStateToProps = (state) =>({
    isTodoModalOpen : state.todo.isTodoModalOpen,
    confirmLoading : state.todo.confirmLoading,
});

const mapActionToProps = {
    hideTodoModal,
    addTodo
};

export default connect(mapStateToProps,mapActionToProps)(ModalDisplay);
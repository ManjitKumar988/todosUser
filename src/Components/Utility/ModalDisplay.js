import React from 'react';
import {connect} from 'react-redux';
import { Modal,Form,Button } from 'antd';

import { addTodo,hideTodoModal } from '../../store/Actions/todoThunk';
import {todoForm} from '../addTodo';
import {userForm} from '../addUser';
import { addUser,hideUserModal } from '../../store/Actions/userThunk';

class ModalDisplay extends React.Component{

    constructor(props){
        super(props);
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
        }else if(props.isUserModalOpen){
            return{
                visible : props.isUserModalOpen,
                confirmLoading:props.confirmUserLoading,
                handleCancel: props.hideUserModal,
                handleOk: props.addUser,
                title: 'Add New User',
                formData: userForm
            }
        }else{
            return {
                visible : false
            };
        }
    }

    render(){
        return(
            <Modal
                title={this.state.title}
                visible={this.state.visible}
                onCancel={this.state.handleCancel}
                footer={null}
            >
                <Form
                    onFinish={this.state.handleOk}
                >
                    {this.state.formData}
                    <Form.Item style={{textAlign:"right"}}>
                        <Button key="back" onClick={this.state.handleCancel} style={{marginRight:'10px'}}>
                        Return
                        </Button>
                        <Button key="submit" type="primary" htmlType='submit' loading={this.state.confirmLoading}>
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}

const mapStateToProps = (state) =>({
    isTodoModalOpen : state.todo.isTodoModalOpen,
    confirmLoading : state.todo.confirmLoading,
    isUserModalOpen: state.user.isUserModalOpen,
    confirmUserLoading: state.user.confirmLoading,
});

const mapActionToProps = {
    hideTodoModal,
    addTodo,
    hideUserModal,
    addUser
};

export default connect(mapStateToProps,mapActionToProps)(ModalDisplay);
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {connect} from 'react-redux';

import { Button,Table, Input, Popconfirm, Form } from 'antd';

import { showTodoModal, handleDelete, handleSave } from '../store/Actions/todoThunk';


class Todos extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: [],
            editingKey : ''
        }
    }

    EditableCell = ({
        editing,
        dataIndex,
        todo,
        titile,
        record,
        index,
        children,
        ...restProps
    }) => (
        <td {...restProps}>
            {editing ? (
                <Form.Item 
                    name={dataIndex}
                    style = {{margin:0}}
                    rules = {[
                        {
                            required : true,
                            message : `Please Input ${titile}`
                        }
                    ]}
                    >
                        <Input />
                    </Form.Item>
            ) : (
                children
            )
        }
        </td>
    );

    EditableTable = () => {
        const [form] = Form.useForm();
       
        const isEditing = record => record.key === this.state.editingKey

        const edit = record => {
            form.setFieldsValue({
                todo : '',
                dateAdded : '',
                ...record
            });
            this.setState({
                ...this.state,
                editingKey: record.key
            })
        };

        const cancel = () => {
            this.setState({
                ...this.setState,
                editingKey:''
            })
        };

        const save = async key => {
            try{
                const row = await form.validateFields();
                const newData = [...this.props.todos];
                const index = newData.findIndex(item => key === item.key);

                if(index > -1){
                    const item = newData[index];
                    newData.splice(index,1,{...item,...row});
                    this.setState({
                        
                        editingKey : ''
                    });
                    this.props.handleSave(newData);
                } else {
                    newData.push(row);
                    this.setState({
                        data: newData,
                        editingKey : ''
                    })
                }
            } catch (errInfo) {
                console.log('Validate Failed:',errInfo);
            }
        };

        const columns = [
            {
                title: 'Action',
                dataIndex: 'todo',
                width: '40%',
                editable: true
            },
            {
                title : 'Date Added',
                dataIndex: 'dateAdded',
                width: '30%',
                editable: true
            },
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (_, record) => {
                    const editable = isEditing(record);
                    return editable ? (
                        <span>
                            <a
                                onClick={() => save(record.key)}
                                style = {{marginRight:'8px'}}
                                >Save
                            </a>
                            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                                <a>Cancel</a>
                            </Popconfirm>
                        </span>
                    ) : (
                        <>
                        <a disabled = {this.state.editingKey !== ''} onClick={() => edit(record)}>Edit</a> | {' '}
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.props.handleDelete(record.key)}>
                            <a>Delete</a>
                        </Popconfirm>
                        </>
                    );
                },
            },
        ];

        const mergedColumns = columns.map( col => {
            if (!col.editable) {
                return col;
            }

            return {
                ...col,
                onCell: record => ({
                    record,
                    dataIndex : col.dataIndex,
                    title: col.title,
                    editing: isEditing(record)
                })
            }
        });

        return (
            <Form form={form} component={false}>
                <Table
                    components={{
                    body: {
                        cell: this.EditableCell,
                    },
                    }}
                    bordered
                    dataSource={this.props.todos}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                    onChange: cancel,
                    }}
                />
            </Form>
        )
    }

    render(){
        return(
            <div >
                <div style={{marginTop: '10px',marginBottom: '10px'}}>
                    <Button type='primary' onClick={this.props.showTodoModal}>Create To-Do</Button>
                </div>
                <this.EditableTable />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.todo.todos
})

const mapActionToProps = {
    showTodoModal,
    handleDelete,
    handleSave
}

export default connect(mapStateToProps,mapActionToProps)(Todos);
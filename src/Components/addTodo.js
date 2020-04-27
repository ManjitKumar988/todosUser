import { Form, Input, DatePicker } from 'antd';
import React from 'react';

export const todoForm = (
    <>
        <Form.Item
            label='Enter ToDo: '
            name='todo'
            rules={[{required:true, message:'Please Enter ToDo'}]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label='Date Added'
            name='dateAdded'
            rules={[{required:true, message:'Please Enter Date'}]}
        >
            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>
    </>
)
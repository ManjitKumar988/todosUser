import { Form, Input } from 'antd';
import React from 'react';

export const userForm = (
    <>
        <Form.Item
            label='Enter User: '
            name='user'
            rules={[{required:true, message:'Please Enter User Name'}]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label='E - Mail: '
            name='eMail'
            rules={[{type:'email'},{required:true, message:'Please Enter Email'}]}
        >
            <Input />
        </Form.Item>
    </>
)
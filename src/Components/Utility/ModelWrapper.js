import React from 'react';
import { Modal,Form } from 'antd';



const ModelWrapper = (props) => {
    const form=Form.useForm();
    console.log(props,form)
    return(
        <Modal
            title={props.title}
            visible={props.visible}
            // onOk = {props.handleOk}
            confirmLoading={props.confirmLoading}
            onCancel={props.handleCancel}
            okText = 'Save'
            onOk ={() => {
                form
                    .validateFields()
                    .then(values => {
                        form.resetFields();
                        props.handleOk(values)
                    })
                    .catch(info => {
                        console.log('Validation Failed',info);
                    })
            }}
        >
            <Form
                form={form}
                name='form_in_modal'
                layout='vertical'
            >
                {props.formData}
            </Form>
        </Modal>
    )
}

export default ModelWrapper;
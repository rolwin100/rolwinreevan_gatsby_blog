import React from 'react'
import Header from '../../components/PageLayout/Header'
import { Layout, Row, Col, Form, Input, Button } from 'antd'

import SidebarWrapper from '../../components/PageLayout/Sidebar'


const validateMessages = {
    required: 'This field is required!',
    types: {
        email: 'Not a valid email!',
    },
};

const Contact = () => {
    const onFinish = values => {
        console.log(values);
    };

    return (
        <Layout className='outerPadding'>
            <Layout className='container'>
                <Header />
                <SidebarWrapper>
                    <div>
                        <h1 className="titleSeparate">Contact</h1>
                    </div>
                    <Row gutter={[40, 20]}>
                        <Col sm={24} md={24} lg={12}>
                            <img src='../../contact.png' alt='contact'
                                style={{
                                    width: '100%',
                                    borderRadius: '11px'
                                }}
                            />
                        </Col>
                        <Col sm={24} md={24} lg={12} style={{width:'100%'}}>
                                <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                                    <Form.Item name={['user', 'name']} rules={[{ required: true }]}>
                                        <Input size='large' placeholder='Full Name *' />
                                    </Form.Item>
                                    <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]}>
                                        <Input size='large' placeholder='Email' />
                                    </Form.Item>
                                    <Form.Item name={['user', 'introduction']} rules={[{ required: true }]}>
                                        <Input.TextArea size='large' rows={7} placeholder='Description *' />
                                    </Form.Item>
                                    <Form.Item >
                                        <Button type="primary" shape="round" size="large" htmlType="submit" style={{ background: '#304CFD' }}>
                                            SUBMIT
                                    </Button>
                                    </Form.Item>
                                </Form>
                        </Col>
                    </Row>
                </SidebarWrapper>
            </Layout>
        </Layout>
    )
}

export default Contact

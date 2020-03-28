import React from 'react'
import Header from '../../components/PageLayout/Header'
import { Layout, Row, Col } from 'antd'
import SidebarWrapper from '../../components/PageLayout/Sidebar'
import ContactForm from '../../components/PageFragments/ContactForm'

const Contact = () => {

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
                                className='widthFull contactImgBorder'
                            />
                        </Col>
                        <ContactForm/>
                    </Row>
                </SidebarWrapper>
            </Layout>
        </Layout>
    )
}

export default Contact

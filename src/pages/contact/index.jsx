import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import ContactForm from '../../components/PageFragments/ContactForm';
import SEO from '../../components/Seo';

const Contact = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Contact"
        description="Hello folks Rolwin here. You can contact me through the contact form on this page.
                    Please feel free to contact me, don't be shy guys, just remember Rolwin is always open to talk about web
                    technologies especially Javascript techstacks. Currently I'm a part of Gatsby organization on github.
                    Find me on github - rolwin100."
        path="/contact"
        keywords={['Rolwin', 'Reevan', 'Monteiro', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby', 'technology']}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Contact</h1>
        </div>
        <Row gutter={[40, 20]}>
          <Col sm={24} md={24} lg={12}>
            <img
              src="../../contact.png"
              alt="contact"
              className="widthFull contactImgBorder"
            />
          </Col>
          <ContactForm />
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Contact;

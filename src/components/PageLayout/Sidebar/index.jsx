import React from 'react';
import {
  Affix, Layout, Row, Col,
} from 'antd';
import FeatherIcon from 'feather-icons-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { globalHistory } from '@reach/router';
import style from './sidebar.module.less';
import { useWindowSize } from '../../../utils/hooks';
import Config from '../../../../config';
import {
  LinkedinOutlined,
  TwitterOutlined,
  MediumOutlined,
  GithubOutlined,
  MailOutlined
} from '@ant-design/icons';

import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});


const { Content } = Layout;
const {
  github, linkedin, twitter, medium, spotify
} = Config.social;

const DomContent = () => (
  <aside>
    <div className={style.profileAvatar} />
    <div className={`${style.name} centerAlign`}>
      <div className={`${style.boxName} centerAlign`}>
        <h2>
          Mehdi
          {' '}
          <span>OUAZZA</span>
        </h2>
      </div>
      <div className={`${style.badge} ${style.badgeGray}`}>Data Engineer</div>
      <div className={`centerAlign box ${style.iconeBox}`}>
        <div className={style.icone}><a href={github} target="_blank" label="button" rel="noopener noreferrer"><GithubOutlined /></a></div>
        <div className={style.icone}><a href={linkedin} target="_blank" label="button" rel="noopener noreferrer"><LinkedinOutlined /></a></div>
        <div className={style.icone}><a href={medium} target="_blank" label="button" rel="noopener noreferrer"><MediumOutlined /> </a></div>
        <div className={style.icone}><a href={twitter} target="_blank" label="button" rel="noopener noreferrer" ><TwitterOutlined /></a></div>
      </div>
      <ul className={`box ${style.badge} contactBlock`}>
        <li className={`${style.contactBlockItem}`}>
          <span><FeatherIcon size="19" icon="map-pin" /></span>
          {' '}
&nbsp; &nbsp; Berlin, Germany
        </li>
        <li className={`${style.contactBlockItem}`}>
          <span><MailOutlined /></span>
          {' '}
&nbsp; &nbsp;
          <a
            href="mailto:mehdi@mehd.io"
            target="_top"
          >
            <span className={style.emailHider}>@</span>
          </a>
        </li>
      </ul>
      <div className={style.resumeDownload}>
        <a href="https://drive.google.com/u/0/uc?id=1uOCLK_t5SammZFb4dSaa4gbQxWd02HvB&export=download" download target="_blank">Download CV</a>
      </div>
    </div >
  </aside >
);


const Sidebar = (props) => {
  const [width] = useWindowSize();
  const { children } = props;
  const { pathname } = globalHistory.location;
  let domContent = <DomContent />;
  if (width > 997) {
    domContent = (
      <Affix offsetTop={0}>
        <DomContent />
      </Affix>
    );
  }
  if (width < 768) {
    domContent = <></>;
    if (pathname === '/') {
      domContent = <DomContent />;
    }
  }
  return (
    <>
      <Layout>
        <Content className={`${style.content} ${style.background}`}>
          <Row>
            <Col sm={24} md={9} lg={6} className={style.sidebarContent}>
              {domContent}
            </Col>
            <Col sm={24} md={15} lg={18}>
              <Layout className={`${style.background} ${style.boxContent} borderRadiusSection`}>
                {children}
              </Layout>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export const Sidebar404 = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Content className={`${style.content} ${style.background} `}>
        <Row>
          <Col sm={24} md={24} lg={24}>
            <Layout className={`${style.background} ${style.boxContent} ${style.sideBar404Radius}`}>
              {children}
            </Layout>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Sidebar;

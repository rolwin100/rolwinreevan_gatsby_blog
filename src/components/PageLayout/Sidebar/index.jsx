import React from 'react'
import { Affix, Layout, Row, Col } from 'antd'
import FA from 'react-fontawesome'
import style from './sidebar.module.less'
import FeatherIcon from 'feather-icons-react'
import { useWindowSize } from '../../../hooks'

const { Content } = Layout

const DomContent = (props) =>

    <aside>
        <div className={style.profileAvatar}></div>
        <div className={`${style.name} centerAlign`}>
            <div className={`${style.boxName} centerAlign`}>
                <h2>
                    Rolwin <span>Reevan</span>
                </h2>
            </div>
            <div className={`${style.badge} ${style.badgeGray}`}>Software Engineer</div>
            <div className='centerAlign box'>
                <FA name='facebook-f' />
                <FA name='twitter' />
                <FA name='github' />
                <FA name='instagram' />
            </div>
            <ul className={`box ${style.badge} contactBlock`}>
                <li className={`${style.contactBlockItem}`}><span><FeatherIcon size='19' icon='calendar' /> </span>&nbsp; &nbsp; May 9,1995</li>
                <li className={`${style.contactBlockItem}`}><span><FeatherIcon size='19' icon='map-pin' /></span> &nbsp; &nbsp; Bangalore, India</li>
                <li className={`${style.contactBlockItem}`}><span><FeatherIcon size='19' icon='mail' /></span> &nbsp; &nbsp; <a href="mailto:rolwinmonteiro@gmail.com" target="_top">rolwinmonteiro@gmail.com</a></li>
                <li className={`${style.contactBlockItem}`}><span><FeatherIcon size='19' icon='smartphone' /></span> &nbsp; &nbsp; +91 8762132929</li>
            </ul>
        </div>
    </aside>


const Sidebar = (props) => {
    const [width] = useWindowSize();
    return <>{
        width > 997 ?
            <Layout >
                <Content className={`${style.content} ${style.background}`}>
                    <Row>
                        <Col sm={24} md={9} lg={6} className={style.sidebarContent}>
                            <Affix offsetTop={0} >
                                <DomContent />
                            </Affix>
                        </Col>
                        <Col sm={24} md={15} lg={18}>
                            {props.children}
                        </Col>
                    </Row>
                </Content>
            </Layout> :
            <Layout >
                <Content className={`${style.content} ${style.background}`}>
                    <Row>
                        <Col sm={24} md={9} lg={6} className={style.sidebarContent}>
                            <DomContent />
                        </Col>
                        <Col sm={24} md={15} lg={18}>
                            {props.children}
                        </Col>
                    </Row>
                </Content>
            </Layout>
    }
    </>
}

export default Sidebar
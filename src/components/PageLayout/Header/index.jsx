import  React  from 'react';
import { Layout } from 'antd'
import 'font-awesome/less/font-awesome.less'
import  style from './header.module.less'
import '../../../styles/global.less'

export default () => 
        <Layout className={ style.navWrap }>
                <ul className={ style.nav }>
                    <li className={ style.navItem }><a href='#about'>About</a></li>
                    <li className={ style.navItem }><a href='#about'>Contact</a></li>
                    <li className={ style.navItem }><a href='#about'>Blog</a></li>
                    <li className={ style.navItem }><a href='#about'>Resume</a></li>
                </ul>
        </Layout>
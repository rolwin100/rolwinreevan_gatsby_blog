import  React  from 'react'
import { Link } from 'gatsby'
import { Layout } from 'antd'
import 'font-awesome/less/font-awesome.less'
import  style from './header.module.less'
import '../../../styles/global.less'
import Config from '../../../../config'
import Utils from '../../../utils'

export default () => 
        <Layout className={ style.navWrap }>
                <ul className={ style.nav }>
                    <li className={ style.navItem }><Link to={Utils.resolvePageUrl(Config.pages.home)} activeClassName={style.anchorActive}>About</Link></li>
                    <li className={ style.navItem }><Link to={`/${Utils.resolvePageUrl(Config.pages.contact)}`} activeClassName={style.anchorActive}>Contact</Link></li>
                    <li className={ style.navItem }><Link to={`/${Utils.resolvePageUrl(Config.pages.blog)}`} activeClassName={style.anchorActive}>Blog</Link></li>
                    <li className={ style.navItem }><a href='#about'>Resume</a></li>
                </ul>
        </Layout>
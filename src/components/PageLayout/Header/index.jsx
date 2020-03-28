import React from 'react'
import { Link } from 'gatsby'
import { Layout } from 'antd'
import { useState } from 'react'
import 'font-awesome/less/font-awesome.less'
import style from './header.module.less'
import '../../../styles/global.less'
import Config from '../../../../config'
import Utils from '../../../utils/pageUtils'
import { useWindowSize } from '../../../hooks'



export default ()=> {
                let [menu, setMenu ] = useState(false)

                const [ width ] = useWindowSize()
                const toggleMenu = ()=>{
                        if(width <= 768)
                                menu ? setMenu( false ) : setMenu( true) 
                }
                return <>
                        <div className={style.circleMenu} onClick={toggleMenu}>
                                <div className={`${style.hamburger} ${ menu ? style.menuIcon :null }`}>
                                        <div className={style.line}></div>
                                        <div className={style.line}></div>
                                        <div className={style.hamburgerText}>MENU</div>
                                </div>
                        </div>
                        <Layout className={`${style.navWrap} ${ menu ? null : style.hidden} ${ menu ? style.openMenu : null}`}>
                                <div className={style.backgroundDiv}>
                                        <ul className={style.nav}>
                                                <li className={style.navItem}>
                                                        <Link to={Utils.resolvePageUrl(Config.pages.home)} onClick={toggleMenu} activeClassName={style.anchorActive}>About</Link>
                                                </li>
                                                <li className={style.navItem}>
                                                        <Link to={`/${Utils.resolvePageUrl(Config.pages.contact)}`} onClick={toggleMenu} activeClassName={style.anchorActive}>Contact</Link>
                                                </li>
                                                <li className={style.navItem}>
                                                        <Link to={`/${Utils.resolvePageUrl(Config.pages.blog)}`}  onClick={toggleMenu} activeClassName={style.anchorActive}>Blog</Link>
                                                </li>
                                                <li className={style.navItem}><Link to={`/${Utils.resolvePageUrl(Config.pages.resume)}`}  onClick={toggleMenu} activeClassName={style.anchorActive}>Resume</Link></li>
                                        </ul>
                                </div>
                        </Layout>
                </>
        }

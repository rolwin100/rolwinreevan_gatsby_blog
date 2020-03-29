import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Layout } from 'antd'
import 'font-awesome/less/font-awesome.less'
import style from './header.module.less'
import '../../../styles/global.less'
import Config from '../../../../config'
import Utils from '../../../utils/pageUtils'
import { useWindowSize } from '../../../hooks'



export default ()=> {
                let [menu, setMenu ] = useState(false)
                let [links, setLinks ] = useState(
                        { 
                                home: Utils.resolvePageUrl(Config.pages.home), 
                                contact: `/${Utils.resolvePageUrl(Config.pages.contact)}`,
                                blog: `/${Utils.resolvePageUrl(Config.pages.blog)}`,
                                resume: `/${Utils.resolvePageUrl(Config.pages.resume)}`
                        })

                const [ width ] = useWindowSize()
                const toggleMenu = ()=>{
                        let hashLinks = {}
                        if(width !== 0 && width <= 768){
                                menu ? setMenu( false ) : setMenu( true)
                                for (const key in links) {
                                        hashLinks[key] = `${links[key].split('#')[0]}#${key}`
                                }
                                setLinks( hashLinks )
                        }
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
                                                        <Link to={links.home} onClick={toggleMenu} activeClassName={style.anchorActive}>About</Link>
                                                </li>
                                                <li className={style.navItem}>
                                                        <Link to={links.contact} onClick={toggleMenu} activeClassName={style.anchorActive}>Contact</Link>
                                                </li>
                                                <li className={style.navItem}>
                                                        <Link to={links.blog}  onClick={toggleMenu} activeClassName={style.anchorActive}>Blog</Link>
                                                </li>
                                                <li className={style.navItem}><Link to={links.resume}  onClick={toggleMenu} activeClassName={style.anchorActive}>Resume</Link></li>
                                        </ul>
                                </div>
                        </Layout>
                </>
        }

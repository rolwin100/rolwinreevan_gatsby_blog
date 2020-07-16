import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Layout } from 'antd';
import 'font-awesome/less/font-awesome.less';
import style from './header.module.less';
import '../../../styles/global.less';
import { useWindowSize } from '../../../utils/hooks';
import { DataWrapper } from '../../TinaCms/DataWrapper';
import Utils from '../../../utils/pageUtils';

export default () => {
  const [menu, setMenu] = useState(false);

  const [width] = useWindowSize();
  const toggleMenu = () => {
    if (width !== 0 && width <= 768) {
      if (menu) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    }
  };

  const navData = useStaticQuery(graphql`
    query navQuery {
      settingsJson(fileRelativePath: { eq: "/cms/settings/menu.json" }) {
        ...nav
      }
    }
  `);

  return (
    <DataWrapper>
      <div className={style.circleMenu} role="button" tabIndex="0" onKeyDown={toggleMenu} onClick={toggleMenu}>
        <div className={`${style.hamburger} ${menu ? style.menuIcon : null}`}>
          <div className={style.line} />
          <div className={style.line} />
          <div className={style.hamburgerText}>MENU</div>
        </div>
      </div>
      <Layout className={`${style.navWrap} ${menu ? null : style.hidden} ${menu ? style.openMenu : null}`}>
        <div className={style.backgroundDiv}>
          <ul className={style.nav}>
            {
              navData.settingsJson.menuItems.map((item) => (
                <li key={item.label} className={style.navItem}>
                  <Link
                    to={Utils.resolvePageUrl(item.link)}
                    onClick={toggleMenu}
                    activeClassName={style.anchorActive}
                  >
                    { item.label }
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </Layout>
    </DataWrapper>
  );
};

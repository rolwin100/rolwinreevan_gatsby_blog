/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useGlobalJsonForm } from 'gatsby-tinacms-json';
import NavForm from '../Forms/NavForm';

export const navFragment = graphql`
  fragment nav on SettingsJson {
    menuItems {
      link
      label
    }
  }
`;

export const DataWrapper = ({ children }) => {
  const navData = useStaticQuery(graphql`
    query PageLayoutQuery {
      nav: settingsJson(
        fileRelativePath: { eq: "/cms/settings/menu.json" }
      ) {
        ...nav

        rawJson
        fileRelativePath
      }
    }
  `);

  useGlobalJsonForm(navData.nav, NavForm);
  return (
    <>
      {children}
    </>
  );
};

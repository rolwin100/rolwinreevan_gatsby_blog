/* Vendor imports */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
/* App imports */
import Config from '../../../config';
import Utils from '../../utils/pageUtils';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    file(name: { eq: "facebook-icon" }) {
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`;

function SEO({
  title,
  description,
  path,
  lang,
  keywords,
  contentType,
  imageUrl,
  translations,
  meta,
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaKeywords = keywords && keywords.length > 0
          ? { name: 'keywords', content: keywords.join(', ') }
          : [];
        const pageUrl = Utils.resolvePageUrl(
          Config.siteUrl,
          Config.pathPrefix,
          path,
        );
        const metaImageUrl = Utils.resolveUrl(
          Config.siteUrl,
          imageUrl || data.file.childImageSharp.fixed.src,
        );

        return (
          <Helmet
            title={title} // Page title
            titleTemplate={`%s | ${Config.siteTitle}`}
            meta={
              [
                { name: 'description', content: description }, // Page description
                /* Open Graph */
                { property: 'og:title', content: title },
                { property: 'og:type', content: contentType || 'website' },
                { property: 'og:url', content: pageUrl },
                { property: 'og:description', content: description },
                { property: 'og:image', content: metaImageUrl },
                { property: 'og:image:alt', content: description },
                { property: 'og:site_name', content: Config.siteTitle },
                { property: 'og:locale', content: lang || 'en_US' },
                /* Twitter card */
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: title },
                { name: 'twitter:description', content: description },
                { name: 'twitter:image', content: metaImageUrl },
                { name: 'twitter:image:alt', content: description },
                { name: 'twitter:site', content: Config.author },
                { name: 'twitter:creator', content: Config.author },
              ]
                .concat(metaKeywords) // Keywords
                .concat(meta || []) // Other provided metadata
            }
            link={[
              { rel: 'canonical', href: pageUrl }, // Canonical url
            ]
              // Translated versions of page
              .concat(
                translations
                  ? translations.map((obj) => ({
                    rel: 'alternate',
                    hreflang: obj.hreflang,
                    href: Utils.resolvePageUrl(
                      Config.siteUrl,
                      Config.pathPrefix,
                      obj.path,
                    ),
                  }))
                  : [],
              )}
          />
        );
      }}
    />
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  lang: PropTypes.string,
  contentType: PropTypes.oneOf(['article', 'website']),
  imageUrl: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  translations: PropTypes.arrayOf(
    PropTypes.shape({
      hreflang: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ),
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      property: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

SEO.defaultProps = {
  lang: 'en_US',
  contentType: 'website',
  imageUrl: null,
  keywords: [],
  translations: [],
  meta: [],
};

export default SEO;

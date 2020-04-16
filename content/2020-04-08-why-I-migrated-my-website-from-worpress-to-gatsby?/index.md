---
title: Why I migrated my website from wordpress to gatsby? (gatsby vs wordpress)
tags: [ javascript, gatsby, typescript ]
date: 2020-04-08T05:25:44.226Z
path: blog/why-i-migrated-my-website-from-wordpress-to-gatsby
cover: ./gatsby-wordpress.jpg
excerpt: While building a CMS for blogging, worpdress is the most commonly used platform. Gatsby has also topped the list recently. This article talk which one to go for and why I shifted from wordpress to gatsby. Is gatsby better than wordpress is the question I would be answering.  
---

[`Wordpress`](https://wordpress.org/) is an awesome 😍 platform for blogging 📖 and dynamic websites that powers more than 29% of the website on the internet 🌐. Previously I used to run my website on Wordpress. But recently I migrated my website and blog from Wordpress to Gatsby.

## So is wordpress bad and I decided to migrate my website 🤔 ? 

No absolutely not. That would be stupid to say Wordpress is bad. In fact, I believe it is a wonderful platform to build websites without much technical knowledge. `Wordpress` is powered by `PHP`. It's a full-fledged platform that is good for blogging, marketing, creating dynamic websites and even supports eCommerce websites for small businesses. There are many plugins that are available for WordPress for different purposes and can be integrated with it very well.

## What is wordpress ?

Wordpress is an `opensource` content management system that is built on top of `PHP` and a `MySql` database. It gives a lot of flexibility to build dynamic websites and there are millions of themes and plugins available for Wordpress that makes it easy for anyone to build websites without much technical knowledge. You can get your website rolling over a night by using the ready made themes that are available out there. There are plenty of `Wordpress` hosting systems out there that take care of your deployment as well.

## Then What's Gatsby ?

Gatsby is a static page generator that takes data from various data sources and produces `graphql` API's that can be consumed by the frontend and once the build is taken the static pages are generated for the dynamic data. More over it's a framework built on top of `ReactJS` that takes care of lot of challenges while building `react` application. The most common data source that I use is transforming the markdowns into graphql data using the `gatsby-transformer-remark` plugin. Gatsby can also take data from sources like Wordpress and other CMS like drupal, contentful, etc. In short Gatsby’s data plugin ecosystem lets you build sites with the data you want — from one or many sources: get data from SaaS services, headless CMSs, APIs, databases, your file system, and more directly into your pages using GraphQL .



![](./gatsby-deploy.png)

Gatsby has a lot of plugins that can be used for various other purposes. But you need to be a bit of a coding geek to work with `gatsby`.

## Why I migrated to gatsby?

1.  ### Performance in mind

    The first reason was keeping the performance of my web application in mind. Since gatsby is a single page application and serves mostly statically generated pages the performance is quite good with minimal deployment charges. Gatsby also optimizes the images that it serves. It also takes care of `prefetch` and `preload` of data.

2. ### Cost of deployment

    The cost of deploying a gatsby application is way cheaper than a WordPress application. `Netlify` provides a free deployment plan with `HTTPS` encryption. Suppose we are hosting a Wordpress application we need considerably a good server with a `MySql` database. So the cost will be a bit higher for this setup.

3. ### I'm a developer

    Since I'm a developer I could build the gatsby theme from scratch with a bit of `Javascript` coding. I automated the deployment process using `Netlify` and `Github`. So whenever I need to deploy some changes I just need to commit to my master branch and the deployment will be taken care of by the CI/CD setup of `Netlify`. I'm also comfortable writing the markdowns for my blog which is dynamic.

4. ### SEO is also taken care

    One important thing for me was branding my name `Rolwin Reevan` over the internet. For this all the factors of SEO had to be taken care which is a bit challenging. Since gatsby renders static pages the performance is good, which enhances the `SEO` as well. There are plugins for SEO in gatsby. Server-Side-Rendering (`SSR`) is also supported by gatsby.

5. ### Gatsby satisfies my use-case

    Most importantly gatsby was satisfying my use-case with minimal cost. My use-case before building my website was a static landing page and a dynamic blog. Even `Wordpress` satisfies this use-case very well, but like I told the cost of deployment is higher for WordPress than a gatsby application and moreover I didn't want all the features that WordPress provides.

## When to go for wordpress and when to go for gatsby?

So It depends on the use-case when to go for Gatsby and When to go for Wordpress

1. If you have a team of more than 5 non-technical people working for some content marketing company then going for WordPress will be a good idea because gatsby involves a bit of technical work. If you are a javascript developer or a full stack web developer who wants to just build his portfolio and have a blog then gatsby is a good idea if you are maintaining the website by yourself.

2. If cost is not much of your concern and ease of use is your concern then going for wordpress is a good idea. Because Wordpress involves a lot of plugins like wp-bakery, yoast, etc, that makes drag and drop functionality and SEO easier. If cost is your concern and you are ready for some little hard work you can go for Gatsby.

3. If you are planning for an online e-commerce application for small businesses with email marketing then Wordpress is probably a better solution than Gatsby I believe. The reason is you can build an e-commerce website easily with Wordpress. There are many plugins and themes that are available to set up an e-commerce website with Wordpress and you can easily keep track of your leads. The most commonly used Wordpress plugin for e-commerce application is `woocommerce`.

4. SEO and Performance in mind with minimal cost then `Gatsby` is the solution you can build a SPA and PWA applications easily with `Gatsby`. Even Wordpress has some cool plugins like `Yoast` for SEO and there are some very good flexibility while using Wordpress enhancing the SEO without much technical knowledge but you need a very good server to keep the performance of the `Wordpress` site up. If SEO is your concern then you should make sure that your site renders in less then 3 seconds.

## Building a Gatsby application

There are plenty of different ways to build gatsby websites. To start with you can look into official [gatsby docs](https://www.gatsbyjs.org/docs/) and the tutorials on their [site](https://www.gatsbyjs.org/tutorial/). There are also a list of [plugins](https://www.gatsbyjs.org/plugins/) that can help you to develop your site faster. For more comparision about Wordpress with Gatsby you can check this [link](https://www.gatsbyjs.org/features/cms/). You can go through the starters which are available over the internet. I have also open-sourced my website [Rolwin Reevan](https://rolwinreevan.com) on my [Github page](https://github.com/rolwin100/rolwinreevan_gatsby_blog). You can use this starter to build your portfolio. I have put in a lot of effort to build this starter. So please make sure you give a star for this repo.














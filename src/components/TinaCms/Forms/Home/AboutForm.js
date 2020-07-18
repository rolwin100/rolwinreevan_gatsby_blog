const AboutForm = {
  id: 'aboutForm',
  key: 'aboutForm',
  label: 'About',
  fields: [
    {
      key: 'about',
      name: 'rawJson.aboutBlock',
      label: 'About Section',
      component: 'group',
      fields: [
        {
          name: 'title',
          component: 'text',
          label: 'Title',
        },
        {
          name: 'about',
          component: 'html',
          label: 'About',
        },
      ],
    },
  ],
};

export default AboutForm;

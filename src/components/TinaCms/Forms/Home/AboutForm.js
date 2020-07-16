const data = require('../../../../../cms/pages/home.json');

const AboutForm = {
  id: 'aboutForm',
  label: 'About Form',
  fields: [
    {
      name: 'para1',
      label: 'para1',
      component: 'markdown',
    },
    {
      name: 'para2',
      label: 'para2',
      component: 'markdown',
    },
  ],
  initialValues: {
    para1: data.about.para1,
    para2: data.about.para2,
  },
  onSubmit: (formData) => {
    // save the new form data
    console.log(formData);
  },
};
export default AboutForm;

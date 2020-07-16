const NavForm = {
  label: 'Navbar Menu',
  fields: [
    {
      label: 'Main Menu',
      name: 'rawJson.menuItems',
      component: 'group-list',
      itemProps: (item) => ({
        label: item.label,
      }),
      fields: [
        {
          label: 'Label',
          name: 'label',
          component: 'text',
          parse(value) {
            return value || '';
          },
        },
        {
          label: 'Link',
          name: 'link',
          component: 'text',
          parse(value) {
            return value || '';
          },
        },
      ],
    },
  ],
};
export default NavForm;

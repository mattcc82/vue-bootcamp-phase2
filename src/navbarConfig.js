const navbarConfig = {
  brandTitle: 'Bootcamp',
  bsType: 'dark',
  bsVariant: 'danger',
  navLinks: [{
    text: 'Home',
    href: '#'
  },
  {
    text: 'Link 1',
    href: '#'
  },
  {
    text: 'Link 2',
    href: '#'
  }
  ],
  userMenu: {
    buttonContent: 'User',
    userMenuItems: [{
      text: 'Profile',
      link: '#'
    },
    {
      text: 'Reset Password',
      link: '#'
    },
    {
      text: 'Sign Out',
      link: '#'
    }
    ]
  },
  hasBrand: true,
  hasLinks: true,
  hasSearch: true,
  hasUser: true
}

export { navbarConfig }

const currentUserId = 1

const users = [{
  id: 1,
  handle: 'jdoe'
},
{
  id: 2,
  handle: 'ksmith'
},
{
  id: 3,
  handle: 'bpullman'
}]

const appConfig = {
  brandTitle: 'Bootcamp',
  bsType: 'dark',
  bsVariant: 'danger',
  navLinks: [{
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  }
  ],
  userMenu: {
    buttonContent: users.filter(function (user) { return user.id === currentUserId })[0].handle,
    userMenuItems: [{
      text: 'Available Profiles',
      link: '/user'
    },
    {
      text: 'Current User',
      link: `/user/${currentUserId}`
    }
    ]
  },
  hasBrand: true,
  hasLinks: true,
  hasSearch: true,
  hasUser: true
}

export { currentUserId, users, appConfig }

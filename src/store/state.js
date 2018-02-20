let state = {
  title: "CRUD",
  locale: 'pl',
  locales: [
    {name: 'pl', text: 'Polski'},
    {name: 'en', text: 'English'}
  ],
  module: null,
  page: null,
  drawer: true,
  activeModule: "",
  profileDialog: false,
  superuser: false,
  primaryColor: 'green',
  secondaryColor: 'grey darken-4',
  historyPermission: true,
  alert: {
    show: false,
    color: '',
    text: '',
    icon: ''
  },
}

export default state
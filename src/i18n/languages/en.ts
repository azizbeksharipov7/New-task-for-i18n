const en = {
  common: {
    hello: 'Hello, {name}!',
  },
  menu: {
    home: 'Home',
    about: 'About',
    contact: 'Contact',
  },
  form: {
    username: {
      label: 'Username',
      placeholder: 'Enter your username',
    },
    password: {
      label: 'Password',
      placeholder: 'Enter your password',
    },
    submit: 'Submit',
  },
  profile: {
    title: 'User Profile',
    gender: {
      label: 'Gender',
      male: 'Male',
      female: 'Female',
    },
    online: '{gender} is online'
  },
notifications: {
    zero: 'You have no notifications',
    one: 'You have {count} notification',
    many: 'You have {count} notifications',
  },
};

export default en;
export type EnTranslations = typeof en;
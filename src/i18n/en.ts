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
  items: {
    zero: 'No items',
    one: '1 item',
    many: '{count} items'
  }
};

export default en;
export type EnTranslations = typeof en;
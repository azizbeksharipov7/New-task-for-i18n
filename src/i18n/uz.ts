import type { EnTranslations } from './en';
const uz:EnTranslations = {
  common: {
    hello: 'Salom, {name}!',
  },
  menu: {
    home: 'Bosh sahifa',
    about: 'Biz haqimizda',
    contact: 'Aloqa',
  },
  form: {
    username: {
      label: 'Foydalanuvchi nomi',
      placeholder: 'Foydalanuvchi nomini kiriting',
    },
    password: {
      label: 'Parol',
      placeholder: 'Parolni kiriting',
    },
    submit: 'Yuborish',
  },
  profile: {
    title: 'Foydalanuvchi profili',
    gender: {
      label: 'Jinsi',
      male: 'Erkak',
      female: 'Ayol',
    },
    online: '{gender} onlayn'
  },
  items: {
    zero: 'Hech narsa yo‘q',
    one: '1 ta element',
    many: '{count} ta element'
  }
};
export default uz;
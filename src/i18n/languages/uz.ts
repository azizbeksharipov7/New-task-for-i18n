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
notifications: {
    zero: 'Sizda hech qanday bildirishnoma yo‘q',
    one: 'Sizda {count} ta bildirishnoma bor',
    many: 'Sizda {count} ta bildirishnoma bor',
  },
};
export default uz;
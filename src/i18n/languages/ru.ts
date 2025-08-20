import type { EnTranslations } from './en';

const ru: EnTranslations = {
 common: {
    hello: 'Привет, {name}!',
  },
  menu: {
    home: 'Главная',
    about: 'О нас',
    contact: 'Контакты',
  },
  form: {
    username: {
      label: 'Имя пользователя',
      placeholder: 'Введите имя пользователя',
    },
    password: {
      label: 'Пароль',
      placeholder: 'Введите пароль',
    },
    submit: 'Отправить',
  },
  profile: {
    title: 'Профиль пользователя',
    gender: {
      label: 'Пол',
      male: 'Мужчина',
      female: 'Женщина',
    },
    online: '{gender} в сети'
  },
  notifications: {
    zero: 'У вас нет уведомлений',
    one: 'У вас {count} уведомление',
    many: 'У вас {count} уведомлений',
  },
};

export default ru;
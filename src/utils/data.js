import menuImage from '../images/riccardo-bergamini.jpg'
import serviceImage from '../images/dmitriy-frantsev.jpg'
import barImage from '../images/kobby-mendez.jpg'
import { InstaIcon, MailIcon, PhoneIcon, VkIcon, YaIcon } from '../ui/icons'

export const navMenuItems = [
  {
    name: 'Меню',
    slug: 'menu',
    url: '/menu',
    image: menuImage,
  },
  {
    name: 'Карта бара',
    slug: 'bar',
    url: '/bar',
    image: barImage,
  },
  {
    name: 'Информация',
    slug: 'service',
    url: '/service',
    image: serviceImage,
  },
]

export const socialLinks = [
  {
    name: 'Яндекс-профиль',
    slug: 'Yandex-profile',
    url: 'https://yandex.ru/profile/1157770596',
    logo: <YaIcon width="60" height="60"/>,
  },
  {
    name: 'Instagram',
    slug: 'insta-profile',
    url: 'https://www.instagram.com/ostrov_sushi/',
    logo: <InstaIcon width="60" height="60" />,
  },
  {
    name: 'VK',
    slug: 'Vk-profile',
    url: 'https://vk.com/ostrovnur',
    logo: <VkIcon width="60" height="60" />,
  },
]

export const contacts = [
  {
    name: 'Телефон +79220573700',
    slug: 'tel',
    url: 'tel:+79220573700',
    logo: <PhoneIcon width="60" height="60"/>,
  },
  {
    name: 'Почта',
    slug: 'email',
    url: 'mailto:nursushi@gmail.com',
    logo: <MailIcon width="60" height="60" />,
  },
]

export const TIPS_URL = 'https://chaevieprosto.ru/pay309670';
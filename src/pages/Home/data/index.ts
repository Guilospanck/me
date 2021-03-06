import { BadgeInfo, BadgeType, DEFAULT_COLOR, Projects, ProjectType } from '../types'

export const BADGE_INFO = (): BadgeInfo => ({
  [BadgeType.GITHUB]: {
    src: (color: string) => `https://img.shields.io/badge/GitHub-100000?color=%23${color}&style=for-the-badge&logo=github&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${color}`,
    href: 'https://github.com/Guilospanck',
    color: DEFAULT_COLOR,
    title: 'GitHub'
  },
  [BadgeType.TWITTER]: {
    src: (color: string) => `https://img.shields.io/badge/Twitter-1DA1F2?color=%23${color}&style=for-the-badge&logo=twitter&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${color}`,
    href: 'https://twitter.com/Guilospanck',
    color: DEFAULT_COLOR,
    title: 'Twitter'
  },
  [BadgeType.LINKEDIN]: {
    src: (color: string) => `https://img.shields.io/badge/LinkedIn-0077B5?color=%23${color}&style=for-the-badge&logo=linkedin&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${color}`,
    href: 'https://www.linkedin.com/in/guilhermerpereira/',
    color: DEFAULT_COLOR,
    title: 'LinkedIn'
  },
  [BadgeType.MEDIUM]: {
    src: (color: string) => `https://img.shields.io/badge/Medium-12100E?color=%23${color}&style=for-the-badge&logo=medium&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${color}`,
    href: 'https://medium.com/@guilospanck',
    color: DEFAULT_COLOR,
    title: 'Medium'
  }
})

export const PROJECTS = (): Projects[] => ([
  {
    title: 'Gartic Like App',
    type: ProjectType.APP,
    content: 'Web drawer like Gartic made with React using TypeScript.',
    url: 'https://github.com/Guilospanck/gartic-like-app/'
  },
  {
    title: 'Dota2 Counters',
    type: ProjectType.SCRAPPER,
    content: 'A simple Python webscrapper to gather information of heroes\' counters from Dotabuff.',
    url: 'https://github.com/Guilospanck/dota2-counters'
  },
  {
    title: 'Discord Clone',
    type: ProjectType.APP,
    content: 'Frontend Discord Clone made with TypeScript and React',
    url: 'https://guilospanck.github.io/discord-clone/'
  },
  {
    title: 'igocqlx',
    type: ProjectType.GOLANG_PKG,
    content: 'Gocqlx with interfaces.',
    url: 'https://github.com/Guilospanck/igocqlx'
  },
  {
    title: 'Conway\'s Game of Life',
    type: ProjectType.APP,
    content: 'John Conway Game of Life React TypeScript implementation.',
    url: 'https://guilospanck.github.io/Conway-Game-Of-Life-React/'
  },
  {
    title: 'gocqlxmock',
    type: ProjectType.GOLANG_PKG,
    content: 'Simple mock for gocqlx',
    url: 'https://github.com/Guilospanck/gocqlxmock'
  },
  {
    title: 'Rust Bitcoin',
    type: ProjectType.APP,
    content: 'Bitcoin protocol implementation in Rust.',
    url: 'https://github.com/Guilospanck/rust-bitcoin'
  },
  {
    title: 'Dota2 Discord Bot',
    type: ProjectType.BOT,
    content: 'Dota 2 Counters is a Discord bot that will tell you which are the top five (5) heroes that counter the desired one.',
    url: 'https://top.gg/bot/835946840561156096'
  },
  {
    title: 'ScyllaDB and Go',
    type: ProjectType.APP,
    content: 'Simple application showing how to work with ScyllaDB and Golang using gocqlx.',
    url: 'https://github.com/Guilospanck/scylladb-and-go'
  }
])

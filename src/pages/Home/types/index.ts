
export type UseHomeViewModelReturnType = {
  onMouseEnterBadge: (badgeType: BadgeType) => void,
  onMouseLeaveBadge: (badgeType: BadgeType) => void,
  badgeInfo: BadgeInfo,
  projectsData: Projects[]
}

export type HomeViewProps = {
  viewModel: UseHomeViewModelReturnType
}

/** Constants */
export const DEFAULT_COLOR = '2d3134'
export const HOVER_COLOR = 'bfbdbd'

export enum BadgeType {
  GITHUB, TWITTER, LINKEDIN, MEDIUM
}

type BadgeInfoValue = {
  src: (color: string) => string,
  href: string,
  color: string,
  title: string
}

export type BadgeInfo = Record<BadgeType, BadgeInfoValue>

export enum ProjectType {
  WEBSITE, GOLANG_PKG, SCRAPPER, BOT,
  APP, BITCOIN,
}

export const ProjectColor: Record<ProjectType, string> = {
  [ProjectType.APP]: '#1D2226',
  [ProjectType.BOT]: '#F5CB5C',
  [ProjectType.GOLANG_PKG]: '#7D80DA',
  [ProjectType.SCRAPPER]: '#E94F37',
  [ProjectType.WEBSITE]: '#02A9EA',
  [ProjectType.BITCOIN]: '#f7931a'
} as const

export const ProjectSubtitle: Record<ProjectType, string> = {
  [ProjectType.APP]: 'app',
  [ProjectType.GOLANG_PKG]: 'golang package',
  [ProjectType.BOT]: 'bot',
  [ProjectType.SCRAPPER]: 'webscrapper',
  [ProjectType.WEBSITE]: 'website',
  [ProjectType.BITCOIN]: 'btc related'
} as const

export type Projects = {
  title: string,
  type: ProjectType,
  content: string,
  url: string
}


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

export type BadgeInfo = {
  [badgeType in BadgeType]: {
    src: (color: string) => string,
    href: string,
    color: string,
    title: string
  }
}

export enum ProjectType {
  WEBSITE, GOLANG_PKG, SCRAPPER, BOT,
  APP,
}

export const ProjectColor = {
  [ProjectType.APP]: '#1D2226',
  [ProjectType.BOT]: '#F5CB5C',
  [ProjectType.GOLANG_PKG]: '#FF01FB',
  [ProjectType.SCRAPPER]: '#E94F37',
  [ProjectType.WEBSITE]: '#02A9EA',
}

export const ProjectSubtitle = {
  [ProjectType.APP]: 'app',
  [ProjectType.GOLANG_PKG]: 'golang package',
  [ProjectType.BOT]: 'bot',
  [ProjectType.SCRAPPER]: 'webscrapper',
  [ProjectType.WEBSITE]: 'website',
}

export type Projects = {
  title: string,
  type: ProjectType,
  content: string,
  url: string
}

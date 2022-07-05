import { useState } from 'react'
import { BADGE_INFO, PROJECTS } from '../data'
import { BadgeInfo, BadgeType, DEFAULT_COLOR, HOVER_COLOR, Projects, UseHomeViewModelReturnType } from '../types'

export const useHomeViewModel = (): UseHomeViewModelReturnType => {
  /** States */
  const [badgeInfo, setBadgeInfo] = useState<BadgeInfo>(BADGE_INFO())
  const [projectsData] = useState<Projects[]>(PROJECTS())

  const onMouseEnterBadge = (badgeType: BadgeType) => {
    const badgeCopy = { ...badgeInfo }
    badgeCopy[badgeType].color = HOVER_COLOR
    setBadgeInfo(badgeCopy)
  }

  const onMouseLeaveBadge = (badgeType: BadgeType) => {
    const badgeCopy = { ...badgeInfo }
    badgeCopy[badgeType].color = DEFAULT_COLOR
    setBadgeInfo(badgeCopy)
  }

  return {
    onMouseEnterBadge,
    onMouseLeaveBadge,
    badgeInfo,
    projectsData
  }
}

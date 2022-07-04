import React, { useMemo } from 'react'
import Typical from 'react-typical'
import { HomeViewProps, BadgeType, BadgeInfo, ProjectSubtitle, ProjectColor } from '../types'

import {
  Page,
  PhotoContainer,
  Title,
  Subtitle,
  EmailContainer,
  Email,
  CurvesContainer,
  Badges,
  BadgeContainer,
  Projects,
  ProjectCard
} from './styles'
import MeImg from '../../../assets/images/me.jpg'

const CurvesSVG = React.lazy(() => import('../../../assets/images/curves.svg'))

const GetSubtitle = () => {
  return (
    <Subtitle>
      <Typical
        steps={useMemo(() => [
          'Frontend Developer 🎨',
          1000,
          'Backend Developer 🎲',
          1000,
          'FullStack Developer 🦆',
          1000,
          'Mechatronics Engineer ⚙️',
          1000
        ], [])}
        loop={Infinity}
      />
    </Subtitle>
  )
}

const GetSubtitleMemoized = React.memo(GetSubtitle)

const GetBadge = (badge: BadgeType, onMouseEnterBadge: (badgeType: BadgeType) => void, onMouseLeaveBadge: (badgeType: BadgeType) => void, badgeInfo: BadgeInfo) => {
  const currentBadge = badgeInfo[badge]

  const color = currentBadge?.color
  if (!color) { return }

  const badgeSrc = currentBadge?.src(color)
  if (!badgeSrc) { return }

  return (
    <a key={badge} title={currentBadge.title} role={'link'}
      href={currentBadge.href} target={'_blank'}
      onMouseEnter={() => onMouseEnterBadge(badge)}
      onMouseLeave={() => onMouseLeaveBadge(badge)} rel="noreferrer">
      <BadgeContainer src={badgeSrc} />
    </a>
  )
}

export const HomeView = ({ viewModel }: HomeViewProps) => {
  return (
    <>
      <Page height={80}>
        <PhotoContainer title='photo-container' url={MeImg} />
        <Title title='title-name-container'>Guilherme Rodrigues</Title>
        <GetSubtitleMemoized />
        <Badges>
          {
            Object.values(BadgeType).map((badge) => GetBadge(badge as BadgeType, viewModel.onMouseEnterBadge, viewModel.onMouseLeaveBadge, viewModel.badgeInfo))
          }
        </Badges>
        <EmailContainer title='email-container'>
          <Email href="mailto:guilospanck@protonmail.com" target={'_blank'}>guilospanck@protonmail.com</Email>
        </EmailContainer>
      </Page>

      <CurvesContainer>
        <CurvesSVG />
      </CurvesContainer>

      <Page bgcolor='#2d3134'>
        <Title>Projects</Title>
        <Projects>
          {
            viewModel.projectsData.map(project => (
              <ProjectCard key={project.url} href={project.url} bgColor={ProjectColor[project.type]}>
                <div id='title'>{project.title}</div>
                <div id='subtitle'>{ProjectSubtitle[project.type]}</div>
                <div id='content'>{project.content}</div>
              </ProjectCard>
            ))
          }
        </Projects>
      </Page>
    </>
  )
}

import styled from 'styled-components'

import { BREADCUMB_BG_COLOR, CONTENT_BG_COLOR_ALMOST_BLACK, TEXT_COLOR_0_7_WHITE } from '~/globals'

type PageProps = {
  bgcolor?: string,
  height?: number,
}
export const Page = styled.div<PageProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${props => props.height ?? 100}%;
  background-color: ${props => props.bgcolor ?? CONTENT_BG_COLOR_ALMOST_BLACK};
`

type PhotoContainerProps = {
  url: string
}
export const PhotoContainer = styled.div<PhotoContainerProps>`
  width: 200px;
  height: 200px;
  border: 2px solid ${TEXT_COLOR_0_7_WHITE};
  border-radius: 100px;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position-y: center;

  overflow: hidden;

  @media(max-width: 270px) {
    width: 150px;
    height: 150px;
  }
`

export const Title = styled.header`
  text-align: center;
  font-size: xx-large;
`

export const Subtitle = styled.section`  
  display: flex;
  align-items: center;
  height: 60px;
`

export const Badges = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  width: 100%;
  max-height: 130px;
  gap: 2px;

  overflow: hidden;

  @media(max-height: 500px){
    min-height: 70px;
  }
`

export const BadgeContainer = styled.img`
  width: 100px;
  border-radius: 5px;
  height: 90%;  
`

export const EmailContainer = styled.section`
  display: flex;  
  flex-direction: row;
  flex-wrap: wrap;

  word-break: break-all;

  justify-content: center;
  align-items: center;
  align-content: center;

  width: 100%;
  height: 30px;
`

export const Email = styled.a`
  text-decoration: none;
  color: ${TEXT_COLOR_0_7_WHITE};  

  &:hover {
    color: #FFF;
  }
`

export const CurvesContainer = styled.footer`
  position: relative;
  width: 100%;
  overflow: hidden;
  bottom: -1vh;
`

// page 2
export const Projects = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1%;

  margin-top: 5%;
`

type ProjectCardProps = {
  bgColor?: string
}
export const ProjectCard = styled.a<ProjectCardProps>`
  width: 250px;
  height: 220px;
  border-radius: 20px;

  margin-bottom: 1%;
  color: ${TEXT_COLOR_0_7_WHITE};  
  padding: 15px;
  cursor: pointer;
  text-decoration: none;

  background: linear-gradient(135deg,
    ${props => props.bgColor ?? CONTENT_BG_COLOR_ALMOST_BLACK} 0px,
    ${BREADCUMB_BG_COLOR} 100%);

  &:hover {
    transform: scale(1.05);
  }

  & > #title {
    font-size: 20px;
  }

  & > #subtitle {
    margin-bottom: 15px;
  }

  & > #content {
    width: 100%;
    max-height: 100px;
    word-break: break-word;
    overflow: auto;
  }
`

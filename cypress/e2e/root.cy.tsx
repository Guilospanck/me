/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { BADGE_INFO, PROJECTS } from '../../src/pages/Home/data'

export const SUBJECT_TITLE_TEST = 'teste'
export const SUBJECT_TITLE_TEST_2 = 'teste2'

// !!! Change when uploading it to production !!!
export const LOCALHOST = 'http://localhost:3000/'

// development
// export const LOCALHOST = 'https://localhost:3000/'

describe('test', () => {
  it('should render the home page with all its links', () => {
    test()
  })
})

export const test = () => {
  cy.visit(`${LOCALHOST}`)

  cy.findByTitle(/photo\-container/i).should('exist')
  cy.findByTitle(/title\-name\-container/i).should('exist')
  cy.findByTitle(/email\-container/i).should('exist')
  cy.findByTitle(/quote-diary-container/i).should('exist')

  // badges + projects + personal notes + quote diary + email + footer photo
  const NUMBER_OF_LINKS = Object.keys(BADGE_INFO()).length + PROJECTS().length + 4
  cy.findAllByRole('link').then($links => {
    expect($links.length).to.be.eq(NUMBER_OF_LINKS)
  })
}

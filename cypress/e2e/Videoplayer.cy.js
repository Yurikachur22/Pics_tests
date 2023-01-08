const email = 'yurikachur'
const password = 'Picsio12'
describe('Video player', () => {
  beforeEach(() => {
    cy.viewport(1262, 750)
    cy.visit('https://pics.io/')
    cy.get('.nav > :nth-child(6) > a').click()
    cy.get('#login-email').type(`${email}@ukr.net`)
    cy.get('#login-password').type(`${password}`)
    cy.get('.btn-primary').contains('Log in').click();
    cy.wait(2000)
    cy.visit('https://pics.io/preview/6388467241e9f500197ae681')
    cy.wait(2000)
  });

  it('User can rewind left the video by 2 seconds by clicking on the rewind right arrow button', () => {
    cy.get('[data-testid="actionRewindRightButton"]').click()
  })

  it('User can rewind left the video by 2 seconds by clicking on the rewind left arrow button', () => {
    cy.get('[data-testid="actionRewindRightButton"]').click()
    cy.get('[data-testid="actionRewindLeftButton"]').click()
  })
})

describe("Landing page renders", () => {
  beforeEach(() => {
    cy.visit("/")
  })

    it("successfully", () => {
      cy.get("logo").should("be.visible")
      cy.get("[data-cy=title]").should('contain', 'viaplay')
    })
})
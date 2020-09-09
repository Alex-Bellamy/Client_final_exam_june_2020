describe("Landing page renders", () => {
  beforeEach(() => {
    cy.visit("/")
  })

    it("successfully", () => {
      cy.get("#logo").should("be.visible")
    })
})
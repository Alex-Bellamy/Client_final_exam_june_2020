describe("User can see titles", () => {
  before(() => {
    cy.server(),
    cy.route({
      method: "GET",
      url: "https://content.viaplay.se/pc-se/serier/samtliga",
      response: "fixture:shows.json",
    })

    cy.visit("/");
  })

  it("User can see show images", () => {
    cy.get("#display-show").should("be.visible")
  })
})
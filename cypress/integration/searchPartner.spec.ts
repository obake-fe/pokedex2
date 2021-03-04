describe("searchPartner", () => {
	const baseUrl = Cypress.env("baseUrl");

	it("Can search partner", () => {
		cy.visit(baseUrl);

		cy.get("[data-testId=menu-3]").click();
		cy.location("pathname").should("eq", "/partner");

		cy.get("[data-testId=searchPartner-input]").type("test");
		cy.get("[data-testId=searchPartner-button]").click();

		cy.get("[data-testId=searchPartner-text] > :nth-child(1)").should(
			"have.text",
			"test"
		);
	});
});
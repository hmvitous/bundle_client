describe("user views the list of activities", () => {
  beforeEach(() => {
    cy.visit("./");
  });

  it("views list of events", () => {
    cy.get("#event-title").should("contain", "Event List");
    cy.get("#event-description").should("contain", "Event Description");
  });
});

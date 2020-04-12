describe("user views the list of events", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/events",
      response: "fixture:events_list.json"
    });
    cy.visit("http://localhost:3001");
  });

  it("display event title", () => {
    cy.get("#event-title").should("contain", "Pizza with friends");
    cy.get("#event-description").should("contain", "Watch the derby with us");
  });
});

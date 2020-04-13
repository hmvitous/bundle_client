describe("user views the list of activities", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/events",
      response: "fixture:event_list.json",
    });
    cy.visit("./");
  });

  it("shows list of events", () => {
    cy.get("#event-title").should("contain", "Lets Play Soccer");
    cy.get("#event-description").should("contain", "We are a group of 9 people and we are missing 2 more to make a team");
    // cy.get(".event-title").should("contain", "Walking on Sunshine");
    // cy.get(".event-description").should("contain", "From Slussen to Skansen");
  });
});

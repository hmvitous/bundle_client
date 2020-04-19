describe("user can create an event", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/events",
      response: "fixture:create_event_response.json",
    });
  });

  it("succesfully see create event", () => {
    cy.get("#create-button").contains("Create Event").click();
    cy.get("#create-form").within(() => {
      cy.get("#title").type("Play baseball");
      cy.get("#description").type("I need a lot of people");
      // cy.get("Number of People").type("5");
      cy.get("button").contains("Submit").click();
    });
    cy.get("#create-message").should("contain", "Your event has been created");
  });
});
n
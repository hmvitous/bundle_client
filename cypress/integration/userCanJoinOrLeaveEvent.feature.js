describe("user views the list of activities", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/events",
      response: "fixture:events_list.json",
    });
    cy.visit("/");
  });

  it("authenticated user can join event", () => {
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("button").contains("Submit").click();
    });
    cy.get("#message").should("contain", "Hi user@mail.com");
    cy.get("#event-1").within(() => {
      cy.get("#title").should("contain", "Play Soccer");
      cy.get("#description").should("contain", "We need more players");
    });
    cy.get("#join").click();
    cy.get("#confirm-message").should("contain", "You're in!")
  });
});



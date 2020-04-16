describe("user can create an event", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/events",
      response: "fixture:create_event_response.json",
    });
  });

  it("see create event form", () => {
    cy.get("#create-form").should("contain", "Title");
    cy.get("#create-form").should("contain", "Description");
    cy.get("#create-form").should("contain", "Category");
    cy.get("#create-form").contains("Create Event").click();
  });

  it("Can create event", () => {
    cy.get("#create-form").within(() => {
      cy.get("#title").type("Play baseball");
      cy.get("#description").type("I need a lot of people");
      // cy.get("#category").click()
      // cy.get("#category").click("Sports")
      cy.get("button").contains("Submit").click();
    });
    cy.get(".message").should("contain", "Your event has been created")

  });
});

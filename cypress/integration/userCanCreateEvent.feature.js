describe("user can create an event", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/events",
      response: "fixture:events_list.json",
    });

    beforeEach(() => {
      cy.server();
      cy.route({
        method: "POST",
        url: "http://localhost:3000/events",
        response: "fixture:events_list.json",
      });
      cy.visit("/");
    });

    it("see create event form", () => {
      cy.get("#create-form").should("contain", "Title");
      cy.get("#create-form").should("contain", "Description");
      cy.get("#create-form").should("contain", "Category");
      cy.get("#create-form").contains("Create Event").click();
    });

    it("Can create event", () => {
      cy.get(".create-event").within(() => {
        cy.get(".title").should("contain","Play Soccer");
        cy.get(".description").type("We need more players");
        cy:get("category").type("sports")
        cy.get("button").contains("Submit").click();
      });
    });
  });
});

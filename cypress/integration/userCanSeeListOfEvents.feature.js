describe("user views the list of activities", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  describe("successfully displays", () => {
    before(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/events",
        response: "fixture:events_list.json",
      });
    });
    it("first event", () => {
      cy.get("#event-1").within(() => {
        cy.get("#title").should("contain", "Play Soccer");
        cy.get("#description").should("contain", "We need more players");
      });
    });
    it("second event", () => {
      cy.get("#event-2").within(() => {
        cy.get("#title").should("contain", "Walking on Sunshine");
        cy.get("#description").should("contain", "From Slussen to Skansen");
      });
    });
  });
});

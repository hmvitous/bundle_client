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
        cy.get("#title").should("contain", "Lets Play Soccer");
        cy.get("#description").should(
          "contain",
          "We are a group of 9 people and we are missing 2 more to make a team"
        );
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

        it("second event", () => {
          cy.get("#event-2").within(() => {
            cy.get("#title").should("contain", "Shots and Beer");
            cy.get("#description").should("contain", "Clubbing in Södermalm");
          });
        });
      });
    });
  });
});

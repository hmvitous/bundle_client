describe("user views the list of activities", () => {
  beforeEach(() => {
    cy.visit("/");
  });

<<<<<<< HEAD
  it("shows list of events", () => {
    cy.get("#event-title").should("contain", "Lets Play Soccer");
    cy.get("#event-description").should("contain", "We are a group of 9 people and we are missing 2 more to make a team");
    // cy.get(".event-title").should("contain", "Walking on Sunshine");
    // cy.get(".event-description").should("contain", "From Slussen to Skansen");
  });
});
=======
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
        cy.get("#title").should("contain","Lets Play Soccer");
          cy.get("#description").should(
            "contain",
            "We are a group of 20 people and we are missing 2 more to make two teams"
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
              cy.get("#title").should("contain","Walking on Sunshine");
                cy.get("#description").should(
                  "contain",
                  "From Slussen to Skansen"
                );
              });
            });
          });
        });
      });
    });
>>>>>>> 13884a6432806d5fa9979bc5b884d3c10656fed0

describe("user views the list of activities", () => {
  beforeEach(() => {
    cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/events",
        response: "fixture:events_list.json",
      });
      cy.visit("/");
    });
    it("first event", () => {
      cy.get("#event-1").within(() => {
        cy.get("#title").should("contain", "Lets Play Soccer")
        cy.get("#description").should("contain","We are a group of 20 people and we are missing 2 more to make two teams")
      })
    })

    it("second event", () => {
      cy.get("#event-2").within(() => {
        cy.get("#title").should("contain", "Walking on Sunshine")
        cy.get("#description").should("contain","From Slussen to Skansen")
      })
    })

  })
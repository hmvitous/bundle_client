describe("Successfully displays", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://localhost:3001",
      response: "fixtures:events.json",
    });
    cy.visit("./");
  });

  it("displays first event", () => {
    cy.get("#event-1").within(() => {
      cy.get("#title").should("contain", "Pizza with friends");
      cy.get("#description").should(
        "contain",
        "watch the derby and eat pizza with us"
      );
    });
  });
});

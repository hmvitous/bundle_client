describe("User can join event", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth",
      response: "fixture:login_response.json"
    });

    cy.route({
      method: "GET",
      url: "**/auth/**",
      response: "fixture:login_response.json"
    });

    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/events",
      response: "fixture:events_list.json",
    });

    cy.route({
      method: "PUT",
      url: "http://localhost:3000/api/events/1",
      response: "fixture:user_join_event_response.json"
    })
    cy.visit("/");
  });

  it("successfully", () => {
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("button").contains("Submit").click();
    });

    cy.get("#event-1").click()
    cy.get("#join-event").click()
    cy.get("#message").should("contain", "You are on the guest list!")
  });

  xit("unsuccessfully authenticate with invalid credentials", () => {
    cy.get("#login").contains("Login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("wronpassword");
      cy.get("button").contains("Submit").click();
    });
    cy.get("#wrong-message").should("contain", "Wrong credentials, please try again");
  });
});

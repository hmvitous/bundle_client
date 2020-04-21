describe("User authenticates", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/users",
      response: "fixture:user_list.json",
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/users",
      response: "fixture:user_list.json",
    });
    cy.visit("/");
  });

  it("successfully authenticate with valid credentials", () => {
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("button").contains("Submit").click();
    });
    cy.get("#message").should("contain", "Hi user@mail.com");
  });

  it("unsuccessfully authenticate with invalid credentials", () => {
    cy.get("#login").contains("Login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("wronpassword");
      cy.get("button").contains("Submit").click();
    });
    cy.get("#wrong-message").should("contain", "Wrong credentials, please try again");
  });
});

describe("User authenticates", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("successfully authenticate with valid credentials", () => {
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("button").countains("Submit").click();
    });
    cy.get("#message").should("contain", "Hi user@mail.com");
  });

  xit("unsuccessfully authenticate with invalid credentials", () => {
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("email").type("user@mail.com");
      cy.get("#password").type("wronpassword");
      cy.get("button").contains("Submit").click();
    });
    cy.get("#message").should("contain", "Invalid password");
  });
});

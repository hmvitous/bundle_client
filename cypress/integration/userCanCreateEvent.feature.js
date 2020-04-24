describe("user can create an event", () => {
  beforeEach(() => {
    cy.visit("/");
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
      method: "POST",
      url: "http://localhost:3000/api/events",
      response: "fixture:create_event_response.json",
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/events",
      response: "fixture:events_list.json",
    });

    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("button").contains("Submit").click();
    });
    cy.wait(7000)
  });

  it("succesfully creates an event", () => {
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/events",
      response: "fixture:events_list_after_creation.json",
    });

    cy.get("#create-button").contains("Create Event").click();
    cy.get("#create-form").within(() => {
      cy.get("#title").type("Play baseball");
      cy.get("#description").type("I need a lot of people");
      cy.get("div[name='people']").click();
      cy.get('div[role="option"]').contains("5").click();
      cy.get("div[name='category']").click();
      cy.get('div[role="option"]').contains("Outdoors").click();
      cy.get("#submit").click();
    });
    
    cy.get("#create-message").should("contain", "Your event has been created");
    cy.get("#event-3").within(() => {
      cy.get("#title").should("contain", "Play baseball");
      cy.get("#description").should("contain", "I need a lot of people");
    });
  });
});

describe("user cannot create event with empty fields", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000",
      response: "fixture:create_event_response.json",
    });
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("button").contains("Submit").click();
    });
    cy.wait(7000)

  });

  it("cannot create event without a title", () => {
    cy.get("#create-button").contains("Create Event").click();
    cy.get("#create-form").within(() => {
      cy.get("#description").type("I need a lot of people");
      cy.get("div[name='people']").click();
      cy.get('div[role="option"]').contains("5").click();
      cy.get("div[name='category']").click();
      cy.get('div[role="option"]').contains("Outdoors").click();
      cy.get("#submit").click();
    });
    cy.get('#error-message').should("contain", "Make sure the input fields are not empty.");
  });

  it("cannot create event without a description", () => {
    cy.get("#create-button").contains("Create Event").click();
    cy.get("#create-form").within(() => {
      cy.get("#title").type("Play baseball");
      cy.get("div[name='people']").click();
      cy.get('div[role="option"]').contains("5").click();
      cy.get("div[name='category']").click();
      cy.get('div[role="option"]').contains("Outdoors").click();
      cy.get("#submit").click();
    });
    cy.get('#error-message').should("contain", "Make sure the input fields are not empty.");
  });

  it("cannot create event without specifying how many people are invited", () => {
    cy.get("#create-button").contains("Create Event").click();
    cy.get("#create-form").within(() => {
      cy.get("#title").type("Play baseball");
      cy.get("#description").type("I need a lot of people");
      cy.get("div[name='category']").click();
      cy.get('div[role="option"]').contains("Outdoors").click();
      cy.get("#submit").click();
    });
    cy.get('#error-message').should("contain", "Make sure the input fields are not empty.");
  });

  it("cannot create event without specifying category", () => {
    cy.get("#create-button").contains("Create Event").click();
    cy.get("#create-form").within(() => {
      cy.get("#title").type("Play baseball");
      cy.get("#description").type("I need a lot of people");
      cy.get("div[name='people']").click();
      cy.get('div[role="option"]').contains("5").click();
      cy.get("#submit").click();
    });
    cy.get('#error-message').should("contain", "Make sure the input fields are not empty.");
  });
});

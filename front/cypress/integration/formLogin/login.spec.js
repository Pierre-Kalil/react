context("Login form", () => {
  it("should login", () => {
    cy.visit("/login");
    cy.get('input[name="email"]').type("pierre@mail.com");
    cy.get('input[name="password"]').type("123456@Az");
    cy.get('button[type="submit"]').click();
  });
});

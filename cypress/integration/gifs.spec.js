describe("Giphy API exercise", () => {
  it("should display a gif on page load, and a different gif on button click", () => {
    cy.visit("http://localhost:5000");

    // wait for an img tag that doesn't have an empty src attribute
    cy.get("#random-gif:not([src=''])").then(($img) => {
      const src1 = $img.attr("src");

      expect(src1).to.contain("giphy.com");

      cy.get("#fetch-random-gif-btn")
        .click()
        .then(() => {
          cy.get("#random-gif").should("not.have.attr", "src", src1);
        });
    });
  });
});

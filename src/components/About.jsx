import React from "react";
import Container from "react-bootstrap/Container";

const About = () => {
  return (
    <Container className="py-5 text-center">
      <h1 className="fw-bold mb-4">
        About <span style={{ color: "#f8b400" }}>What to Cook?</span>
      </h1>

      <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
        Welcome to <strong>What to Cook?</strong> — your go-to destination for
        delicious and easy-to-follow recipes from around the world! Whether
        you’re looking for a quick breakfast, a hearty dinner, or something
        sweet to end your day, we’ve got you covered.
      </p>

      <p className="text-muted mx-auto mt-4" style={{ maxWidth: "700px" }}>
        Our app uses the <strong>TheMealDB API</strong> to bring you a wide
        selection of meal ideas — from comforting classics to international
        flavors. Browse by category, search ingredients, and discover new
        recipes to make every mealtime special.
      </p>

      <p className="text-muted mx-auto mt-4" style={{ maxWidth: "700px" }}>
        Cooking made simple, fun, and flavorful — that’s the heart of{" "}
        <strong>What to Cook?</strong>. Let’s make your kitchen your favorite
        place to be!
      </p>
    </Container>
  );
};

export default About;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";

const RecipeDetails = () => {
  const { id } = useParams(); // Get ID from URL
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch recipe details from TheMealDB
  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.meals && data.meals.length > 0) {
          setRecipe(data.meals[0]);
        } else {
          setRecipe(null);
        }
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" /> <p>Loading recipe details...</p>
      </Container>
    );
  }

  if (!recipe) {
    return (
      <Container className="text-center mt-5">
        <h4>Recipe not found 😕</h4>
        <Button onClick={() => navigate(-1)} variant="secondary" className="mt-3">
          Go Back
        </Button>
      </Container>
    );
  }

  // Extract ingredients + measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <Container className="mt-4 mb-5">
      <Button onClick={() => navigate(-1)} variant="outline-secondary" className="mb-3">
        ← Back
      </Button>

      <Card className="shadow-sm" style={{ borderRadius: "15px" }}>
        <Card.Img
          variant="top"
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          style={{ maxHeight: "400px", objectFit: "cover", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
        />
        <Card.Body>
          <Card.Title className="fw-bold fs-3">{recipe.strMeal}</Card.Title>
          <Card.Subtitle className="text-muted mb-3">
            {recipe.strCategory} • {recipe.strArea}
          </Card.Subtitle>

          <h5>🧂 Ingredients</h5>
          <ListGroup variant="flush" className="mb-3">
            {ingredients.map((item, index) => (
              <ListGroup.Item key={index}>{item}</ListGroup.Item>
            ))}
          </ListGroup>

          <h5>📖 Instructions</h5>
          <Card.Text style={{ whiteSpace: "pre-line" }}>
            {recipe.strInstructions}
          </Card.Text>

          {recipe.strYoutube && (
            <div className="mt-4">
              <h5>🎥 Watch Tutorial</h5>
              <a
                href={recipe.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger mt-2"
              >
                Watch on YouTube
              </a>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RecipeDetails;

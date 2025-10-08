import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";
import Banner from "./Banner";

const Home = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]); // Recipes from API
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [loading, setLoading] = useState(true);

  const categories = [ "Chicken", "Seafood", "Dessert", "Vegetarian"];
  // ✅ Fetch recipes from TheMealDB API
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        const data = await response.json();
        if (data.meals) {
          // Transform data for display
          const formatted = data.meals.map((meal) => ({
            id: meal.idMeal,
            name: meal.strMeal,
            image: meal.strMealThumb,
            category: meal.strCategory,
            ingredient: meal.strArea,
            difficulty: "Easy", // The API doesn't include difficulty — you can customize
          }));
          setItems(formatted);
        } else {
          setItems([]);
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        // setLoading(false);
      }
    };
    fetchRecipes();
  });
  // Category checkbox handler
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== value));
    }
  };

  // 🔍 Filter by category and search
  const filteredItems = items.filter((item) => {
    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.category);
    const matchSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.ingredient.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (

    <Container className="mt-4">
      <Banner/>
      {/* What to Cook Section */}
{/* What to Cook Section */}
<div className="text-center my-4">
  <h2>
    What to <span style={{ color: "#f8b400" }}>Cook?</span>
  </h2>
  <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
    {["All Types", "Breakfast","Lunch","Dinner"].map((category) => (
      <button
        key={category}
        className={`btn ${
          category === "All Types"
            ? selectedCategories.length === 0
              ? "btn-dark text-white"
              : "btn-light"
            : selectedCategories.includes(category)
            ? "btn-dark text-white"
            : "btn-light"
        } rounded-pill px-4 py-2 shadow-sm`}
        style={{
          fontWeight: "500",
          transition: "all 0.3s ease",
        }}
        onClick={() => {
          if (category === "All Types") {
            setSelectedCategories([]); // show everything
          } else {
            setSelectedCategories([category]); // filter only this one
          }
        }}
      >
        {category}
      </button>
    ))}
  </div>
</div>
      <NavLink
        to="/Pratice"
        style={{
          color: "red",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        Message
      </NavLink>

      <Row>
        {/* Sidebar */}
        <Col md={3}>
          <h5 className="mb-3">Filter by Category</h5>
          <Form>
            {categories.map((category) => (
              <Form.Check
                key={category}
                type="checkbox"
                label={category}
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={handleCategoryChange}
                className="mb-2"
              />
            ))}
          </Form>
        </Col>

        {/* Main content */}
        <Col md={9}>
          {/* Search bar */}
          <Form className="mb-4">
            <Form.Control
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form>

            <Row xs={1} md={3} className="g-4">
              {filteredItems.map((item) => (
                <Col key={item.id}>
                  <Card
                    onClick={() => navigate(`/recipe/${item.id}`)}
                    className="recipe-card shadow-sm"
                    style={{
                      cursor: "pointer",
                      borderRadius: "15px",
                      overflow: "hidden",
                    }}
                  >
                    <div className="card-image-wrapper">
                      <Card.Img
                        variant="top"
                        src={item.image}
                        alt={item.name}
                        style={{ height: "180px", objectFit: "cover" }}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className="fw-bold">{item.name}</Card.Title>
                      <Card.Text className="text-muted">
                        {item.category} • {item.ingredient}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

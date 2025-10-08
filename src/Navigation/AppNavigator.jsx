import React from "react";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import RecipeDetails from "../components/RecipeDetails";
import Pratice from "../components/Pratice";
import About from "../components/About"
import Contact from "../components/Contact";
 const items = [
  {
    id: 1,
    name: "Tuscan White Bean Soup",
    difficulty: "Intermediate",
    time: "0.85 hrs",
    servings: 5,
    author: "Thomas Keller",
    ingredient: "Beans, Olive oil, Garlic",
    category: "Veg",
    image: "https://source.unsplash.com/400x300/?soup"
  },
  {
    id: 2,
    name: "Honey Glazed Salmon soup",
    difficulty: "Advanced",
    time: "1.57 hrs",
    servings: 7,
    author: "Julia Child",
    ingredient: "Salmon, Honey, Soy sauce",
    category: "Non-Veg",
    image: "https://source.unsplash.com/400x300/?salmon"
  },
  {
    id: 3,
    name: "Cheesy Broccoli Casserole",
    difficulty: "Advanced",
    time: "1.28 hrs",
    servings: 3,
    author: "Thomas Keller",
    ingredient: "Broccoli, Cheese, Milk, Butter",
    category: "Veg",
    image: "https://source.unsplash.com/400x300/?broccoli"
  }
];


const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand" to="/">
          Recipe
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links and search */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact" tabIndex="-1" aria-disabled="true">
                Contact
              </Link>
            </li>
          </ul>
          {/* Search form */}
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    </div>
  );
};

const AppNavigator = () => {
  return (
    <>
    <BrowserRouter>
    <Nav/>  
    <Routes>
<Route path="/" element={<Home items={items}/>}></Route>
<Route path="/Recipe/:id" element={<RecipeDetails items={items}/>}></Route>
<Route path="/Pratice" element={<Pratice/>}></Route>
<Route path="/About" element={<About/>}></Route>
<Route path="/Contact" element={<Contact/>}></Route>

    </Routes>
    </BrowserRouter>

  </>
  );
};

export default AppNavigator;

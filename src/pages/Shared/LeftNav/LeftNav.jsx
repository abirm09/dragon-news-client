import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import EditorsInsights from "../../News/EditorsInsights/EditorsInsights";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h4>All Category</h4>
      <div className="ps-4">
        {categories.map(category => (
          <p key={category.id}>
            <NavLink
              className="text-decoration-none fw-bold text-secondary"
              to={`/category/${category.id}`}
            >
              {category.name}
            </NavLink>
          </p>
        ))}
      </div>
      <EditorsInsights />
    </div>
  );
};

export default LeftNav;

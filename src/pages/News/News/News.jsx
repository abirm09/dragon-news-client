import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsights from "../EditorsInsights/EditorsInsights";

const News = () => {
  const data = useLoaderData();
  const { title, image_url, details, category_id } = data;
  return (
    <div>
      <Card className="mt-3">
        <Card.Img variant="top" src={image_url} className="img-fluid" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`} className="btn btn-danger">
            <FaArrowLeft />{" "}
            <span className="ml-3">All news in this category</span>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInsights />
    </div>
  );
};

export default News;

import moment from "moment/moment";
import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import {
  FaBookmark,
  FaCrosshairs,
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const DisplaySIngleNews = ({ data }) => {
  const { _id, author, title, image_url, details, rating, total_view } = data;
  return (
    <Card className=" mb-4 border border-light border-3">
      <Card.Header className="border-0">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-3">
            <Card.Img
              variant="top"
              src={author.img}
              style={{ width: "40px", height: "40px" }}
              className="rounded-circle"
            />
            <div>
              <h5 className="fs-5">{author.name}</h5>
              <h6>{moment(author.published_date).format("yyyy-MM-D")}</h6>
            </div>
          </div>
          <div className="d-flex">
            <button className="btn">
              <FaRegBookmark />
            </button>
            <button className="btn">
              <FaShareAlt />
            </button>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Image className="w-100" src={image_url} />
        <Card.Text className="my-3">
          {details.length > 250 ? (
            <>
              {details.slice(0, 250)}...
              <Link
                state={title}
                to={`/news/${_id}`}
                className="btn-link text-warning"
              >
                Read more
              </Link>
            </>
          ) : (
            <></>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted border-0">
        <div className="d-flex justify-content-between">
          <div>
            <Rating
              className="text-warning"
              placeholderRating={rating.number}
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar />}
              readonly
            />
          </div>
          <div>
            <FaEye />
            <span className="ms-2">{total_view}</span>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default DisplaySIngleNews;

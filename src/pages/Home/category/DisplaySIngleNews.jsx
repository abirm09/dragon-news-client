import React from "react";
import { Button, Card, Image } from "react-bootstrap";

const DisplaySIngleNews = ({ data }) => {
  const { _id, author, title, image_url, details } = data;
  return (
    <Card className=" mb-4 border border-light border-3">
      <Card.Header className="border-0">
        <div className="d-flex gap-3">
          <Card.Img
            variant="top"
            src={author.img}
            style={{ width: "40px", height: "40px" }}
            className="rounded-circle"
          />
          <div>
            <h5 className="fs-5">{author.name}</h5>
            <h6>
              {author.published_date
                ? author?.published_date?.split(" ")[0]
                : "No publish date found."}
            </h6>
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
              <Button className="btn-link text-warning">Read more</Button>
            </>
          ) : (
            <></>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted border-0">2 days ago</Card.Footer>
    </Card>
  );
};

export default DisplaySIngleNews;

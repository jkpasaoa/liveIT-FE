import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import { Button, Card } from "react-bootstrap";

function Review({ review, handleDelete, handleEdit }) {
  const [viewEditForm, toggleEditForm] = useState(false);
  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  return (
    <div className="Review text-center" style={{ maxWidth: "500px", margin: "0 auto", paddingTop: "50px" }}>
      <h2>Reviews</h2>
      <Card>
        <Card.Body>
          <Button variant="success" onClick={toggleView} style={{ backgroundColor: "#4CAF50", color: "white", fontFamily: "Funk Gibson" }}>
            Edit this Review
          </Button>
          {viewEditForm ? (
            <ReviewForm reviewDetails={review} toggleView={toggleView} handleEdit={handleEdit} />
          ) : (
            <div>
              <h4>{review.title}</h4>
              <h5>
                <span style={{ fontWeight: "bold", textDecoration: "underline" }}>Rating: {review.rating}</span>
              </h5>
              <br /> {/* Add a line break */}
              <img src="https://xsgames.co/randomusers/avatar.php?g=pixel" alt="User Face" style={{ width: "70px", borderRadius: "50%" }} /> {/* Decrease size, add rounded edge */}
              <h6>{review.reviewer}</h6>
              <p>{review.content}</p>
            </div>
          )}
          <Button variant="danger" onClick={() => handleDelete(review.id)} style={{ backgroundColor: "black", color: "white", fontFamily: "Funk Gibson" }}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Review;

import { useState } from "react";
import ReviewForm from "./ReviewForm";
import { ButtonGroup, Button, Card } from "react-bootstrap";

function Review({ review, handleDelete, handleEdit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  }

  return (
    <div className="Review" style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '50px' }}>
      <h2>Reviews</h2>
      <Card >
        <Card.Body>
          <button onClick={toggleView}>Edit this Review</button>
          {
            viewEditForm ? (
              <ReviewForm
                reviewDetails={review}
                toggleView={toggleView}
                handleEdit={handleEdit}
              />
            ) : (
              <div>

                <h4>{review.title}
                  <span>&nbsp;
                    {review.rating}
                  </span>
                </h4>
                <h5>
                  {review.reviewer}
                </h5>
                <p>
                  {review.content}
                </p>
              </div>
            )
          }
          <button onClick={() => handleDelete(review.id)
          }>Delete</button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Review;

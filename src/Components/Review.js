import { useState } from "react";
import ReviewForm from "./ReviewForm";

function Review({ review, handleDelete, handleEdit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  }

  return (
    <div className="Review">
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
              <span>
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
    </div>
  )
}

export default Review;

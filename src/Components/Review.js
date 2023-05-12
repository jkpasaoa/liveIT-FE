import { useState } from "react";
import ReviewForm from "./ReviewForm";

function Review({ review, handleDelete, handleEdit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  return (
    <div className="Review">
      {
        viewEditForm ? (
          <ReviewForm
            reviewDetails={review}
            handleEdit={handleEdit}
          />
        ) : (
          <div>
            <h4>{review.title} <span>{review.rating}</span></h4>
            <h5>{review.reviewer}</h5>
            <p>{review.content}</p>
          </div>
        )
      }
      <button onClick={() => handleDelete(review.id)}>Delete</button>
    </div>
  )
}

export default Review;

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

          </div>

        )
      }
    </div>
  )
}

export default Review;

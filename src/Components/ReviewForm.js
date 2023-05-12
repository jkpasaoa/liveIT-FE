import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReviewForm(props) {
  const { id } = useParams();
  const { reviewDetails } = props;

  const [review, setReview] = useState({
  })

  return (
    <div className="Edit">
     
    </div>
  );
}

export default ReviewForm;


import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

const API = process.env.REACT_APP_API_URL;

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/bookmarks/${id}/reviews`)
      .then((response) => setReviews(response.data))
      .catch((error) => console.warn(error))
  }, [id])

  return (
    <div>

    </div>
  );
}
export default Reviews;

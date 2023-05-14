import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import { Button } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

function Reviews() {
  const [showAddReview, setShowAddReview] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}/reviews`)
      .then((response) => setReviews(response.data))
      .catch((error) => console.warn(error))
  }, [id])

  const handleClick = () => {
    setShowAddReview(!showAddReview);
  };

  const handleAdd = (newReview) => {
    axios
      .post(`${API}/snacks/${id}/reviews`, newReview)
      .then((response) => {
        setReviews([response.data, ...reviews]);
      }, (error) => console.error(error))
      .catch((e) => console.warn("catch", e))
  }

  const handleDelete = (id) => {
    axios
      .delete(`${API}/snacks/${id}/reviews/${id}`)
      .then((response) => {
        const copyReviewArray = [...reviews];
        const indexDeletedReview = copyReviewArray.findIndex((review) => {
          return review.id === id;
        })
        copyReviewArray.splice(indexDeletedReview, 1);
        setReviews(copyReviewArray);
      },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c))
  }

  const handleEdit = (updatedReview) => {
    axios
      .put(`${API}/snacks/${id}/reviews/${updatedReview.id}`, updatedReview)
      .then((response) => {
        const copyReviewArray = [...reviews];
        const indexUpdatedReview = copyReviewArray.findIndex((review) => {
          return review.id === updatedReview.id;
        })
        copyReviewArray[indexUpdatedReview] = response.data;
        setReviews(copyReviewArray)
      })
      .catch((c) => console.warn("catch", c))
  }

  return (
    <div>
      <section className="Reviews text-center" style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '50px' }}>
        <Button onClick={handleClick} variant="primary" style={{ backgroundColor: '#4CAF50', color: 'black', fontFamily: 'Funk Gibson' }}>
          {showAddReview ? "Hide Form" : "Add New Review"}
        </Button>
        {showAddReview && (
          <ReviewForm handleAdd={handleAdd}>
            <h5>Add a New Review</h5>
          </ReviewForm>
        )}
        {
          reviews.map((review) => {
            return <Review key={review.id}
              review={review}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          })
        }
      </section>
    </div>
  );
}

export default Reviews;

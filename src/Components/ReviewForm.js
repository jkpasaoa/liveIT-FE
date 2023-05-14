import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReviewForm(props) {
  const { id } = useParams();
  const { reviewDetails } = props;

  const [review, setReview] = useState({
    reviewer: "",
    title: "",
    content: "",
    rating: "",
    snack_id: id
  });

  useEffect(() => {
    if (reviewDetails) {
      setReview(reviewDetails);
    }
  }, [id, reviewDetails, props]);

  const handleTextChange = (event) => {
    setReview({ ...review, [event.target.id]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleEdit(review, id);
    if (reviewDetails) {
      props.toggleView();
    }
    setReview({
      reviewer: "",
      title: "",
      content: "",
      rating: "",
      snack_id: id
    })
  }

  return (
    <div className="Edit" style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '50px' }}>
      {props.children}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="reviewer">Name:</label>
          <input
            id="reviewer"
            value={review.reviewer}
            type="text"
            onChange={handleTextChange}
            placeholder="Your name"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            required
            value={review.title}
            onChange={handleTextChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input
            id="rating"
            type="number"
            name="rating"
            min="0"
            max="5"
            step="1"
            value={review.rating}
            onChange={handleTextChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Review:</label>
          <textarea
            id="content"
            type="text"
            name="content"
            value={review.content}
            placeholder="What do you think..."
            onChange={handleTextChange}
            className="form-control"
            required
          />
        </div>

        <br />

        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default ReviewForm;


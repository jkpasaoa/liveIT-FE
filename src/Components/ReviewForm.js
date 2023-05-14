import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

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
    <div className="Edit text-center" style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '50px' }}>
      {props.children}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="reviewer">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            value={review.reviewer}
            type="text"
            onChange={handleTextChange}
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group controlId="title">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            required
            value={review.title}
            placeholder="Review Title"
            onChange={handleTextChange}
          />
        </Form.Group>
        <Form.Group controlId="rating">
          <Form.Label>Rating:</Form.Label>
          <Form.Control
            type="number"
            name="rating"
            min="0"
            max="5"
            step="1"
            value={review.rating}
            placeholder="Whats The Rating?"
            onChange={handleTextChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>Review:</Form.Label>
          <Form.Control
            as="textarea"
            name="content"
            value={review.content}
            placeholder="So What Did You Think..."
            onChange={handleTextChange}
            required
          />
        </Form.Group>

        <br />

        <Button type="submit" variant="primary" style={{ backgroundColor: '#4CAF50', fontFamily: 'Funk Gibson' }}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ReviewForm;

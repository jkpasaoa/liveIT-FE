import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Snack({ snack }) {
  return (
    <tr>
      <td>
        <Card bg="light" style={{ width: "18rem" }} className="text-center">
          <Card.Header>
            {snack.is_healthy ? (
              <span>🥗 It's Healthy 👍🏼</span>
            ) : (
              <span>🍩 Not The Healthiest Choice 👎🏼</span>
            )}
          </Card.Header>
          <Card.Body>
            <Card.Title>{snack.name}</Card.Title>
            <Card.Text>
              <a href={snack.url} target="_blank" rel="noreferrer">
                {snack.url}
              </a>
            </Card.Text>
            <Link to={`/snacks/${snack.id}`}>
              <Button style={{ backgroundColor: "chartreuse", fontFamily: "Funk Gibson" }}>
                Tell Me More 🧋
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </td>
    </tr>
  );
}

export default Snack;

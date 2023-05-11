import { Link } from "react-router-dom";


function Snack({ snack }) {
  console.log(snack.id)
  return (
    <tr>
      <td>
        {snack.is_healthy ? (
          <span>🥗</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>

      <td>
        <a href={snack.url} target="_blank" rel="noreferrer">
          {snack.name}
        </a>
      </td>

      <td>
        <Link to={`/snacks/${snack.id}`}>🥐</Link>
      </td>
    </tr>
  );
}

export default Snack;

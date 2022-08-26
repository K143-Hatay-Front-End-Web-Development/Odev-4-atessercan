import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-header">
          <Link to={`/detail:${props.id}`}>
            <img
              src={props.image}
              width="240"
              height="240"
              alt="A marvel character"
            />
          </Link>
        </div>
        <div className="card-footer">
          <div className="card-footer-title">{props.title}</div>
          <div className="card-footer-description">{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

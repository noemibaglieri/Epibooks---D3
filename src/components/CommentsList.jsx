import { Badge } from "react-bootstrap";

const CommentsList = (props) => {
  return props.comments.map((comment) => (
    <p key={comment._id}>
      {comment.author} - {comment.comment} <Badge bg="dark">{comment.rate}</Badge>
    </p>
  ));
};

export default CommentsList;

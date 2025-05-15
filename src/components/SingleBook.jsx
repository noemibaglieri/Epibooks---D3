import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";
import AddComment from "./AddComment";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const book = this.props.book;
    return (
      <>
        <Card className={this.state.selected && "card-border"}>
          <Card.Img
            variant="top"
            src={book.img}
            onClick={() => {
              this.setState({ selected: !this.state.selected });
            }}
          />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
          {this.state.selected && <CommentArea asin={book.asin} />}
        </Card>
        <AddComment />
      </>
    );
  }
}

export default SingleBook;

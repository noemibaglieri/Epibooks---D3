import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const book = this.props.book;
    return (
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
      </Card>
    );
  }
}

export default SingleBook;

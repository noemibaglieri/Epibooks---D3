import { Component } from "react";
import { Col } from "react-bootstrap";
import CommentsList from "./CommentsList";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchReviews = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0N2RkYzFjMjUwNDAwMTUxYWI2NWMiLCJpYXQiOjE3NDczMjAwNDQsImV4cCI6MTc0ODUyOTY0NH0.3Z-wQuvmWu1sF908fRis_enlN25YFcYk4cG7OtnjzOA",
        },
      });

      if (response.ok) {
        const comments = await response.json();
        this.setState({ comments });
      } else {
        throw new Error("Errore nel reperimento delle reviews");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchReviews();
  }

  render() {
    return (
      <div>
        <h6 className="text-info">Recensioni</h6>
        <CommentsList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;

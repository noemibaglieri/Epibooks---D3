import { Component } from "react";
import { Button, Col, Form } from "react-bootstrap";

class AddComment extends Component {
  render() {
    return (
      <Col className="m-auto my-3 bg-light p-3 rounded-3 border">
        <Form>
          <Form.Group className="mb-3" controlId="commentDesc">
            <Form.Label>Scrivi una recensione: </Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="commentRating">
            <Form.Label>Stelle meritate:</Form.Label>
            <Form.Select aria-label="choose a rating">
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit" variant="outline-dark">
            Invia recensione
          </Button>
        </Form>
      </Col>
    );
  }
}

export default AddComment;

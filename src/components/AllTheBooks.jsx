import { Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/books/fantasy.json";

const AllTheBooks = () => {
  return (
    <Row xs={12} md={4} className="g-3">
      {fantasy.map((book) => {
        return (
          <Col key={book.asin}>
            <Card className="book-cover d-flex flex-column">
              <Card.Img variant="top" src={book.img} style={{ height: "400px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default AllTheBooks;

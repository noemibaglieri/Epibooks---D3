import SingleBook from "./SingleBook";
import { Component } from "react";
import { Col, Row } from "react-bootstrap";
// import fantasy from "../data/books/fantasy.json";

class BookList extends Component {
  render() {
    const books = this.props.books;

    return (
      <>
        <Row xs={12} md={4} className="g-3">
          {books.map((book) => {
            return (
              <Col key={book.asin}>
                <SingleBook key={book.asin} book={book} />
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default BookList;
// const BookList = function (prop) {
//   return prop.map((book) => {
//     console.log(book);
//   });
// };

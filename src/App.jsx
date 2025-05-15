import "./App.css";
import MyNav from "./components/MyNav.jsx";
import Welcome from "./components/Welcome.jsx";
import MyFooter from "./components/MyFooter.jsx";
import { Container } from "react-bootstrap";
import BookList from "./components/BookList.jsx";
import fantasy from "./data/books/fantasy.json";
import horror from "./data/books/horror.json";

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <BookList books={horror} />
        <BookList books={fantasy} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;

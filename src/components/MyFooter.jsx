import { Col, Container, Row } from "react-bootstrap";
import { Instagram, Linkedin, TwitterX } from "react-bootstrap-icons";

const MyFooter = function () {
  return (
    <Container className="my-4 ">
      <Row xs={1} md={2} lg={3} className="text-right">
        <Col>
          <h5 className="footer-title">Resta aggiornato</h5>
          <ul className="d-flex gap-2 justify-content-left">
            <li>
              <Linkedin />
            </li>
            <li>
              <Instagram />
            </li>
            <li>
              <TwitterX />
            </li>
          </ul>
        </Col>
        <Col className="d-flex flex-column">
          <h5 className="footer-title">Epibooks</h5>
          <ul>
            <li>Via delle Rose, 87</li>
            <li>04100 - Latina</li>
            <li>P.IVA: 41351960780</li>
          </ul>
        </Col>
        <Col>
          <h5 className="footer-title">Legal</h5>
          <ul>
            <li>Privacy Policy</li>
            <li>Shipment & Returns</li>
            <li>FAQ</li>
            <li>Work with us</li>
            <li>Contacts</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;

import { Col, Container, Row, Button } from 'react-bootstrap';

const intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-item-center">
        <Row>
          <Col>
            <div className="tittle">NONTON GRATIS </div>
            <div className="tittle">GAK PAKE KARCIS</div>
            <div className="introButton mt-4 text-center">
              <button variant="dark">Lihat Semua List</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default intro;

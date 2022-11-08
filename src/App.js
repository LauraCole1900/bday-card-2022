import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import Confetti from 'react-confetti';
import AudioEmbed from './components/audioEmbed/audioEmbed';
import './App.css';

function App() {
  return (
    <Container>
      <Row>
        <Col className="centered">
          <h1>Happy birthday!</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 10, offset: 1 }}>
          <AudioEmbed src='#' title='Happy Birthday' />
        </Col>
      </Row>
      <Confetti />
    </Container>
  );
}

export default App;

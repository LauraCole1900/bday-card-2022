import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import Confetti from 'react-confetti';
import AudioEmbed from './components/audioEmbed';
import Candle from './components/candle';
import './App.css';

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col className="centered">
            <h1>Happy birthday!</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 10, offset: 1 }}>
            <AudioEmbed src='https://drive.google.com/uc?export=download&id=1IfOuH_p6yIxBJBlANmvhNsKRA_RqOgov' title='Happy Birthday' />
          </Col>
        </Row>
        <Row>
          <Candle />
        </Row>
      </Container>
      <Confetti />
    </>
  );
}

export default App;

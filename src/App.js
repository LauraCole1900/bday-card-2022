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
            <AudioEmbed src='https://res.cloudinary.com/gcpmcloud2022/video/upload/v1668114618/Happy_Birthday_mp3_doabum.mp3' title='Happy Birthday' />
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

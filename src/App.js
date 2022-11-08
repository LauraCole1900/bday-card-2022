import { Container, Col, Row } from 'react-bootstrap';
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
        <Col>
          <AudioEmbed src='#' title='Happy Birthday' />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

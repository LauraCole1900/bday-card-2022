import { useEffect, useRef, useState } from "react";
import { Button, Form, Row } from "react-bootstrap"
import PropTypes from "prop-types";
import "./style.css";

const AudioEmbed = ({ title, src }) => {

  //=================//
  //   State & Ref   //
  //=================//

  const audioRef = useRef();
  const [pbr, setPbr] = useState(1.0);

  console.log(audioRef.current)

  //=================//
  //     Methods     //
  //=================//

  // sets playback rate
  const handleSetRate = (e) => {
    let varPbr = 100;
    if (e.target.value === "slow") {
      varPbr = (pbr * 100) - 5;
      if (pbr <= .50) {
        varPbr = 50;
      }
    } else if (e.target.value === "fast") {
      varPbr = (pbr * 100) + 5;
      if (pbr >= 2.00) {
        varPbr = 200;
      }
    } else {
      varPbr = 100;
    }
    varPbr = varPbr/100;
    setPbr(varPbr);
  };

  // sets playback rate from slider
  const handleSetPlayback = (e) => {
    setPbr(e.target.value);
  };


  //======================//
  //   Run on page load   //
  //======================//

  // sets initial playbackRate on page load
  useEffect(() => {
    audioRef.current.playbackRate = pbr
  }, [pbr]);


  return (
    <>
      <Row className="audio-responsive centered" >
        <audio controls ref={audioRef} playbackRate={pbr} >
          <source src={src}
            title={title}
            type="audio/mp3" />
        </audio>
      </Row>

      <Form>
        <Form.Group controlId="pbrSlider">
          <Row className="centered">
            <Form.Label className="pbrLabel">Playback Speed: {Math.round(pbr * 100)}%</Form.Label>
            <Form.Range onChange={handleSetPlayback} value={pbr} min="0.5" max="2.0" step="0.05" className="pbrSlider" variant="dark" />
          </Row>
        </Form.Group>
        <Row className="around">
          <Button className="pbrButton button" value="slow" onClick={handleSetRate}>Slower</Button>
          <Button className="pbrButton button" value="normal" onClick={handleSetRate}>Normal</Button>
          <Button className="pbrButton button" value="fast" onClick={handleSetRate}>Faster</Button>
        </Row>
      </Form>
    </>
  )
};

AudioEmbed.propTypes = {
  src: PropTypes.string.isRequired
};

export default AudioEmbed;
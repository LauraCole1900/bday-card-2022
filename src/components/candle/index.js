import { useState } from 'react';
import './style.css';

const Candle = () => {

  const [burning, setBurning] = useState(true);
  const [glowing, setGlowing] = useState(true);
  const [smoking, setSmoking] = useState(false);

  const handleClick = () => {
    setBurning(!burning);
    setGlowing(!glowing);
    setSmoking(!smoking);
  }

  
  return (
    <>
      {glowing &&
        <div className="glow" id="glow"></div>}
      <div id="candle">
        <div className="stripe"></div>
        <div className="stripe"></div>
        <div className="stripe"></div>
        <div className="stripe"></div>
        <div className="stripe"></div>
        <div id="top">
          <div className={smoking ? "smoke puff-bubble" : "smoke"}></div>
          <div className={smoking ? "smoke puff-bubble" : "smoke"}></div>
          <div className={smoking ? "smoke puff-bubble" : "smoke"}></div>
          <div id="knot"></div>
          <div className={burning ? "burn" : "puff"} id="flame" onClick={handleClick}></div>
        </div>
      </div>
      {glowing
        ? <h2 className="candleHeader">Make a wish and blow out the candle</h2>
        : <h2 className="candleHeader">It will come true!</h2>}
    </>
  )
}

export default Candle;
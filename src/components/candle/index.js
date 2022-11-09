import { useState } from 'react';
import './style.css';

const Candle = () => {

  const [burning, setBurning] = useState(true);
  const [glowing, setGlowing] = useState(true);


  // let flame = document.getElementById("flame");
  // let txt = $('h1');

  // flame.on({
  //   click: function () {
  //     flame.classList.remove("burn").classList.add("puff");
  //     document.getElementByClassName("smoke").each(function () {
  //       this.classList.add("puff-bubble");
  //     });
  //     let glow = document.getElementById("glow");
  //     glow.parentNode.removeChild(glow);
  //     txt.style.display = "none".innerHTML = "It <b>will</b> come true..".delay(750).fadeIn(300);
  //     document.getElementById("candle").animate({
  //       'opacity': '.5'
  //     }, 100);
  //   }
  // })

  const handleClick = () => {
    setBurning(!burning);
    setGlowing(!glowing);
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
          <div className="smoke"></div>
          <div className="smoke"></div>
          <div className="smoke"></div>
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
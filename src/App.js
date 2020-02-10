import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import styles from './Circles.module.css';



const App = () => {

  const [zoom, setZoom] = useState(3)
  const [x, setX] = useState(0);
  const [y, setY] = useState(0.1);
  const [turn, setTurn] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      let max = 3;
      let min = -3

      console.log(x, turn)
      if (!turn)
        setX(x + .1);
      if (!turn && x >= max)
        setTurn(true);

      if (turn)
        setX(x - .1);

      if (turn && x <= min)
        setTurn(false);

      //setY(y + .1);
      clearTimeout(timer);
    }, 1000 / 50);
  }, [x])

  var c, ctx, cw, ch, minX, minY, imageData, data;

  const update = () => {
    for (var X = 0; X < cw; X++) {
      for (var Y = 0; Y < ch; Y++) {
        var RC = minX + (zoom * X) / cw;
        var IC = minY + (zoom * Y) / ch;

        var RZ = x;
        var IZ = y;

        for (var a = 0; a <= 50; a++) {
          var R = RZ;
          var I = IZ;

          RZ = R * R - I * I + RC;
          IZ = 2 * (R * I) + IC;

          if (RZ * RZ + IZ * IC >= 50)
            break;
        };

        draws(X, Y, a);
      };
    };
  }

  const draws = (x, y, cound) => {
    var index = (y * cw + x) * 4;
    data[index] = cound * 15 * -1 + 255;    // red
    data[++index] = cound * 10 * -1 + 255;    // green
    data[++index] = cound * 20 * -1 + 0;    // blue
    data[++index] = 255;      								// alpha 
  };
  //var c, ctx, cw, ch, minX, minY, imageData, zoom, data;
  useEffect(() => {
    
    c = document.getElementById('c');
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    ctx = c.getContext('2d');

    cw = c.width;
    ch = c.height;

    ctx.clearRect(0, 0, cw, ch);

    imageData = ctx.getImageData(0, 0, cw, ch);
    data = imageData.data;

    minX = -2.2;
    minY = -1.8;
    //zoom = 3;

    update();

    ctx.putImageData(imageData, 0, 0);
  }, [zoom, x, y])

  const [circles, setCirlces] = useState(null);

  const draw = () => {
    let c = React.createElement("div");

    for (let i = 0; i < 100; i++) {
      let asd = React.createElement("div", { className: styles.circle }, c);

      c = asd;
    }




    setCirlces(c);
  };

  useEffect(() => {
    //  draw();
  }, [])

  return (
    <div className="App">

      {/*<div className={styles.Circles}>*/}
     <canvas id="c" width="512" height="512"></canvas>
      {
        //circles
      }


      {/* </div>*/}

    </div>
  );
}

export default App;

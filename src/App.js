import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import styles from './Circles.module.css';



const App = () => {

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
    draw();
  }, [])

  return (
    <div className="App">

      <div className={styles.Circles}>

        {
          circles
        }
        

      </div>

    </div>
  );
}

export default App;

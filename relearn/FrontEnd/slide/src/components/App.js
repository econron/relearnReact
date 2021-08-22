import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import Ingredient from './Ingredient/index';
import News from './News/index';
import Programming from './Programming/index';
import Vaccine from './Vaccine/index';
import MenuBar from './MenuBar';
import axios from 'axios';

const baseUrl = "http://127.0.0.1:8000/api/state";
// axios.defaults.headers.post['Content-Type'] = 'application/json';

const App = () => {
  const [component, setComponent] = useState('vaccine');
  const [toggle, set] = useState(false)
  const transitions = useTransition(toggle, {
    from: { position: 'absolute', opacity: 0.3 },
    enter: { opacity: 1 },
    leave: { opacity: 0.3 },
    reverse: toggle,
    config : { duration: 4000 },
    // config: config.molasses,
    onRest: () => set(!toggle),
  })

  console.log('component: ' + component);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setComponent(response.data.state);
    });
  });
  
  let next = '';
  let renderObject = '';
  let order = {
    1:'news', 
    2:'ingredient', 
    3:'programming', 
    4:'vaccine'
  };
  
  switch(component) {
    case 'news':
      next = order[2];
      renderObject = <News />
      break;
    case 'ingredient':
      next = order[3];
      renderObject = <Ingredient />;
      break;
    case 'programming':
      next = order[4];
      renderObject = <Programming />;
      break;
    case 'vaccine':
      next = order[1];
      renderObject = <Vaccine />;
      break;    
  }

  useEffect(() => {
    axios.post(baseUrl, {
      'state': next
    });
  });

  console.log('next: ' + next);

  return transitions(({ opacity }) =>
    (
      <>
      <animated.div
        style={{
          position: 'absolute',
          opacity: opacity.to({ range: [1.0, 0.0], output: [0, 1] }),
        }}>
        { renderObject }
        <MenuBar styledimage={component} />
      </animated.div>
      </>
    )
  );
};  

export default App;

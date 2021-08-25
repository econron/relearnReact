import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import Ingredient from './Ingredient/index';
import News from './News/index';
import Programming from './Programming/index';
import Vaccine from './Vaccine/index';
import MenuBar from './MenuBar';
import axios from 'axios';
import './app.css'

const baseUrl = "http://127.0.0.1:8000/api/state";
// axios.defaults.headers.post['Content-Type'] = 'application/json';

const App = () => {
  const [component, setComponent] = useState('vaccine');

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

  useEffect(() => {
    window.setTimeout(() => {
    let fade = document.getElementById('fade');
    fade.className = '';
    fade.className= 'first';
    }, 4000);
  });


  useEffect(() => {
    window.setTimeout(() => {
    let fade = document.getElementById('fade');
    fade.className = '';
    fade.className= 'fade';
    }, 8000);
  });

  return (
    <div id="fade" className="first">
    { renderObject }
      <MenuBar styledimage={component} />
    </div>
  );
};

export default App;

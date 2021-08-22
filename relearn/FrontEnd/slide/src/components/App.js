import React, { useState, useEffect, useReducer } from 'react';
import Ingredient from './Ingredient/index';
import News from './News/index';
import Programming from './Programming/index';
import Vaccine from './Vaccine/index';
import MenuBar from './MenuBar';

const App = () => {
  // 実装内容
  // APIで取得した値に基づき、再レンダーするコンポーネントを決定する
  // メニューバーコンポーネントは残す

  // API作成は後にして、一旦localstorageで管理する
  if(!localStorage.getItem('next')){
    localStorage.setItem('next', 'ingredient');
  }
  let previous = localStorage.getItem('next');
  let next = '';
  let renderObject = '';
  let order = ['ingredient', 'news', 'programming', 'vaccine'];

  switch(previous) {
    case 'ingredient':
      next = order[1];
      renderObject = <News />;
      break;
    case 'news':
      next = order[2];
      renderObject = <Programming />;
      break;
    case 'programming':
      next = order[3];
      renderObject = <Vaccine />;
      break;
    case 'vaccine':
      next = order[0];
      renderObject = <Ingredient />;
      break;
    default:
      next = order[0];
      renderObject = <Ingredient />;      
  } 
  
  localStorage.setItem('next', next);

  return (
    <>
    { renderObject }
    <MenuBar />
    </>
  );
};

export default App;

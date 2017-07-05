import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppContainer from './App';
import './index.css';

// yarn add redux @types/redux
import {createStore, applyMiddleware} from 'redux';
// yarn add react-redux @types/react-redux
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {middleware} from './Middleware';

// 타입 정의
const ADD_AGE = 'ADD_AGE';

// 타입 생성 함수
export function addAge(): { type: string; } {
  return {
    type: ADD_AGE
  };
}

export function addAgeAsync() {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(addAge());
    }, 1000);
  };
}

// 리듀서
function ageApp(state: { age: number; } = {age: 35}, action: { type: string; }): { age: number; } {
  if (action.type === ADD_AGE) {
    return {age: state.age + 1};
  }
  return state;
}

// 스토어 만들기
const store = createStore<{ age: number; }>(ageApp, applyMiddleware(middleware, thunk));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
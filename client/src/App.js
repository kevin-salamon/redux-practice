import React from 'react';
import Posts from "./components/Posts";
import Postsform from "./components/Postsform";
import { Provider } from 'react-redux';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <>
      <Postsform />
      <Posts />
      </>
    </Provider>
  )
}

export default App;

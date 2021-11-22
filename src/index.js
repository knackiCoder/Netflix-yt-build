import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { GlobalStyles } from "./global-styles";
import 'normalize.css';
import { Firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';
import { ProvideAuth } from './hooks/use-auth-listener';

render(
  <>
    <FirebaseContext.Provider value={{ Firebase }}>
      <ProvideAuth>
      <GlobalStyles />
        <App />
      </ProvideAuth>
    </FirebaseContext.Provider>
  </>, document.getElementById('root'));


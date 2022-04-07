import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter  } from "react-router-dom";
import ContextCryto from './contextApi/ContextCryto';
import 'react-alice-carousel/lib/alice-carousel.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ContextCryto>
        <App />
      </ContextCryto>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import PageRoutes from './Routes';
import './assets/css/animate.css';
import './assets/css/bootstrap.css';
import './assets/css/custom.css';
import './assets/css/flaticon.css';
import './assets/css/font-awesome-all.css';
import './assets/css/jquery-ui.css';
import './assets/css/jquery.fancybox.min.css';
import './assets/css/nice-select.css';
import './assets/css/owl.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/frontend-lite-min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageRoutes />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

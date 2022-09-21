import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './Hello';
import Counter from './Counter';
import App from './App';
import MyList from './MyList';
import MyTable from './MyTable';
import MyForm from './MyForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello firstName="John" lastName="Johnson"/>
    <Counter/>
    <App/>
    <MyList/>
    <MyTable/>
    <MyForm/>
  </React.StrictMode>
);
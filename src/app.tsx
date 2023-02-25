import React from 'react';
import ReactDOM from 'react-dom/client';


const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};


//Mouny the App component to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
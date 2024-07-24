// App.js
import React from 'react';
import Header from './features/header';
import Footer from './features/footer';
import Main from './features/main';
import NavTop from './features/navtop';

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavTop />
      <Main/>
      <Footer />
    </div>
  );
};

export default App;

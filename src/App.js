import React from 'react';
import './App.css';
import Header from './components/header';
import TopFold from './components/topfold';
import Brand from './components/brands';
import TrandingNft from './components/tranding_nft';
import Footer from './components/footer';
import Info from './components/info';

function App() {
  return (
    <div>
      <Header />
      <TopFold />
      <Brand />
      <TrandingNft />
      <Info />
      <Footer />
    </div>
  );
}

export default App;

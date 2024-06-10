import React from 'react';
import { useStore } from './store';
import Header from '../src/component/Header';
import Features from '../src/component/Feature';
import Footer from '../src/component/Footer';
import Admin from './pages/admin';

const App: React.FC = () => {
  

  return (
    <div>
       <Admin />
    </div>
  );
};

export default App;

import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './src/pages/Home.tsx';
import NotFound from './src/pages/NotFound.tsx';

const App: React.FC = () => {
  return (
    <Theme appearance="dark" radius="large" scaling="100%">
      <Router>
        <main className="min-h-screen font-sans selection:bg-primary/30">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            theme="dark"
            hideProgressBar
          />
        </main>
      </Router>
    </Theme>
  );
}

export default App;
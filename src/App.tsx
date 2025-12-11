// App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MarvelRaceFinal from './pages/MarvelRaceFinal';
import Privacy from './pages/Privacy'; // 새로 만들 컴포넌트

const App: React.FC = () => (
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<MarvelRaceFinal />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<Privacy />} />
    </Routes>
  </BrowserRouter>
);
// const App: React.FC = () => {
//   return (
//     <div className="app-container">
//       <MarvelRaceFinal />
//     </div>
//   );
// };

export default App;
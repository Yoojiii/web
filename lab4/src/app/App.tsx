import React from 'react';
import { MainPage } from '../pages/MainPage';
import '../shared/index.css';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <MainPage />
    </div>
  );
};

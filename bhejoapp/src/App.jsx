import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './templates/auth/Login';
import Register from './templates/auth/Register';
import Error404 from './templates/error/Error404';
import OnBoarding from './templates/app/OnBoarding';
import QrPage from './templates/app/template/QrPage';
import Conversation from './templates/app/Conversation';
 
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Auth Path Route */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/change-password" element={<h1>Change Password Page</h1>} />
          <Route path="*" element={<Error404 />} />
          
          {/* App Path Route */}
          <Route path="/onboarding" element={<OnBoarding /> } />
          <Route path="/conversation" element={<Conversation/>} />
          <Route path="/get-started" element={<QrPage/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/guest/HomePage';
import LoginPage from './pages/guest/LoginPage';
import InscriptionPage from './pages/guest/InscriptionPage';
import ContactPage from './pages/guest/ContactPage';
import CoworksPage from './pages/guest/CoworksPPage';
import ClosedSpacePage from './pages/guest/ClosedSpacePage';
import MettingRoomPage from './pages/guest/MettingRoomPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/inscription' element={<InscriptionPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/coworks' element={<CoworksPage />} />
        <Route path='/closedspace' element={<ClosedSpacePage />} />
        <Route path='/mettingroom' element={<MettingRoomPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

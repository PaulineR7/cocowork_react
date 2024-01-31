import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/guest/HomePage';
import LoginPage from './pages/guest/LoginPage';
import InscriptionPage from './pages/guest/InscriptionPage';
import ContactPage from './pages/guest/ContactPage';
import CoworksPage from './pages/guest/CoworksPPage';
import ClosedSpacePage from './pages/guest/ClosedSpacePage';
import MettingRoomPage from './pages/guest/MettingRoomPage';
import DashboardAdmin from './pages/admin/DashboardAdmin';
import AdminUsersPage from './pages/admin/AdminUsersPage';
import AdminMeetingRoom from './pages/admin/AdminMettingRoom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
                  {/* ROUTES USERS */}
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/inscription' element={<InscriptionPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/coworks' element={<CoworksPage />} />
        <Route path='/closedspace' element={<ClosedSpacePage />} />
        <Route path='/mettingroom' element={<MettingRoomPage />} />

                  {/* ROUTES ADMIN */}
        <Route path='/admin' element={<DashboardAdmin />} />
        <Route path='/admin/users' element={<AdminUsersPage />} />
        <Route path='/admin/meetingroom' element={<AdminMeetingRoom />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

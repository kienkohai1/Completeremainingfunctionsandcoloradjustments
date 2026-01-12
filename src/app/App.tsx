import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import CourtManagement from './pages/CourtManagement';
import StaffManagement from './pages/StaffManagement';
import TicketBooking from './pages/TicketBooking';
import AdditionalRequests from './pages/AdditionalRequests';
import Shopping from './pages/Shopping';

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-[#f7f7f7]">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/courts" element={<CourtManagement />} />
            <Route path="/staff" element={<StaffManagement />} />
            <Route path="/tickets" element={<TicketBooking />} />
            <Route path="/requests" element={<AdditionalRequests />} />
            <Route path="/shopping" element={<Shopping />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

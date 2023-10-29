import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import PlayerPage from './pages/PlayerPage';

export default function App() {
   return (
      <>
         <Navbar />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/watch/:videoID" element={<PlayerPage />} />
         </Routes>
         <Footer />
      </>
   );
}

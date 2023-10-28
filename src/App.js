import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MissionList from './components/mission';
import RocketList from './components/RocketList';
import Profle from './components/Profle';
import './styles/App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<RocketList />} />
        <Route path="/rockets" element={<RocketList />} />
        <Route path="/mission" element={<MissionList />} />
        <Route path="/profile" element={<Profle />} />
      </Routes>
    </>
  );
}

export default App;

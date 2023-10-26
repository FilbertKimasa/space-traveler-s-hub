import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MissionList from './components/mission';
import RocketList from './components/RocketList';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/mission" element={<MissionList />} />
        <Route path="/rockets" element={<RocketList />} />
        <Route path="/mission" element={<mission />} />
      </Routes>
    </>
  );
}

export default App;

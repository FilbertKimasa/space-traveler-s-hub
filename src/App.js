/* eslint-disable */
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MissionList from './components/mission';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/mission" element={<MissionList />} />
      </Routes>
    </>
  );
}

export default App;

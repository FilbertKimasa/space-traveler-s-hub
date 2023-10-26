import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import RocketList from './components/RocketList';
import './styles/App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/rockets" element={<RocketList />} />
        <Route path="/mission" element={<mission />} />
      </Routes>
    </>
  );
}

export default App;

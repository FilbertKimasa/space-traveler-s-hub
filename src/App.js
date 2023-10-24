import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Header';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/mission" element={<mission />} />
      </Routes>
    </>
  );
}

export default App;

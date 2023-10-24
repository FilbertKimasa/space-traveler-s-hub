import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/mission" element={<mission />} />
      </Routes>
    </>
  );
}

export default App;

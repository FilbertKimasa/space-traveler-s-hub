import Navigation from './components/Header';
import { Route, Routes } from 'react-router-dom'; 
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        
        <Route path="/mission" element={<mission/>} />
      </Routes>
    </>
  );
}

export default App;

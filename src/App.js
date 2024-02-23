import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route exact path="/" key="general" element={<News pageSize={6} country="us" category="general"></News>}></Route>
      <Route exact path="/business" key="business" element={<News pageSize={6} country="us" category="business"></News>}></Route>
      <Route exact path="/entertainment" key="entertainment" element={<News pageSize={6} country="us" category="entertainment"></News>}></Route>
      <Route exact path="/health" key="health" element={<News pageSize={6} country="us" category="health"></News>}></Route>
      <Route exact path="/science" key="science" element={<News pageSize={6} country="us" category="science"></News>}></Route>
      <Route exact path="/sports" key="sports" element={<News pageSize={6} country="us" category="sports"></News>}></Route>
      <Route exact path="/technology" key="technology" element={<News pageSize={6} country="us" category="technology"></News>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NewsItem from './components/NewsItem';
import News from './components/News';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <News></News>
    </>
  );
}

export default App;

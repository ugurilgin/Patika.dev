import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import BlogArea from './components/BlogArea';
import Corousel from './components/Corousel';

function App() {
  return (
    <div className="App">
     
     <Header/>
     
     <Corousel/>
    <BlogArea/>
    </div>
  );
}

export default App;

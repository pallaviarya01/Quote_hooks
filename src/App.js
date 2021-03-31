import logo from './logo.svg';
import './App.css';
import Header from './shared/header'
import Footer from './shared/footer'
import Quotes from './component/quotes'
function App() {
  return (
    <div className="App">
      <Header/>
      <Quotes/>
      <Footer/>
    </div>
  );
}

export default App;

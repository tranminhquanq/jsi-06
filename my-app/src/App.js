import './App.css';
import Header from './Header';
import Navigation from './Navigation'
import Sidebar from './Sidebar'
import Content from './Content'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div className="container">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;

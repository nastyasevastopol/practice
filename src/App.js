import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Content from './components/Content';
import data from './data';
import alerts from './alerts';

function App() {
  return (
    <div className="App">
      <Header src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPTLYmq9U-LTNq-aKr2hwqz8k8blo8bzir5-UbHGf&s' title='Это учебный проект'></Header>
      <Nav navArr={data}></Nav>
      <Content contentArr={alerts}></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;

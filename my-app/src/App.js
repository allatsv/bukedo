
import { Header } from './components';
import { Footer } from './components';
import { Corporate,Bonussystem,Paymentdelivery } from './pages';
function App() {
  return (
    <div className="App">
        <Header/>
          <Corporate/>
          <Bonussystem/>
          <Paymentdelivery/>
        <Footer/>
    </div>
  );
}

export default App;

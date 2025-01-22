
import { Header } from './components';
import { Footer } from './components';
import { Corporate,Bonussystem,Paymentdelivery, Agreement, AboutCompany, OrderPayment } from './pages';
function App() {
  return (
    <div className="App">
        <Header/>
          <Agreement/>
          <Corporate/>
          <Bonussystem/>
          <Paymentdelivery/> 
          <AboutCompany/>
          <OrderPayment/>
        <Footer/>
    </div>
  );
}

export default App;

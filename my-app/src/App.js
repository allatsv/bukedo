
import { Header } from './components';
import { Footer } from './components';
import { Recipient } from './components';
import { MakeOrder } from './components';
import { Counter } from './components';
import { CountersList } from './components';
import { Corporate,Bonussystem,Paymentdelivery, Agreement, AboutCompany, OrderPayment, Catalog } from './pages';
function App() {
  return (
    <div className="App">
        <Header/>
        <Counter/>
        <CountersList/>
          <MakeOrder/>
          <Recipient/>
          <Catalog/>
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

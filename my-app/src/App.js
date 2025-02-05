import { Header } from './components';
import { Footer } from './components';
import { Recipient } from './components';
import { Counter } from './components';
import { CountersList } from './components';
import { Cart } from './components';
import { date } from './date';




import { Corporate,Bonussystem,Paymentdelivery, Agreement, AboutCompany, OrderPayment, Catalog, Order, Main,MakeOrder } from './pages';
function App() {
  console.log(date)
  return (
    <div className="App">
      <MakeOrder/>
      <Corporate/>
      <AboutCompany/>
      <Agreement/>
      <Bonussystem/>
      <Order/>
      <Recipient/>
      {  /*<Paymentdelivery data = {date}/> */}

    </div>
  );
}

export default App;

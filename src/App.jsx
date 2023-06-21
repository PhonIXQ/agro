import logo from './logo.svg';
import './App.css';

function App() {
   let today = new Date().toISOString().slice(0, 10);

   const startDate = '2023-05-18';
   const startDate1 = '2023-06-21';
   const endDate = today;

   const diffInMs = new Date(endDate) - new Date(startDate);
   const diffInMs1 = new Date(endDate) - new Date(startDate1);
   const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
   const diffInDays1 = diffInMs1 / (1000 * 60 * 60 * 24);

   return (
      <div className="App">
         <header className="App-header">
            <h2>argo PhonIXQ</h2>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
               Learn React with develop
            </a>
         </header>
         <section>
            <p>2023-05-18</p>
            <p>Pand</p>
            <p>{diffInDays} <span>Day</span></p>
         </section>
         <section>
            <p>2023-06-21</p>
            <p>First 1</p>
            <p>{diffInDays1} <span>Day</span></p>
         </section>
      </div>
   );
}

export default App;

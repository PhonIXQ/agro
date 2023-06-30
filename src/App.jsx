import logo from './logo.svg';
import './App.css';

function App() {
   let today = new Date().toISOString().slice(0, 10);

   const diDay = (date) => {
      const diMs = new Date(today) - new Date(date);
      const diDays = diMs / (1000 * 60 * 60 * 24);
      return diDays;
   };

   const date20230518 = '2023-05-18';
   const date20230508 = '2023-05-08';
   const date20230621 = '2023-06-21';
   // const date20230630 = '2023-06-30';

   return (
      <div className="App">
         <header className="App-header">
            <h2>Argoboy</h2>
            <img src={logo} className="App-logo" alt="logo" />
            <h3>.</h3>
         </header>
         <section>
            <table>
               <thead>
                  <tr>
                     <th>Date</th>
                     <th>#</th>
                     <th>Name</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>2023-05-08</td>
                     <td>Beta</td>
                     <td>Rocket</td>
                     <td className="tdlast">{diDay(date20230508)} Day</td>
                  </tr>
                  <tr>
                     <td>2023-05-18</td>
                     <td>Pand</td>
                     <td>
                        <ol>
                           <li>Butterhead</li>
                        </ol>
                     </td>
                     <td className="tdlast">{diDay(date20230518)} Day</td>
                  </tr>
                  <tr>
                     <td>2023-06-21</td>
                     <td>First</td>
                     <td>
                        <ol>
                           <li>Green Cos</li>
                           {/* <li>Red Cos</li> */}
                        </ol>
                     </td>
                     <td className="tdlast">{diDay(date20230621)} Day</td>
                  </tr>
               </tbody>
            </table>
         </section>

         <footer>
            <a href="/">PhonIXQ</a> <span>&copy; 2023</span>
         </footer>
      </div>
   );
}

export default App;

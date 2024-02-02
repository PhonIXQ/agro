import logo from './logo.svg';
import './App.css';

function App() {
   let today = new Date().toISOString().slice(0, 10);

   const diDay = (date) => {
      const diMs = new Date(today) - new Date(date);
      const diDays = diMs / (1000 * 60 * 60 * 24);
      return diDays;
   };

   const date20230508 = '2023-05-08';
   const date20230518 = '2023-05-18';
   const date20230621 = '2023-06-21';
   const date20230701 = '2023-07-01';
   const date20230723 = '2023-07-23';
   const date20230805 = '2023-08-05';
   const date20240201 = '2024-02-01';

   const date19981020 = '1998-10-20';

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
                  <tr className='ended'>
                     <td>{date20230508}</td>
                     <td>Beta</td>
                     <td>Rocket</td>
                     <td className="tdlast">{diDay(date20230508)} Day</td>
                  </tr>
                  <tr className='ended'>
                     <td>{date20230518}</td>
                     <td>Pand</td>
                     <td>
                        <ol>
                           <li>Butterhead</li>
                        </ol>
                     </td>
                     <td className="tdlast">{diDay(date20230518)} Day</td>
                  </tr>
                  <tr>
                     <td>{date20230621}</td>
                     <td>#1 st</td>
                     <td>
                        <ol>
                           <li>Green Cos</li>
                        </ol>
                     </td>
                     <td className="tdlast">{diDay(date20230621)} Day</td>
                  </tr>
                  <tr>
                     <td>{date20230701}</td>
                     <td>#2 nd</td>
                     <td>
                        <ol>
                           <li>Red Cos</li>
                           <li>Morning Glory</li>
                        </ol>
                     </td>
                     <td className="tdlast">{diDay(date20230701)} Day</td>
                  </tr>
                  <tr>
                     <td>{date20230723}</td>
                     <td>#3 rd</td>
                     <td>
                        <ol>
                           <li>Green Cos</li>
                           <li>Red Cos</li>
                        </ol>
                     </td>
                     <td className="tdlast">{diDay(date20230723)} Day</td>
                  </tr>
                  <tr>
                     <td>{date20230805}</td>
                     <td>#4 th</td>
                     <td>
                        <ol>
                           <li>Green Cos</li>
                        </ol>
                     </td>
                     <td className="tdlast">{diDay(date20230805)} Day</td>
                  </tr>
                  <tr>
                     <td>{date20240201}</td>
                     <td>#5 th</td>
                     <td>
                        <ol>
                           <li>Corn</li>
                        </ol>
                     </td>
                     <td className="tdlast">{diDay(date20240201)} Day</td>
                  </tr>
               </tbody>
            </table>
         </section>

         <footer>
            <a href="/">PhonIXQ</a> <span>&copy; 2023</span>
            <p>Age {diDay(date19981020)}</p>
         </footer>
      </div>
   );
}

export default App;

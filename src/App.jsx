import logo from './logo.svg';
import './App.css';

function App() {
   let today = new Date().toISOString().slice(0, 10);

   const startDate = '2023-05-18';
   const startDate0 = '2023-05-08';
   const startDate1 = '2023-06-21';
   const endDate = today;

   const diffInMs = new Date(endDate) - new Date(startDate);
   const diffInMs0 = new Date(endDate) - new Date(startDate0);
   const diffInMs1 = new Date(endDate) - new Date(startDate1);
   const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
   const diffInDays0 = diffInMs0 / (1000 * 60 * 60 * 24);
   const diffInDays1 = diffInMs1 / (1000 * 60 * 60 * 24);

   return (
      <div className="App">
         <header className="App-header">
<<<<<<< HEAD
            <h2>Argoboy</h2>
=======
            <h2>argoboy</h2>
>>>>>>> e842c26ccf71e829706e692b5a9ed9cd26a2120c
            <img src={logo} className="App-logo" alt="logo" />
            <h3>.</h3>
         </header>

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
                  <td className="tdlast">{diffInDays0} Day</td>
               </tr>
               <tr>
                  <td>2023-05-18</td>
                  <td>Pand</td>
                  <td>
                     <ol>
                        <li>Butterhead</li>
                     </ol>
                  </td>
                  <td className="tdlast">{diffInDays} Day</td>
               </tr>
               <tr>
                  <td>2023-06-21</td>
                  <td>First</td>
                  <td>
                     <ol>
                        <li>Green Cos</li>
                        <li>Red Cos</li>
                     </ol>
                  </td>
                  <td className="tdlast">{diffInDays1} Day</td>
               </tr>
            </tbody>
         </table>

         <footer>
            <a href="/">PhonIXQ</a> <span>&copy; 2023</span>
         </footer>
      </div>
   );
}

export default App;

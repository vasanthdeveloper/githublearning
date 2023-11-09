//import logo from './logo.svg';
import './App.css';
import {Card} from './Card';
import {Card1} from './Card';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
    <Card cardName="fname"/>
    <Card1 cardName1="fname1" inpType='Text'/>
    <Card1 cardName1="Age" inpType='number'/>
    <Card1 cardName1="DOB" inpType='date'/>
    </div>
  );
}

export default App;

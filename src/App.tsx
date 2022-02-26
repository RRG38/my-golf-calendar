// import React from 'react';
// import './App.css';

// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div>
//           Hello My Golf Calendar
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Profile />
      </header>
    </div>
  )
}

export default App;

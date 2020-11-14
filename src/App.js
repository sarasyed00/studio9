import logo from './logo.svg';
import React from "react";
import './App.css';
import New_component from './New_component';


// export default class App extends React.Component{
//     render(){
//         return (
//             <div className = "App">
//                 <h1>Click the button to increment your grocery count </h1>
//                 <New_component />
//             </div>
//         );
//     }
//
// }

function App() {
    return (
        <div>
            <h1>Click the button to increment your grocery count </h1>
            <New_component />
        </div>
    );
}

export default App;

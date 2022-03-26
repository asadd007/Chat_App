import React from "react";
import {ChatEngine} from "react-chat-engine" 
import './App.css';

function App() {
    return(
       <div className="App">
           <ChatEngine
               height="100vh"
               projectID="26c690e0-5665-45ad-8be4-da5aeeb70ce3"
               userName="Asad"
               userSecret="asadkhan"
           />
       </div>
    );
}
export default App;
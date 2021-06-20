import React from "react";
import ReactDOM from "react-dom";

import Todo from './components/Todo';


function App() {
  return (
    <div>
      <h1>My Todos</h1>
     <Todo  text ='MEET-1'/>
     <Todo text ='MEET-2'/>
     <Todo text ='MEET-3'/>
     

    </div>
  );
}

export default App;

import "./App.css";
import Hello from "./Components/Test";
import Message from "./Components/Classcomp";
import Fun2 from "./Components/Props_in_FBC";
import Fun3 from './Components/Props_in_CBC'

function App() {
  return (
    <div className="App">
      <Hello />
      <Message />

      {/* using props in function base components */}
      <Fun2 name = 'Ashu' />
      <Fun2 name = 'Nishant' sirname='prajapati' />
      
      {/* using props in class base components */}
      <Fun3 age = '20' />
    </div>
  );
}

export default App;
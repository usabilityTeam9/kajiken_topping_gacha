import "./App.css";
import Header from "./components/Header";
import RandomTopping from "./components/RandomTopping";
import ButtonLogic from "./components/ButtonLogic";
function App() {
  return (
    <div className="App">
      <>
        <Header />
        <ButtonLogic />
        <RandomTopping />
      </>
    </div>
  );
}

export default App;
